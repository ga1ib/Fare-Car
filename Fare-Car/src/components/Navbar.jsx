import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "explore", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "explore", label: "Explore" },
    { id: "about", label: "About" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-lg shadow-lg shadow-black/50 py-4 md:py-5"
          : "bg-gradient-to-b from-black/80 via-black/60 to-transparent backdrop-blur-md py-5 md:py-7"
      }`}
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 flex justify-between items-center">
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "home")}
          className="text-lg sm:text-xl lg:text-2xl font-bold tracking-wide hover:text-red-500 transition-colors z-50 drop-shadow-lg"
        >
          Fare-Car
        </a>

        {/* Desktop Navigation - Left Side */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10 text-sm lg:text-base font-medium">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`hover:text-red-500 transition-all duration-300 relative drop-shadow-md ${
                activeSection === link.id ? "text-red-500 font-semibold" : "text-white"
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></span>
              )}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full px-6 lg:px-8 py-2.5 lg:py-3 shadow-lg shadow-red-500/50 hover:shadow-red-500/70 hover:scale-105 transition-all duration-300 font-semibold"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed left-0 right-0 top-[60px] overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-gradient-to-b from-black via-gray-900 to-black backdrop-blur-xl px-4 sm:px-6 py-6 flex flex-col gap-4 shadow-2xl border-t border-gray-800">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`text-base sm:text-lg hover:text-red-500 transition-all duration-300 py-2 font-medium ${
                activeSection === link.id ? "text-red-500 font-semibold" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "contact")}
            className="bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full px-5 py-3 text-center shadow-lg shadow-red-500/50 hover:shadow-red-500/70 hover:scale-105 transition-all duration-300 mt-2 font-semibold"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
