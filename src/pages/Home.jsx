import React from "react";
import { Button } from "../components/ui/Button";
import ScrollDownIndicator from "../components/ui/ScrollDownIndicator";
import { Instagram, Linkedin, Youtube } from "lucide-react";

export default function Home() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen w-full bg-gradient-to-b from-neutral-900 via-gray-900 to-neutral-900 flex items-center overflow-x-hidden">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 py-12 lg:py-0">

        {/* Left Content */}
        <div className="flex-1 max-w-xl relative z-10 order-2 lg:order-1 mt-12 lg:mt-0 lg:pr-8 xl:pr-12">
          <div className="mb-6 lg:mb-8">
            <p className="text-gray-400 text-sm sm:text-base mb-1 sm:mb-2">Hi I am</p>
            <p className="text-gray-300 text-base sm:text-lg mb-2 sm:mb-3">Sarthak Neupane</p>
            <h1 className="text-orange-500 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight relative z-10">
              Full Stack Developer
              <div className="absolute -left-2 -top-1 -z-10 w-32 sm:w-48 lg:w-56 h-12 sm:h-20 lg:h-24 bg-orange-500 rounded-full opacity-20 blur-xl sm:blur-2xl"></div>
            </h1>
          </div>

          {/* Social Icons */}
          <div className="relative z-20 flex items-center space-x-3 mb-6 lg:mb-8">
            {[
              { Icon: Instagram, link: "https://instagram.com/sar.nep" },
              { Icon: Linkedin, link: "https://linkedin.com/in/sarthakneupane19" },
              { Icon: Youtube, link: "https://youtube.com/@sarnep" },
            ].map(({ Icon, link }, index) => (
              <button
                key={index}
                onClick={() => window.open(link, "_blank")}
                className="w-7 h-7 sm:w-8 sm:h-8 border border-gray-600 rounded-lg
                          flex items-center justify-center hover:border-orange-500
                          hover:bg-orange-500/10 transition-colors"
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 hover:text-orange-500 transition-colors" />
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="relative mb-8 lg:mb-12">
            <div className="absolute -left-2 -top-1 -z-10 w-32 sm:w-48 lg:w-56 h-10 sm:h-12 lg:h-14 bg-orange-500 rounded-full opacity-20 blur-xl sm:blur-2xl"></div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <Button 
                onClick={() => scrollToSection("contact")} 
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-lg w-full sm:w-auto text-sm"
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
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-lg bg-transparent transition-colors w-full sm:w-auto text-sm"
                >
                  Download CV
                </Button>
              </a>
            </div>
          </div>

          {/* Statistics */}
          <div className="relative mb-12 lg:mb-0">
            <div className="absolute inset-0 bg-gray-800 bg-opacity-30 rounded-xl -z-10 blur-md"></div>
            <div className="bg-gray-800 bg-opacity-20 backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-gray-700">
              <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-6 lg:gap-8 space-y-4 sm:space-y-0">
                {[
                  { value: "1yr +", label: "Experience" },
                  { value: "5+", label: "Projects Done" },
                  { value: "5+", label: "Happy Clients" },
                ].map((stat, index) => (
                  <React.Fragment key={index}>
                    <div className="text-center sm:text-left">
                      <div className="text-orange-500 text-xl sm:text-2xl lg:text-2xl font-bold">{stat.value}</div>
                      <div className="text-gray-400 text-xs">{stat.label}</div>
                    </div>
                    {index < 2 && (
                      <>
                        {/* Vertical divider for desktop */}
                        <div className="hidden sm:block w-px h-6 lg:h-8 bg-gray-700"></div>
                        {/* Horizontal divider for mobile */}
                        <div className="block sm:hidden w-8 h-px bg-gray-700 mx-auto"></div>
                      </>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex-1 flex justify-center lg:justify-end items-center relative order-1 lg:order-2 lg:pl-8 xl:pl-12">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            {/* Orange glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/10 blur-lg -z-10 transform scale-110"></div>
            
            {/* Border ring */}
            <div className="absolute inset-0 rounded-full border-2 border-gray-500/30 z-20 transform scale-105"></div>

            {/* Main circular image */}
            <div className="relative z-10 w-full aspect-square rounded-full overflow-hidden border border-gray-700/50 shadow-xl">
              <img
                src="/sarthak.jpg"
                alt="Sarthak Neupane"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator at bottom */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ScrollDownIndicator targetId="about" />
      </div>
      
      <div className="sm:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <ScrollDownIndicator targetId="about" size="small" />
      </div>
    </section>
  );
}