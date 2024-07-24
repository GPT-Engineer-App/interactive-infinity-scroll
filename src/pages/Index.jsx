import { useRef, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import ParallaxSection from '../components/ParallaxSection';
import TestimonialsSection from '../components/TestimonialsSection';

const Index = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;

          if (scrollPosition >= sectionTop - windowHeight / 2 && scrollPosition < sectionBottom - windowHeight / 2) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
          } else {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ParallaxSection />
      <div id="about" ref={(el) => (sectionsRef.current[0] = el)} className="transition-all duration-1000">
        <AboutSection />
      </div>
      <div id="features" ref={(el) => (sectionsRef.current[1] = el)} className="transition-all duration-1000">
        <FeaturesSection />
      </div>
      <div id="testimonials" ref={(el) => (sectionsRef.current[2] = el)} className="transition-all duration-1000">
        <TestimonialsSection />
      </div>
      <div id="gallery" ref={(el) => (sectionsRef.current[3] = el)} className="transition-all duration-1000">
        <GallerySection />
      </div>
      <div id="contact" ref={(el) => (sectionsRef.current[4] = el)} className="transition-all duration-1000">
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;