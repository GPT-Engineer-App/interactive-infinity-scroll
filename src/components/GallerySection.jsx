import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const images = [
  { src: "/images/gallery-1.jpg", alt: "Modern smartphone with colorful user interface" },
  { src: "/images/gallery-2.jpg", alt: "Smartwatch displaying fitness tracking app" },
  { src: "/images/gallery-3.jpg", alt: "Laptop showing video conference in home office" },
  { src: "/images/gallery-4.jpg", alt: "Person wearing virtual reality headset" },
  { src: "/images/gallery-5.jpg", alt: "Smart home device in modern living room" },
  { src: "/images/gallery-6.jpg", alt: "Electric car charging at futuristic station" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      onClick={() => setSelectedImage(image)}
                    />
                  </AspectRatio>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <AspectRatio ratio={16 / 9}>
                  <img src={selectedImage?.src} alt={selectedImage?.alt} className="w-full h-full object-contain" />
                </AspectRatio>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;