import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Zap, Shield, Rocket } from "lucide-react";

const features = [
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Innovative Design",
    description: "Cutting-edge designs that set you apart from the competition.",
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Lightning Fast",
    description: "Optimized for speed to provide the best user experience.",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Secure & Reliable",
    description: "Built with security in mind to protect your data.",
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: "Scalable Solutions",
    description: "Grow your business with solutions that scale with you.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="flex flex-col items-center gap-4">
                  {feature.icon}
                  <span className="text-xl font-semibold">{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;