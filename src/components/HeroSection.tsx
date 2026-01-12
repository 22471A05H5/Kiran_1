import { ChevronDown, Play } from "lucide-react";
import profileImage from "@/assets/pic.jpeg";

const HeroSection = () => {
  const scrollToWork = () => {
    const element = document.querySelector("#work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Animated wave background */}
      <div className="absolute inset-0 z-0">
        {/* Wave layers */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[60%] opacity-60"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          <path
            className="animate-[wave_20s_ease-in-out_infinite]"
            fill="hsl(var(--wave-dark))"
            d="M0,300 C360,400 720,200 1080,300 C1260,350 1380,250 1440,280 L1440,600 L0,600 Z"
          />
          <path
            className="animate-[wave_15s_ease-in-out_infinite_reverse]"
            fill="hsl(var(--wave-mid))"
            d="M0,350 C240,280 480,420 720,350 C960,280 1200,420 1440,350 L1440,600 L0,600 Z"
          />
          <path
            className="animate-[wave_25s_ease-in-out_infinite]"
            fill="hsl(var(--wave-light))"
            d="M0,400 C180,350 360,450 540,400 C720,350 900,450 1080,400 C1260,350 1380,430 1440,400 L1440,600 L0,600 Z"
          />
        </svg>

        {/* Gradient overlay from top */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-transparent" />

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-foreground/10 animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full bg-foreground/20 animate-[float_8s_ease-in-out_infinite_1s]" />
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 rounded-full bg-foreground/15 animate-[float_7s_ease-in-out_infinite_2s]" />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 rounded-full bg-foreground/10 animate-[float_9s_ease-in-out_infinite_0.5s]" />
      </div>

      {/* Cinematic film grain overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC40Ii8+PC9zdmc+')]" />

      {/* Main Content - Split Layout */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center py-12 md:py-20 px-6 md:px-12 lg:px-24">

        {/* Left Side - Text Content */}
        <div className="text-center lg:text-left opacity-0 animate-fade-up order-2 lg:order-1">
          {/* Main Heading - Stacked layout */}
          <div className="space-y-1">
            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight tracking-wide">
              Turning{" "}
              <span className="text-muted-foreground">Raw</span>{" "}
              Footage
            </h1>

            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground/90 leading-tight tracking-wide">
              Into{" "}
              <span className="bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent">
                Scroll-Stopping
              </span>{" "}
              Stories
            </h2>
          </div>

          {/* Skills - Clean pill style */}
          <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-2 md:gap-4">
            {["Video Editor", "Reels", "YouTube", "Cinematic Content"].map((skill, index) => (
              <span
                key={skill}
                className="px-3 md:px-4 py-1.5 md:py-2 border border-foreground/20 text-foreground font-heading font-semibold text-xs md:text-sm tracking-wider hover:bg-foreground hover:text-background transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 md:gap-4">
            <button
              onClick={scrollToWork}
              className="group relative px-6 md:px-8 py-2.5 md:py-3 bg-foreground text-background font-heading font-medium tracking-widest text-xs overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,0,0,0.2)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Play size={14} className="fill-current" />
                VIEW MY WORK
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-muted to-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 md:px-8 py-2.5 md:py-3 border border-foreground/30 text-foreground font-heading font-light tracking-widest text-xs hover:border-foreground/60 hover:bg-foreground/5 transition-all duration-500"
            >
              GET IN TOUCH
            </button>
          </div>
        </div>

        {/* Right Side - Unique Picture Frame */}
        <div className="relative opacity-0 animate-fade-up animate-delay-200 flex justify-center order-1 lg:order-2">
          {/* Decorative frame elements */}
          <div className="relative">
            {/* Outer rotating border */}
            <div className="absolute -inset-3 md:-inset-4 border border-foreground/20 rotate-3 transition-transform duration-700 hover:rotate-6" />
            <div className="absolute -inset-6 md:-inset-8 border border-foreground/10 -rotate-2 transition-transform duration-700 hover:-rotate-4" />

            {/* Corner accents */}
            <div className="absolute -top-4 md:-top-6 -left-4 md:-left-6 w-8 md:w-12 h-8 md:h-12 border-l-2 border-t-2 border-foreground/40" />
            <div className="absolute -top-4 md:-top-6 -right-4 md:-right-6 w-8 md:w-12 h-8 md:h-12 border-r-2 border-t-2 border-foreground/40" />
            <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 w-8 md:w-12 h-8 md:h-12 border-l-2 border-b-2 border-foreground/40" />
            <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 w-8 md:w-12 h-8 md:h-12 border-r-2 border-b-2 border-foreground/40" />

            {/* Floating geometric shapes - hidden on mobile */}
            <div className="hidden md:block absolute -top-10 right-1/4 w-4 h-4 bg-foreground/10 rotate-45 animate-[float_5s_ease-in-out_infinite]" />
            <div className="hidden md:block absolute -bottom-8 left-1/3 w-3 h-3 border border-foreground/30 rotate-12 animate-[float_7s_ease-in-out_infinite_1s]" />
            <div className="hidden md:block absolute top-1/4 -right-10 w-2 h-8 bg-foreground/5 animate-[float_6s_ease-in-out_infinite_0.5s]" />

            {/* Main image container */}
            <div className="relative w-56 h-64 sm:w-64 sm:h-72 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] overflow-hidden bg-muted">
              <img
                src={profileImage}
                alt="Video Editor Profile"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />

              {/* Film strip decoration on sides */}
              <div className="absolute left-0 top-0 bottom-0 w-2 md:w-3 bg-foreground/5 flex flex-col justify-around py-4">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-1.5 md:w-2 h-1.5 md:h-2 mx-auto bg-foreground/20 rounded-sm" />
                ))}
              </div>
              <div className="absolute right-0 top-0 bottom-0 w-2 md:w-3 bg-foreground/5 flex flex-col justify-around py-4">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-1.5 md:w-2 h-1.5 md:h-2 mx-auto bg-foreground/20 rounded-sm" />
                ))}
              </div>
            </div>

            {/* Label */}
            <div className="absolute -bottom-3 md:-bottom-4 left-1/2 -translate-x-1/2 bg-background px-3 md:px-4 py-1 border border-foreground/20">
              <span className="font-heading text-[10px] md:text-xs tracking-[0.3em] text-muted-foreground">EDITOR</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Just the animated line */}
      <button
        onClick={scrollToWork}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animate-delay-500"
      >
        <ChevronDown size={20} className="text-muted-foreground hover:text-foreground transition-colors duration-300 animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
