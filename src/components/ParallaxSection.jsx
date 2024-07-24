import React, { useState, useEffect, useRef } from 'react';
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

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const middleY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const changeTheme = () => {
    setCurrentTheme((prev) => (prev + 1) % themes.length);
  };

  return (
    <section ref={sectionRef} className="relative h-[200vh] overflow-hidden">
      {themes[currentTheme].layers.map((layer, index) => (
        <motion.div
          key={index}
          className="parallax-layer absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${layer})`,
            y: index === 0 ? backgroundY : index === 1 ? middleY : foregroundY,
            zIndex: -index,
          }}
        />
      ))}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="text-center text-white bg-black bg-opacity-50 p-8 rounded-lg">
          <h2 className="text-4xl font-bold mb-4">Parallax Scrolling</h2>
          <p className="text-xl mb-8">Experience the magic of depth and motion</p>
          <Button onClick={changeTheme} variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-black transition-colors">
            Change Theme
          </Button>
        </div>
      </div>
      <DancerAnimation />
    </section>
  );
};

const DancerAnimation = () => {
  const dancerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: dancerRef,
    offset: ["start end", "end start"]
  });

  const dancerY = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);
  const dancerRotate = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const dancerScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.5, 0.5]);

  return (
    <motion.div
      ref={dancerRef}
      className="fixed bottom-0 left-1/2 transform -translate-x-1/2"
      style={{
        y: dancerY,
        rotate: dancerRotate,
        scale: dancerScale,
      }}
    >
      <img src="/images/dancer-silhouette.png" alt="Dancer" className="w-32 h-32" />
    </motion.div>
  );
};

export default ParallaxSection;