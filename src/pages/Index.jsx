import { useRef } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import ParallaxSection from '../components/ParallaxSection';

const Index = () => {
  const aboutRef = useRef(null);
  const featuresRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection onScrollClick={() => scrollToSection(aboutRef)} />
      <ParallaxSection theme="nature" />
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <ParallaxSection theme="cityscape" />
      <div ref={featuresRef}>
        <FeaturesSection />
      </div>
      <ParallaxSection theme="space" />
      <div ref={galleryRef}>
        <GallerySection />
      </div>
      <div ref={contactRef}>
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;