import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    title: "Freelance Video Editor",
    description:
      "Working with brands, creators, and agencies on diverse projects ranging from social media content to documentary films.",
    highlights: [
      "Edited 30+ brand campaigns for e-commerce and lifestyle brands",
      "Created viral content with 10M+ combined views",
      "Collaborated with top YouTube creators",
    ],
  },
  {
    title: "Video Editor at Creative Agency",
    description:
      "Full-time role producing commercial content, promotional videos, and social media campaigns for national clients.",
    highlights: [
      "Led post-production for major product launches",
      "Developed streamlined editing workflows",
      "Trained junior editors on professional techniques",
    ],
  },
  {
    title: "Junior Editor & Motion Designer",
    description:
      "Started professional career creating motion graphics and editing content for digital marketing campaigns.",
    highlights: [
      "Created 100+ animated social media assets",
      "Learned color grading and sound design",
      "Built foundation in storytelling techniques",
    ],
  },
];

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section id="experience" ref={sectionRef} className="section-padding bg-card/30">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground text-glow">
            Experience
          </h2>
          <p className="mt-4 text-muted-foreground font-heading font-light">
            My professional journey in video editing
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`relative pl-8 md:pl-0 pb-16 last:pb-0 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-foreground rounded-full md:-translate-x-1/2 -translate-y-1" />

              <div
                className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
              >
                <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-3">
                  {exp.title}
                </h3>
                <p className="text-muted-foreground font-heading font-light mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="flex items-start gap-3 text-sm text-muted-foreground/80 font-heading font-light"
                    >
                      <span className="w-1.5 h-1.5 mt-1.5 bg-foreground/40 rounded-full flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
