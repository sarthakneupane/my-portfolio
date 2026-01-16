import React from "react";
import { Button } from "../components/ui/Button";
import ScrollDownIndicator from "../components/ui/ScrollDownIndicator";
import { Instagram, Linkedin, Dribbble } from "lucide-react";

export default function Home() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen w-full bg-gradient-to-b from-neutral-900 via-gray-900 to-neutral-900 flex items-center">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 py-12 lg:py-0">

        {/* Left Content */}
        <div className="flex-1 max-w-2xl relative z-10 order-2 lg:order-1 mt-12 lg:mt-0">
          <div className="mb-6 lg:mb-8">
            <p className="text-gray-400 text-base sm:text-lg mb-1 sm:mb-2">Hi I am</p>
            <p className="text-gray-300 text-lg sm:text-xl mb-3 sm:mb-4">Sarthak Neupane</p>
            <h1 className="text-orange-500 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight relative z-10">
              Full Stack Developer
              <div className="absolute -left-2 -top-1 -z-10 w-48 sm:w-64 h-20 sm:h-32 bg-orange-500 rounded-full opacity-20 blur-2xl sm:blur-3xl"></div>
            </h1>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3 sm:space-x-4 mb-6 lg:mb-8">
            {[Instagram, Linkedin, Dribbble].map((Icon, index) => (
              <div
                key={index}
                className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-600 rounded-lg flex items-center justify-center hover:border-orange-500 cursor-pointer transition-colors"
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              </div>
            ))}
            <div className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-600 rounded-lg flex items-center justify-center hover:border-orange-500 cursor-pointer transition-colors">
              <span className="text-gray-400 font-bold text-xs sm:text-sm">Be</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="relative mb-8 lg:mb-12">
            <div className="absolute -left-2 -top-1 -z-10 w-48 sm:w-64 h-12 sm:h-16 bg-orange-500 rounded-full opacity-20 blur-2xl sm:blur-3xl"></div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={() => scrollToSection("contact")} 
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 sm:px-6 sm:py-2 rounded-lg w-full sm:w-auto text-sm sm:text-base"
              >
                Hire Me
              </Button>
              <a
                href="/cv/Sarthak-Neupane-CV.pdf"
                download
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 py-3 sm:px-8 sm:py-3 rounded-lg bg-transparent transition-colors w-full sm:w-auto text-sm sm:text-base"
                >
                  Download CV
                </Button>
              </a>
            </div>
          </div>

          {/* Statistics */}
          <div className="relative mb-12 lg:mb-0">
            <div className="absolute inset-0 bg-gray-800 bg-opacity-30 rounded-xl -z-10 blur-md"></div>
            <div className="bg-gray-800 bg-opacity-20 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-gray-700">
              <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-8 lg:space-x-12 space-y-6 sm:space-y-0">
                {[
                  { value: "1+", label: "Experiences" },
                  { value: "5+", label: "Projects Done" },
                  { value: "5+", label: "Happy Clients" },
                ].map((stat, index) => (
                  <React.Fragment key={index}>
                    <div className="text-center sm:text-left">
                      <div className="text-orange-500 text-2xl sm:text-3xl font-bold">{stat.value}</div>
                      <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
                    </div>
                    {index < 2 && (
                      <>
                        {/* Vertical divider for mobile */}
                        <div className="hidden sm:block w-px h-12 bg-gray-700"></div>
                        {/* Horizontal divider for mobile between items */}
                        <div className="block sm:hidden w-12 h-px bg-gray-700 mx-auto"></div>
                      </>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex-1 flex justify-center items-center relative order-1 lg:order-2">
          <div className="relative mb-8 lg:mb-0">
            {/* Orange ring - hide on very small screens */}
            <div className="absolute inset-0 rounded-full border-2 sm:border-4 border-gray-500 opacity-20 z-20 transform scale-105"></div>

            {/* Main circular image */}
            <img
              src="/sarthak.jpg"
              alt="Sarthak Neupane"
              className="w-64 h-64 xs:w-72 xs:h-72 sm:w-80 sm:h-80 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] object-cover rounded-full shadow-2xl relative z-10 border-2 border-gray-700"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator at bottom - hide on mobile if content is long */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ScrollDownIndicator targetId="about" />
      </div>
      
      {/* Alternative scroll indicator for mobile */}
      <div className="sm:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <ScrollDownIndicator targetId="about" size="small" />
      </div>
    </section>
  );
}