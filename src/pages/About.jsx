// About.jsx
import { useEffect, useRef } from "react";

const InfoItem = ({ label, value, isLink = false }) => {
  return (
    <div className="flex items-start gap-3 text-sm">
      <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
      <div>
        <span className="text-white font-semibold">{label}</span>{" "}
        {isLink ? (
          <a
            href={value.startsWith("http") ? value : `mailto:${value}`}
            className="text-gray-400 hover:text-orange-500 transition-colors break-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            {value}
          </a>
        ) : (
          <span className="text-gray-400">{value}</span>
        )}
      </div>
    </div>
  );
};

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  const skills = [
    "React",
    "Laravel",
    "JavaScript",
    "Tailwind CSS",
    "PHP",
    "MySQL",
    "Node.js",
    "Git",
    "Figma",
    "DaVinci Resolve",
  ];

  // Duplicate the array once so we can create seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-gradient-to-b from-neutral-900 via-gray-900 to-neutral-900 text-gray-300">
      <div className="container mx-auto max-w-8xl">
        {/* Title */}
        <div ref={sectionRef} className="opacity-0 transform translate-y-8 transition-all duration-1000 ease-out text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative text-orange-500">
            About Me
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mt-2"></span>
          </h2>
        </div>

        {/* Main Content */}
        <div
          ref={contentRef}
          className="opacity-0 transform translate-y-8 transition-all duration-1000 ease-out delay-200"
        >
          {/* Profile Card – unchanged */}
          <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden mb-24">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 p-8 md:p-12 items-center">
              {/* Left: Profile Image */}
              <div className="md:col-span-1 flex justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-2xl shadow-xl border-4 border-orange-500/20">
                  <img
                    src="/sarthak2.jpg"
                    alt="Sarthak Neupane"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </div>

              {/* Right: Info */}
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Full Stack Developer
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    I’m <span className="text-orange-500 font-semibold">Sarthak Neupane</span>, a passionate full-stack developer with expertise in crafting scalable and visually appealing digital solutions. My skills range from modern web development to video editing and content creation, enabling me to blend technology and creativity seamlessly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <InfoItem label="Birthday:" value="1 June" />
                    <InfoItem label="Github:" value="https://github.com/sarthakneupane" isLink />
                    <InfoItem label="Phone:" value="+977 9811391785" />
                    <InfoItem label="City:" value="Biratnagar, Nepal" />
                  </div>
                  <div className="space-y-4">
                    <InfoItem label="Age:" value="21" />
                    <InfoItem label="Degree:" value="Bachelor's in Information Management" />
                    <InfoItem label="Email:" value="neupanesarthak3000@gmail.com" isLink />
                    <InfoItem label="Freelance:" value="Available" />
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed">
                  Currently building innovative web applications using modern frameworks like React, Laravel, and Tailwind CSS. Always eager to learn new technologies and take on exciting challenges.
                </p>
              </div>
            </div>
            {/* ──────────────────────────────────────────────── */}
          {/*               Infinite Skills Carousel            */}
          {/* ──────────────────────────────────────────────── */}
          <div className="mt-16">

            <div className="relative w-full overflow-hidden bg-neutral-950/40 py-6 border-y border-neutral-800/60">
              <div
                className="flex animate-marquee whitespace-nowrap will-change-transform"
                onMouseEnter={(e) => e.currentTarget.style.animationPlayState = "paused"}
                onMouseLeave={(e) => e.currentTarget.style.animationPlayState = "running"}
              >
                {duplicatedSkills.map((skill, idx) => (
                  <div
                    key={`${skill}-${idx}`}
                    className="inline-flex items-center justify-center px-8 py-4 mx-4 min-w-[180px] rounded-xl bg-neutral-900/70 border border-neutral-800 group hover:border-orange-600/60 transition-colors"
                  >
                    <span className="text-lg md:text-xl font-semibold text-gray-200 group-hover:text-orange-400 transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              {/* Optional: subtle gradient fade on edges */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent z-10" />
            </div>
          </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default About;