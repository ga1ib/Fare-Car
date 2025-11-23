import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    }
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-black to-black border-t border-gray-800/50 text-white py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 relative overflow-hidden">
      {/* Background Gradient Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-[1920px] mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 xl:gap-12 mb-10 sm:mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 bg-clip-text text-transparent">
              Fare-Car
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Premium transportation services designed for your comfort and convenience.
              Experience luxury on every journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  onClick={(e) => scrollToSection(e, "home")}
                  className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#explore"
                  onClick={(e) => scrollToSection(e, "explore")}
                  className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                >
                  Explore
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, "about")}
                  className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "contact")}
                  className="text-gray-400 hover:text-red-500 transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Airport Transfers</li>
              <li>Corporate Travel</li>
              <li>City Tours</li>
              <li>Special Events</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
                aria-label="Facebook"
              >
                <span>f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
                aria-label="Twitter"
              >
                <span>𝕏</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
                aria-label="Instagram"
              >
                <span>📷</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors"
                aria-label="LinkedIn"
              >
                <span>in</span>
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Follow us for updates and exclusive offers
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Fare-Car. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-red-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

