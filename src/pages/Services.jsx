import { useEffect, useRef } from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="group relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      
      <div className="relative z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <span className="text-3xl">{icon}</span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef(null);

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

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const services = [
    {
      icon: "🌐",
      title: "Web Development",
      description: "Custom responsive websites and web applications built with React, Laravel, and modern technologies for optimal performance and user experience."
    },
    {
      icon: "📱",
      title: "Frontend Development",
      description: "Beautiful, interactive user interfaces using React, Next.js, Tailwind CSS, and animations that engage and delight users."
    },
    {
      icon: "🖥️",
      title: "Backend Development",
      description: "Robust server-side solutions with Laravel, PHP, Node.js, RESTful APIs, and secure database architecture using MySQL/PostgreSQL."
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Clean, intuitive designs crafted in Figma with focus on usability, accessibility, and modern design principles."
    },
    {
      icon: "✂️",
      title: "Video Editing",
      description: "Professional video editing and motion graphics using DaVinci Resolve and After Effects for YouTube, social media, and branding."
    },
    {
      icon: "⚙️",
      title: "Full Stack Solutions",
      description: "End-to-end development from planning and design to deployment and maintenance — one developer for your complete project needs."
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-neutral-950 text-gray-300">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <div
          ref={sectionRef}
          className="opacity-0 transform translate-y-8 transition-all duration-1000 ease-out text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services I Offer
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Delivering high-quality digital solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;