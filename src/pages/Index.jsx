import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import ParallaxSection from '../components/ParallaxSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AOS from 'aos';

const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
    });

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ParallaxSection />
      <div data-aos="fade-up">
        <AboutSection />
      </div>
      <div data-aos="fade-up">
        <FeaturesSection />
      </div>
      <div data-aos="fade-up">
        <TestimonialsSection />
      </div>
      <div data-aos="fade-up">
        <GallerySection />
      </div>
      <div data-aos="fade-up">
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;