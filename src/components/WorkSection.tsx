import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import showreelPoster from "@/assets/showreel-poster.jpg";

const WorkSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [audioIndex, setAudioIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((videoEl, index) => {
      if (!videoEl) return;

      const shouldUnmute = audioIndex === index;
      videoEl.muted = !shouldUnmute;

      if (shouldUnmute) {
        videoEl.play().catch(() => {});
      }
    });
  }, [audioIndex]);

  const showreels = [
    {
      title: "Rajamundry Rose Milk",
      src: import.meta.env.VITE_VIDEO_ROSE_MILK as string | undefined,
    },
    {
      title: "Uber Internship Edit",
      src: import.meta.env.VITE_VIDEO_UBER as string | undefined,
    },
    {
      title: "Glorify Instant",
      src: import.meta.env.VITE_VIDEO_GLORIFY as string | undefined,
    },
  ].filter((x) => Boolean(x.src)) as Array<{ title: string; src: string }>;

  const toggleAudio = (index: number) => {
    setAudioIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="work" ref={sectionRef} className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground text-glow">
            Selected Work
          </h2>
          <p className="mt-4 text-muted-foreground font-body font-light">
            A collection of my best projects
          </p>
        </div>

        {/* Showreel */}
        <div
          className={`relative mb-20 bg-card/30 rounded-lg overflow-hidden card-glow transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {showreels.map((reel, index) => {
              const isAudioOn = audioIndex === index;

              return (
                <div
                  key={reel.title}
                  className="group relative overflow-hidden rounded-lg border border-border/30 bg-background/40"
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    className="w-full h-[420px] md:h-[520px] lg:h-[620px] object-contain bg-background"
                    autoPlay
                    muted={!isAudioOn}
                    loop
                    playsInline
                    poster={showreelPoster}
                    preload="metadata"
                  >
                    <source src={reel.src} type="video/mp4" />
                  </video>

                  <div className="absolute right-4 top-4">
                    <button
                      type="button"
                      onClick={() => toggleAudio(index)}
                      className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/40 px-3 py-2 text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-md transition-all duration-300 hover:bg-background/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 md:opacity-0 md:group-hover:opacity-100"
                      aria-label={isAudioOn ? "Mute audio" : "Play audio"}
                    >
                      {isAudioOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
                      <span className="hidden sm:inline">
                        {isAudioOn ? "Sound On" : "Sound"}
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
