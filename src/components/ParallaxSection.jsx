import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from 'framer-motion';

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
  const [currentTheme, setCurrentTheme] = useState(0);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const changeTheme = () => {
    setCurrentTheme((prev) => (prev + 1) % themes.length);
  };

  useEffect(() => {
    // Force a re-render when the theme changes
    sectionRef.current.style.display = 'none';
    setTimeout(() => {
      sectionRef.current.style.display = 'block';
    }, 0);
  }, [currentTheme]);

  return (
    <section ref={sectionRef} className="relative h-[200vh] overflow-hidden">
      <div className="sticky top-0 h-screen flex">
        {[0.7, 0.8, 0.9].map((speed, index) => (
          <ParallaxColumn 
            key={index} 
            theme={themes[currentTheme]} 
            scrollYProgress={scrollYProgress} 
            speed={speed} 
            layerIndex={index}
          />
        ))}
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white bg-black bg-opacity-50 p-8 rounded-lg z-10">
        <h2 className="text-4xl font-bold mb-4">Parallax Scrolling</h2>
        <p className="text-xl mb-8">Experience the magic of depth and motion</p>
        <Button onClick={changeTheme} variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-black transition-colors">
          Change Theme
        </Button>
      </div>
    </section>
  );
};

const ParallaxColumn = ({ theme, scrollYProgress, speed, layerIndex }) => {
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${100 * speed}%`]);

  return (
    <div className="w-1/3 h-full relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${theme.layers[layerIndex]})`,
          y,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '120%', // Increase height to allow for zooming effect
          width: '120%', // Increase width to allow for zooming effect
          left: '-10%', // Offset to center the zoomed image
          top: '-10%', // Offset to center the zoomed image
        }}
      />
    </div>
  );
};

export default ParallaxSection;