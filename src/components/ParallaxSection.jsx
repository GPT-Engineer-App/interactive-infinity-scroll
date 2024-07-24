import React, { useState, useRef } from 'react';
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

  return (
    <section ref={sectionRef} className="relative h-[300vh] overflow-hidden">
      <div className="sticky top-0 h-screen flex">
        {[0.3, 0.5, 0.7].map((speed, index) => (
          <ParallaxColumn 
            key={index} 
            theme={themes[currentTheme]} 
            scrollYProgress={scrollYProgress} 
            speed={speed} 
          />
        ))}
      </div>
      <div className="sticky top-0 h-screen flex items-center justify-center pointer-events-none">
        <div className="text-center text-white bg-black bg-opacity-50 p-8 rounded-lg pointer-events-auto">
          <h2 className="text-4xl font-bold mb-4">Parallax Scrolling</h2>
          <p className="text-xl mb-8">Experience the magic of depth and motion</p>
          <Button onClick={changeTheme} variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-black transition-colors">
            Change Theme
          </Button>
        </div>
      </div>
      <DancerAnimation scrollYProgress={scrollYProgress} />
    </section>
  );
};

const ParallaxColumn = ({ theme, scrollYProgress, speed }) => {
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", `${50 * speed}%`]);
  const middleY = useTransform(scrollYProgress, [0, 1], ["0%", `${30 * speed}%`]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], ["0%", `${15 * speed}%`]);

  return (
    <div className="w-1/3 h-full relative overflow-hidden">
      {theme.layers.map((layer, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${layer})`,
            y: index === 0 ? backgroundY : index === 1 ? middleY : foregroundY,
          }}
        />
      ))}
    </div>
  );
};

const DancerAnimation = ({ scrollYProgress }) => {
  const dancerY = useTransform(scrollYProgress, [0, 1], ["0vh", "200vh"]);
  const dancerX = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], ["0vw", "25vw", "50vw", "75vw", "90vw"]);
  const dancerRotate = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const dancerScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1.5, 0.5]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{
        y: dancerY,
        x: dancerX,
        rotate: dancerRotate,
        scale: dancerScale,
      }}
    >
      <img src="/images/dancer-silhouette.png" alt="Dancer" className="w-32 h-32 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
    </motion.div>
  );
};

export default ParallaxSection;