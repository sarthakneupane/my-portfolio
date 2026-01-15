import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      const scrollPercent = (scrollPosition / (documentHeight - windowHeight)) * 100;
      setWidth(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 h-1 z-50 bg-gradient-to-r from-gray-500 to-gray-700 transition-all duration-100"
      style={{ width: `${width}%` }}
    ></div>
  );
};

export default ScrollProgress;