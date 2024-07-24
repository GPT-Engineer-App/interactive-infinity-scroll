import React, { useRef, useEffect } from 'react';

const ParallaxWrapper = ({ children, speed = 0.5, className = '' }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    let animationFrameId = null;

    const handleScroll = () => {
      if (!wrapper) return;

      const rect = wrapper.getBoundingClientRect();
      const scrollPosition = window.pageYOffset;
      const offset = scrollPosition * speed;

      animationFrameId = window.requestAnimationFrame(() => {
        wrapper.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [speed]);

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      {children}
    </div>
  );
};

export default ParallaxWrapper;