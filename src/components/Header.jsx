import React from "react";
import { Button } from "./ui/Button";

export default function Header({ activeSection }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="w-full bg-neutral-900 fixed z-50">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-6">

        {/* Logo */}
        <div className="text-orange-500 text-xl font-bold">portfolio</div>

        {/* Navigation links */}
        <div className="hidden md:flex items-center space-x-8">

          <button onClick={() => scrollToSection("home")} className={`hover:text-white transition ${
              activeSection === "home"
                ? "text-orange-500 font-semibold"
                : "text-gray-400"
            }`}
          >
            Home
          </button>

          <button onClick={() => scrollToSection("about")} className={`hover:text-white transition ${
              activeSection === "about"
                ? "text-orange-500 font-semibold"
                : "text-gray-400"
            }`}
          >
            About
          </button>

          <button onClick={() => scrollToSection("projects")} className={`hover:text-white transition ${
              activeSection === "projects"
                ? "text-orange-500 font-semibold"
                : "text-gray-400"
            }`}
          >
            Projects
          </button>

          <button onClick={() => scrollToSection("contact")} className={`hover:text-white transition ${
              activeSection === "contact"
                ? "text-orange-500 font-semibold"
                : "text-gray-400"
            }`}
          >
            Contact Me
          </button>

          {/* <button className="text-gray-400 hover:text-white" onClick={() => scrollToSection("services")}>Services</button> */}
          {/* <button className="text-gray-400 hover:text-white" onClick={() => scrollToSection("contact")}>Contact me</button> */}
        </div>

        {/* Hire Me Button */}
        <Button onClick={() => scrollToSection("contact")} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg">
          Hire Me
        </Button>
      </div>
    </nav>
  );
}
