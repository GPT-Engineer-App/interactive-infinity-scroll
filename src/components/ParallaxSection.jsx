import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

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

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden">
      {themes[currentTheme].layers.map((layer, index) => {
        const yPos = useTransform(scrollYProgress, [0, 1], [0, index * 100]);
        return (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${layer})`,
              y: yPos,
              zIndex: -index,
            }}
          />
        );
      })}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white bg-black bg-opacity-50 p-8 rounded-lg">
          <h2 className="text-4xl font-bold mb-4">Parallax Scrolling</h2>
          <p className="text-xl mb-8">Experience the magic of depth and motion</p>
          <Button onClick={changeTheme} variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-black transition-colors">
            Change Theme
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;