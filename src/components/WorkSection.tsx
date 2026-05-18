import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import showreelPoster from "@/assets/showreel-poster.jpg";

const WorkSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [audioIndex, setAudioIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeReelIndex, setActiveReelIndex] = useState<number | null>(null);
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
    const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
    setIsMobile(/Mobi|Android|iPhone|iPad|iPod/i.test(ua));
  }, []);

  useEffect(() => {
    if (activeReelIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveReelIndex(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeReelIndex]);

  useEffect(() => {
    if (activeReelIndex === null) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [activeReelIndex]);

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
    {
      title: "Boutique",
      src: import.meta.env.VITE_VIDEO_BOUTIQUE as string | undefined,
    },
    {
      title: "Chetak Vijayawada",
      src: import.meta.env.VITE_VIDEO_CHETAK as string | undefined,
    },
    {
      title: "Speed 400",
      src: import.meta.env.VITE_VIDEO_SPEED as string | undefined,
    },
  ].filter((x) => Boolean(x.src)) as Array<{ title: string; src: string }>;

  const toggleAudio = (index: number) => {
    setAudioIndex((prev) => (prev === index ? null : index));
  };

  const activeReel =
    activeReelIndex === null ? null : showreels[activeReelIndex] ?? null;

  return (
    <section id="work" ref={sectionRef} className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-10 md:mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground text-glow">
            Selected Work
          </h2>
          <p className="mt-4 text-muted-foreground font-body font-light">
            A collection of my best projects
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="https://drive.google.com/drive/folders/1K7tksRNfNQ7MVS9h2JEUdHPgUeyurRjB"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center rounded-full bg-foreground px-6 py-2.5 text-xs font-heading font-semibold uppercase tracking-[0.22em] text-background shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(0,0,0,0.26)]"
            >
              View All Edits
              <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-muted/0 via-background/15 to-muted/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          </div>
        </div>

        {/* Showreel */}
        <div
          className={`relative mb-12 md:mb-14 bg-card/30 rounded-lg overflow-hidden card-glow transition-all duration-700 delay-100 ${
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
                    poster={isMobile ? undefined : showreelPoster}
                    preload={isMobile ? "auto" : "metadata"}
                    controls={false}
                  >
                    <source src={reel.src} type="video/mp4" />
                  </video>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
                    <button
                      type="button"
                      className="pointer-events-auto inline-flex items-center rounded-full border border-border/40 bg-background/50 px-3 py-2 text-xs font-heading uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-md md:opacity-0 md:group-hover:opacity-100"
                      onClick={() => {
                        setActiveReelIndex(index);
                        setAudioIndex(null);
                      }}
                      aria-label={`View ${reel.title} fullscreen`}
                    >
                      View
                    </button>
                  </div>

                  <div className="absolute right-4 top-4">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleAudio(index);
                      }}
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

        {activeReel ? (
          <div
            className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            onClick={() => setActiveReelIndex(null)}
          >
            <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between p-4">
              <div className="text-sm font-heading uppercase tracking-[0.2em] text-white/80">
                {activeReel.title}
              </div>
              <button
                type="button"
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-heading uppercase tracking-[0.2em] text-white hover:bg-white/20"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveReelIndex(null);
                }}
              >
                Close
              </button>
            </div>

            <div
              className="absolute inset-0 z-0 flex items-center justify-center px-4 py-16"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                className="h-full w-full max-w-6xl rounded-lg bg-black object-contain"
                src={activeReel.src}
                autoPlay
                controls
                playsInline
                preload="auto"
              />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default WorkSection;
