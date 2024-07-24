import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Card className="overflow-hidden">
              <img 
                src="/images/about-us.jpg" 
                alt="Diverse team collaborating in a modern office" 
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
            </Card>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">About Us</h2>
            <p className="text-lg mb-6 text-gray-600 leading-relaxed">
              We are passionate about creating interactive and engaging web experiences. Our team of experts combines
              creativity with cutting-edge technology to deliver stunning results that captivate and inspire.
            </p>
            <Button size="lg" className="group">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;