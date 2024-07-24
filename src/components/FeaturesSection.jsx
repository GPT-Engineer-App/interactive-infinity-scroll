import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: <Lightbulb className="h-8 w-8 mb-4" />,
    title: "Innovative Design",
    description: "Cutting-edge designs that set you apart from the competition.",
  },
  {
    icon: <Zap className="h-8 w-8 mb-4" />,
    title: "Lightning Fast",
    description: "Optimized for speed to provide the best user experience.",
  },
  {
    icon: <Shield className="h-8 w-8 mb-4" />,
    title: "Secure & Reliable",
    description: "Built with security in mind to protect your data.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  {feature.icon}
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;