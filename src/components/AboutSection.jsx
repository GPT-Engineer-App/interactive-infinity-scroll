import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 transform transition-transform duration-500 hover:scale-105">
            <img src="/placeholder.svg" alt="About us" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg mb-6">
              We are passionate about creating interactive and engaging web experiences. Our team of experts combines
              creativity with cutting-edge technology to deliver stunning results.
            </p>
            <Button size="lg">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;