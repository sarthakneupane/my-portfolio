import React, { useState } from "react";
import { Button } from "./ui/Button";
import { Menu, X } from "lucide-react";

export default function Header({ activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact Me" },
  ];

  return (
    <>
      {/* Desktop Header - Only visible on desktop */}
      <nav className="hidden md:block w-full bg-neutral-900/95 backdrop-blur-sm fixed z-50 border-b border-gray-800">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 md:py-6">
          
          {/* Logo */}
          <div className="text-orange-500 text-xl font-bold">portfolio</div>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`hover:text-white transition ${
                  activeSection === item.id
                    ? "text-orange-500 font-semibold"
                    : "text-gray-400"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Hire Me Button */}
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg"
          >
            Hire Me
          </Button>
        </div>
      </nav>

      {/* Mobile Hamburger - Only visible on mobile */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-3 bg-neutral-900/90 backdrop-blur-sm rounded-lg border border-gray-800 text-gray-400 hover:text-orange-500 hover:border-orange-500 transition-all"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu - Only visible on mobile */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-neutral-900/95 backdrop-blur-sm border-l border-gray-800 shadow-2xl transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 pt-20">
          <div className="flex flex-col space-y-2">
            {/* Logo in mobile menu */}
            <div className="text-orange-500 text-xl font-bold mb-6 px-4">portfolio</div>
            
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left py-4 px-4 rounded-lg transition-all ${
                  activeSection === item.id
                    ? "bg-orange-500/10 text-orange-500 font-semibold border-l-4 border-orange-500"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Hire Me Button in mobile menu */}
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg mt-4"
            >
              Hire Me
            </Button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu - Only visible on mobile */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}