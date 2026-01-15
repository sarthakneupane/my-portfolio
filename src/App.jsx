import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';
import ProjectsSection from './pages/Projects';
import Travels from './pages/Travels';
import Blogs from './pages/Blogs';
import About from './pages/About';
import { ContactSection } from './pages/Contact';

// import { Contact } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'travels', 'blogs', 'about'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-br from-gray-100 to-gray-200">
      {/* <ScrollProgress /> */}
      <Header activeSection={activeSection} />
      
      <main>
        <Home />
        <About />
        {/* <Services /> */}
        <ProjectsSection />
        {/* <Travels />
        <Blogs /> */}
        <ContactSection />
        
      </main>
      
      <Footer />
    </div>
  );
}

export default App;