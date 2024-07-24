import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/images/hero-background.jpg" 
          alt="Modern cityscape at night with illuminated skyscrapers" 
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: 'scale(1.1)' }}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Our Interactive One-Pager
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Discover amazing features and stunning visuals as you scroll
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button 
            onClick={scrollToNextSection}
            size="lg" 
            className="bg-white text-black hover:bg-gray-200 transition-colors duration-300"
          >
            Explore More
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;