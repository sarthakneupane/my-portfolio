import { useEffect, useRef } from 'react';

const Blogs = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const blogs = [
    {
      icon: '💻',
      title: 'Tech Insights',
      description: 'Deep dives into the latest technologies, frameworks, and development practices that are shaping the future of web development.'
    },
    {
      icon: '🌍',
      title: 'Travel Stories',
      description: 'Personal experiences and stories from my travels around the world, including tips and recommendations for fellow travelers.'
    },
    {
      icon: '📚',
      title: 'Learning Journey',
      description: 'Reflections on continuous learning, skill development, and the importance of staying curious in a rapidly evolving world.'
    }
  ];

  return (
    <section id="blogs" className="min-h-screen py-20 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="container mx-auto px-5">
        <div ref={sectionRef} className="opacity-0 transform translate-y-8 transition-all duration-700">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
            Blogs
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-gray-500 to-gray-700 mt-2"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white/90 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 transform translate-y-8 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-full h-48 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center text-5xl mb-4">
                {blog.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{blog.title}</h3>
              <p className="text-gray-600">{blog.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;