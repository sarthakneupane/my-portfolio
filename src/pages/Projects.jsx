// ProjectsSection.jsx
import { useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

function ProjectCard({ project }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  // Choose which link to use when clicking the image (demo preferred if available)
  const mainLink = project.links.demo !== "https://example.com" 
    ? project.links.demo 
    : project.links.github;

  return (
    <article
      ref={cardRef}
      className="
        opacity-0 translate-y-6 transition-all duration-700 ease-out
        group bg-neutral-900/70 backdrop-blur-sm rounded-xl overflow-hidden
        border border-neutral-800/50 hover:border-neutral-700
        shadow-lg hover:shadow-xl transition-shadow
      "
    >
      {/* Clickable Image Preview */}
      <a
        href={mainLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative aspect-[4/3] overflow-hidden"
      >
        {project.preview.type === "image" ? (
          <img
            src={project.preview.src}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
          />
        ) : (
          <pre className="h-full p-5 text-xs text-gray-400 bg-black/80 overflow-auto font-mono">
            <code>{project.preview.code}</code>
          </pre>
        )}

        {/* Hover Overlay + Arrow */}
        <div className="
          absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent
          opacity-0 group-hover:opacity-100 transition-opacity duration-500
        " />

        <div className="
          absolute top-3 right-3 opacity-0 group-hover:opacity-100
          translate-x-2 group-hover:translate-x-0 translate-y-2 group-hover:translate-y-0
          transition-all duration-500
        ">
          <div className="p-2 bg-orange-500/90 rounded-lg shadow-lg">
            <ExternalLink size={18} className="text-white" />
          </div>
        </div>
      </a>

      {/* Content Below */}
      <div className="p-6 space-y-4">
        <header>
          <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs uppercase tracking-wider text-gray-500 mt-1">
            {project.category}
          </p>
        </header>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 text-xs text-gray-400">
          {project.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
          {project.description}
        </p>


      </div>
    </article>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Full-Stack Web App",
      description:
        "Complete e-commerce solution with authentication, payments, and real-time inventory management.",
      tags: ["Next.js", "PostgreSQL", "Stripe", "Tailwind"],
      preview: {
        type: "image",
        src: "/projects/ecommerce-preview.jpg",
      },
      links: {
        github: "https://github.com/yourusername/ecommerce",
        demo: "https://ecommerce-demo.vercel.app",
      },
    },
    {
      id: 2,
      title: "Real-time Chat App",
      category: "Messaging",
      description:
        "Real-time messaging app with rooms, typing indicators, notifications, and message history.",
      tags: ["React", "Node.js", "Socket.io"],
      preview: {
        type: "code",
        code: `socket.on('message', (msg) => {
  addMessage(msg)
})`,
      },
      links: {
        github: "https://github.com/yourusername/chat-app",
        demo: "https://chat-app-demo.com",
      },
    },
    {
      id: 3,
      title: "Task Management Dashboard",
      category: "Productivity",
      description:
        "Kanban-style dashboard with drag & drop, real-time sync, and analytics.",
      tags: ["React", "Firebase", "Zustand"],
      preview: {
        type: "image",
        src: "/projects/kanban-preview.jpg",
      },
      links: {
        github: "https://github.com/yourusername/kanban",
        demo: "https://kanban-app.vercel.app",
      },
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      category: "Data Visualization",
      description:
        "Interactive dashboard with dynamic charts, filters, and role-based access.",
      tags: ["Next.js", "Chart.js", "Prisma"],
      preview: {
        type: "image",
        src: "/projects/analytics-preview.jpg",
      },
      links: {
        github: "https://github.com/yourusername/analytics",
        demo: "https://analytics-demo.com",
      },
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-b from-neutral-900 via-gray-900 to-neutral-900 text-gray-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div ref={sectionRef} className="opacity-0 transform translate-y-8 transition-all duration-1000 ease-out text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative text-orange-500">
            Projects
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mt-2"></span>
          </h2>
        </div>

        {/* Middle Highlighted Text */}
        <div className="mb-16">
          <p className="text-center text-gray-300 text-lg md:text-xl italic">
            Every project I build tells a story - blending creativity, precision, and purpose to create experiences that truly resonate.
          </p>
        </div>


        {/* Grid – now feels more contained and balanced */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}