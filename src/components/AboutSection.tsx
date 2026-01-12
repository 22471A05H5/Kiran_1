import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const philosophyPoints = [
    "Story-first approach — every cut serves the narrative",
    "Clean, cinematic aesthetics with purposeful pacing",
    "Attention to detail in color, sound, and rhythm",
    "Collaborative process with open communication",
    "Deadline-driven without compromising quality",
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground text-glow">
            About
          </h2>
        </div>

        {/* Introduction */}
        <div
          className={`mb-16 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p className="text-xl md:text-2xl text-foreground/90 font-heading font-light leading-relaxed text-center">
            I'm a video editor with a passion for transforming raw footage into
            compelling visual stories. With 8+ months of hands-on experience across brands,
            creators, and agencies, I bring a cinematic eye and meticulous
            attention to every project.
          </p>
        </div>

        {/* Philosophy */}
        <div
          className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h3 className="font-heading text-2xl text-foreground text-center mb-8">
            My Editing Philosophy
          </h3>
          <ul className="space-y-4">
            {philosophyPoints.map((point, index) => (
              <li key={index} className={`flex items-start gap-4 text-muted-foreground font-heading font-light transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`} style={{ transitionDelay: `${(index + 3) * 100}ms` }}>
                <span className="w-2 h-2 mt-2 bg-foreground/50 rounded-full flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stats */}
        <div
          className={`mt-20 grid grid-cols-3 gap-8 text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div>
            <p className="font-heading text-4xl md:text-5xl text-foreground text-glow">
              20+
            </p>
            <p className="mt-2 text-sm text-muted-foreground font-heading uppercase tracking-wider">
              Projects
            </p>
          </div>
          <div>
            <p className="font-heading text-4xl md:text-5xl text-foreground text-glow">
              8+
            </p>
            <p className="mt-2 text-sm text-muted-foreground font-heading uppercase tracking-wider">
              Months
            </p>
          </div>
          <div>
            <p className="font-heading text-4xl md:text-5xl text-foreground text-glow">
              20+
            </p>
            <p className="mt-2 text-sm text-muted-foreground font-heading uppercase tracking-wider">
              Clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
