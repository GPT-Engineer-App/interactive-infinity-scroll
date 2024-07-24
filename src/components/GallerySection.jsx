import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover rounded-lg cursor-pointer transition-all duration-300 hover:opacity-80 transform hover:scale-105"
                  onClick={() => setSelectedImage(image)}
                />
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <img src={selectedImage?.src} alt={selectedImage?.alt} className="w-full h-auto" />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;