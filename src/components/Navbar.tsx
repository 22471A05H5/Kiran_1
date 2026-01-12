import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-background/70 backdrop-blur-xl border-b border-border/40 shadow-sm"
        : "bg-background/30 backdrop-blur-lg"
        }`}
    >
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="group flex flex-col items-start leading-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="font-heading text-2xl tracking-[0.2em] text-foreground font-bold group-hover:tracking-[0.3em] transition-all duration-300">
              KIRAN
            </span>
            <span className="font-body text-[10px] tracking-[0.4em] text-muted-foreground uppercase border-t border-foreground/30 pt-0.5 mt-0.5">
              Video Editor
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="nav-link text-sm font-heading font-bold uppercase tracking-[0.2em] text-muted-foreground transition-all duration-300 hover:text-foreground hover:tracking-[0.28em] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:text-foreground active:text-foreground"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="nav-link text-sm font-heading font-bold uppercase tracking-[0.2em] text-muted-foreground transition-all duration-300 hover:text-foreground hover:tracking-[0.28em] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:text-foreground active:text-foreground"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="py-6 space-y-6 bg-background/95 backdrop-blur-sm">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-lg font-heading font-bold uppercase tracking-[0.2em] text-muted-foreground transition-all duration-300 hover:text-foreground hover:tracking-[0.28em] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:text-foreground active:text-foreground"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="block w-full text-left text-lg font-heading font-bold uppercase tracking-[0.2em] text-muted-foreground transition-all duration-300 hover:text-foreground hover:tracking-[0.28em] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:text-foreground active:text-foreground"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
