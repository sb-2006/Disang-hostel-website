import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import featured1 from "@/assets/gallery/img11.jpeg";
import featured2 from "@/assets/gallery/img27.jpeg";
import featured3 from "@/assets/gallery/culturalFest.jpeg";





const Gallery = () => {
  // Dynamically import all images from the gallery folder
const allPhotos = import.meta.glob("@/assets/gallery/*.{jpg,jpeg,png}", { eager: true });
const photoEntries = Object.entries(allPhotos).map(([path, module]) => ({
  src: (module as any).default,
  title: path.split("/").pop()?.replace(/\.(jpg|jpeg|png)/, "") || "Untitled",
}));
  const [expandedYear, setExpandedYear] = useState<string | null>(null);

  const featuredPhotos = photoEntries.filter((p) => p.title.includes("featured"));

  const yearWisePhotos = [
    {
    year: "2025",
    photos: photoEntries.filter((p) => p.title.includes("2025")),
  },
    {
      year: "2024",
      photos: photoEntries.filter((p) => p.title.includes("2024")),
    },
  ];

  const toggleYear = (year: string) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              Disang Hostel Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the vibrant life and memorable moments at Disang Hostel
            </p>
          </div>

          {/* Featured Photos Slideshow */}
          <section className="mb-16">
            <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground mb-6">
              Highlighted Moments
            </h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {featuredPhotos.map((photo, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="font-heading font-semibold text-2xl">
                          {photo.title}
                        </h3>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </section>

          {/* Expandable Year-wise Gallery */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading font-semibold text-2xl md:text-3xl text-foreground">
                Year-wise Gallery
              </h2>
            </div>

            <div className="space-y-4">
              {yearWisePhotos.map((yearData) => (
                <div
                  key={yearData.year}
                  className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300"
                >
                  {/* Year Header */}
                  <Button
                    variant="ghost"
                    onClick={() => toggleYear(yearData.year)}
                    className="w-full p-6 flex items-center justify-between hover:bg-accent"
                  >
                    <span className="font-heading font-semibold text-xl text-foreground">
                      {yearData.year}
                    </span>
                    {expandedYear === yearData.year ? (
                      <ChevronUp className="h-6 w-6 text-muted-foreground transition-transform" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-muted-foreground transition-transform" />
                    )}
                  </Button>

                  {/* Photos Grid */}
                  {expandedYear === yearData.year && (
                    <div className="p-6 pt-0 animate-in fade-in slide-in-from-top-4 duration-300">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {yearData.photos.map((photo, index) => (
                          <div
                            key={index}
                            className="group relative h-64 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                          >
                            <img
                              src={photo.src}
                              alt={photo.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <p className="font-heading font-medium">
                                {photo.title}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <div className="mt-16 text-center p-8 bg-card border border-border rounded-xl">
            <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">
              Want to contribute photos?
            </h3>
            <p className="text-muted-foreground mb-4">
              Share your favorite moments from Disang Hostel with us
            </p>
            <Button size="lg" className="group">
              Contact Us
              <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
