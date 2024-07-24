import { Button } from "@/components/ui/button";

const HeroSection = ({ onScrollClick }) => {
  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <img src="/placeholder.svg" alt="Hero background" className="absolute inset-0 w-full h-full object-cover" style={{ transform: 'scale(1.1)' }} />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Interactive One-Pager</h1>
        <p className="text-xl mb-8">Discover amazing features and stunning visuals as you scroll</p>
        <Button onClick={onScrollClick} size="lg">
          Explore More
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;