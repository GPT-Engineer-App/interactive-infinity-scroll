import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";

const images = [
  { src: "/placeholder.svg", alt: "Gallery Image 1" },
  { src: "/placeholder.svg", alt: "Gallery Image 2" },
  { src: "/placeholder.svg", alt: "Gallery Image 3" },
  { src: "/placeholder.svg", alt: "Gallery Image 4" },
  { src: "/placeholder.svg", alt: "Gallery Image 5" },
  { src: "/placeholder.svg", alt: "Gallery Image 6" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-16 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2">
              <CardContent className="p-0">
                <Dialog>
                  <DialogTrigger>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover cursor-pointer transition-all duration-300 hover:opacity-80"
                      onClick={() => setSelectedImage(image)}
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <img src={selectedImage?.src} alt={selectedImage?.alt} className="w-full h-auto" />
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;