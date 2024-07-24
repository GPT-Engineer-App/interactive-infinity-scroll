import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const themes = [
  {
    name: 'Nature',
    layers: [
      '/images/nature-bg.png',
      '/images/nature-mid.png',
      '/images/nature-fg.png',
    ],
  },
  {
    name: 'Cityscape',
    layers: [
      '/images/city-bg.png',
      '/images/city-mid.png',
      '/images/city-fg.png',
    ],
  },
  {
    name: 'Space',
    layers: [
      '/images/space-bg.png',
      '/images/space-mid.png',
      '/images/space-fg.png',
    ],
  },
];

const ParallaxSection = () => {
  const [currentTheme, setCurrentTheme] = React.useState(0);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const layers = parallaxRef.current.children;
      
      Array.from(layers).forEach((layer, index) => {
        const speed = (index + 1) * 0.5;
        const yPos = -(scrolled * speed);
        layer.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeTheme = () => {
    setCurrentTheme((prev) => (prev + 1) % themes.length);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <div ref={parallaxRef} className="parallax absolute inset-0">
        {themes[currentTheme].layers.map((layer, index) => (
          <div
            key={index}
            className={`layer absolute inset-0 bg-cover bg-center transition-opacity duration-500`}
            style={{
              backgroundImage: `url(${layer})`,
              zIndex: -index,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Parallax Scrolling</h2>
          <p className="text-xl mb-8">Scroll to see the effect</p>
          <Button onClick={changeTheme} variant="outline" size="lg">
            Change Theme
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;