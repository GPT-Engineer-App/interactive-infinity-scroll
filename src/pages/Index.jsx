import { useRef } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';
import ParallaxSection from '../components/ParallaxSection';
import ParallaxWrapper from '../components/ParallaxWrapper';

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
      <ParallaxWrapper speed={0.5}>
        <HeroSection onScrollClick={() => scrollToSection(aboutRef)} />
      </ParallaxWrapper>
      <ParallaxWrapper speed={0.7}>
        <ParallaxSection />
      </ParallaxWrapper>
      <ParallaxWrapper speed={0.3} ref={aboutRef}>
        <AboutSection />
      </ParallaxWrapper>
      <ParallaxWrapper speed={0.6} ref={featuresRef}>
        <FeaturesSection />
      </ParallaxWrapper>
      <ParallaxWrapper speed={0.4} ref={galleryRef}>
        <GallerySection />
      </ParallaxWrapper>
      <ParallaxWrapper speed={0.2} ref={contactRef}>
        <ContactSection />
      </ParallaxWrapper>
    </div>
  );
};

export default Index;