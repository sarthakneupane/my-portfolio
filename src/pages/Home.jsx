import React from "react";
import { Button } from "../components/ui/Button";
import ScrollDownIndicator from "../components/ui/ScrollDownIndicator";
import { Instagram, Linkedin, Dribbble } from "lucide-react";

export default function Home() {
  return (
    <section id="home" className="min-h-screen w-full bg-gradient-to-b from-neutral-900 via-gray-900 to-neutral-900 flex items-center">
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Left Content */}
        <div className="flex-1 max-w-2xl relative z-10">
          <div className="mb-8">
            <p className="text-gray-400 text-lg mb-2">Hi I am</p>
            <p className="text-gray-300 text-xl mb-4">Sarthak Neupane</p>
            <h1 className="text-orange-500 text-6xl font-bold leading-tight relative z-10">
              Full Stack Developer
              <div className="absolute -left-4 -top-2 -z-10 w-64 h-32 bg-orange-500 rounded-full opacity-20 blur-3xl"></div>
            </h1>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 mb-8">
            {[Instagram, Linkedin, Dribbble].map((Icon, index) => (
              <div
                key={index}
                className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center hover:border-orange-500 cursor-pointer transition-colors"
              >
                <Icon className="w-5 h-5 text-gray-400" />
              </div>
            ))}
            <div className="w-10 h-10 border border-gray-600 rounded-lg flex items-center justify-center hover:border-orange-500 cursor-pointer transition-colors">
              <span className="text-gray-400 font-bold text-sm">Be</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="relative mb-12">
            <div className="absolute -left-4 -top-2 -z-10 w-64 h-16 bg-orange-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="flex items-center space-x-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition-colors">
                Hire Me
              </Button>
              <a
                href="/cv/Sarthak-Neupane-CV.pdf"
                download
              >
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-lg bg-transparent transition-colors"
                >
                  Download CV
                </Button>
              </a>

            </div>
          </div>

          {/* Statistics */}
          <div className="relative">
            <div className="absolute inset-0 bg-gray-800 bg-opacity-30 rounded-xl -z-10 blur-md"></div>
            <div className="bg-gray-800 bg-opacity-20 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
              <div className="flex items-center space-x-12">
                {[
                  { value: "1+", label: "Experiences" },
                  { value: "5+", label: "Projects Done" },
                  { value: "5+", label: "Happy Clients" },
                ].map((stat, index) => (
                  <React.Fragment key={index}>
                    <div>
                      <div className="text-orange-500 text-3xl font-bold">{stat.value}</div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                    {index < 2 && <div className="w-px h-12 bg-gray-700"></div>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex-1 flex justify-center items-center relative">
          <div className="relative">
            {/* Orange ring */}
            <div className="absolute inset-0 rounded-full border-4 border-gray-500 opacity-20 z-20 transform scale-105"></div>

            {/* Main circular image */}
            <img
              src="/sarthak.jpg"
              alt="Sarthak Neupane"
              className="w-80 h-80 md:w-[32rem] md:h-[32rem] object-cover rounded-full shadow-2xl relative z-10 border-2 border-gray-700"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator at bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ScrollDownIndicator targetId="about" />
      </div>

    </section>
  );
}
