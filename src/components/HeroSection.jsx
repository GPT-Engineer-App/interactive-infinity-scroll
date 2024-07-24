import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = ({ onScrollClick }) => {
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
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">Welcome to Our Interactive One-Pager</h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300">Discover amazing features and stunning visuals as you scroll</p>
        <Button 
          onClick={onScrollClick} 
          size="lg" 
          className="animate-bounce bg-white text-black hover:bg-gray-200 transition-colors duration-300"
        >
          Explore More
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;