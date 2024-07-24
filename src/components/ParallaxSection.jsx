import React, { useEffect, useRef } from 'react';

const ParallaxSection = ({ theme }) => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const parallaxElement = parallaxRef.current;
      if (parallaxElement) {
        const layers = parallaxElement.querySelectorAll('.layer');
        layers.forEach((layer, index) => {
          const speed = (index + 1) * 0.5;
          const yPos = -(scrollTop * speed);
          layer.style.transform = `translateY(${yPos}px)`;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={parallaxRef} className="parallax h-screen overflow-hidden relative">
      <div className="layer layer1 absolute w-full h-full bg-cover bg-center" style={{backgroundImage: `url('/images/${theme}-layer1.png')`}}></div>
      <div className="layer layer2 absolute w-full h-full bg-cover bg-center" style={{backgroundImage: `url('/images/${theme}-layer2.png')`}}></div>
      <div className="layer layer3 absolute w-full h-full bg-cover bg-center" style={{backgroundImage: `url('/images/${theme}-layer3.png')`}}></div>
    </div>
  );
};

export default ParallaxSection;