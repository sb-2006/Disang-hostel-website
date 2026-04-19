import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Building, Phone } from "lucide-react";
import heroImage from "@/assets/hostel-hero.jpg";
import warden from "@/assets/wardenimage/warden.jpeg.jpeg";
import assttwarden2 from "@/assets/wardenimage/teena.jpeg" ;
import assttwarden1 from "@/assets/wardenimage/samir.jpeg" ;
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import featured1 from "@/assets/gallery/manthan_featured.jpeg";
import featured2 from "@/assets/gallery/sports_featured.jpeg";
import featured3 from "@/assets/gallery/ganeshChaturthi_featured.jpeg";
import featured4 from "@/assets/gallery/hostelDay_featured.jpeg";

const Home = () => {
  const featuredPhotos = [
    { src: featured1, title: "Hostel Day" },
    { src: featured2, title: "Sports Activities" },
    { src: featured3, title: "Cultural Fest" },
  ];
  const About_text = `Disang Hostel, inaugurated on July 24, 2019, is the newest and largest girls' hostel in IIT Guwahati, accommodating around 900 boarders. Designed to offer both comfort and convenience, Disang offers a lively and modern experience to its boarders.

The hostel is equipped with state-of-the-art amenities, including a fully functional gymnasium, games room, television room, music room, and library, ensuring a well-rounded residential experience. In addition, the hostel's mess offers wholesome and nutritious meals, complemented by a canteen and juice center that provides refreshing beverages and snacks.

Disang fosters a vibrant and inclusive community, encouraging students to create a healthy balance between study, recreation, and social engagement. With its top-notch amenities, focus on well-being, and supportive atmosphere, Disang truly stands as a home away from home for its boarders.`;

  const staffMembers = [
    { 
      name: "Ms. Momita Patra", 
      role: "Warden", 
      description: "Random text about the warden", 
      image: warden 
    },
    { 
      name: "Dr. Samir Kumar Sarkar", 
      role: "Assistant Warden", 
      description: "Warden's message", 
      image: assttwarden1 
    },
    { 
      name: "Dr. Teena Sharma", 
      role: "Assistant Warden", 
      description: "Text for caretaker 2", 
      image: assttwarden2 
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Disang Hostel- IIT Guwahati
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            A home away from home, fostering community, growth, and excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Link to="/people">
              <Button size="lg" variant="secondary" className="group">
                Meet Our Team
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/facilities">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
              >
                Explore Facilities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      
            <section className="py-16 bg-card border-y border-border">
  <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
    {/* Left Side: Headings */}
    <div className="flex-1">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary mb-4">
        About
      </h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-muted-foreground">
        Disang
      </h2>
    </div>

    {/* Right Side: Themed Card */}
    <div className="flex-1 bg-muted border border-border rounded-xl p-6 shadow-md md:w-96">
      <p className="text-foreground text-base sm:text-lg">
        {About_text}
      </p>
    </div>
  </div>
</section>
<section className="py-12 bg-background border-t border-border">
  <div className="container mx-auto px-4 flex flex-col gap-8">
    {staffMembers.map((staff, index) => (
      <div
        key={index}
        className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 bg-card rounded-xl shadow-md border border-border p-6 md:p-8"
      >
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={staff.image}
            alt={staff.name}
            className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full border-4 border-muted shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-primary mb-1">{staff.name}</h3>
          <h4 className="text-xl md:text-2xl text-muted-foreground mb-3">{staff.role}</h4>
          <p className="text-foreground text-base md:text-lg">{staff.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Quick Links Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
            Quick Access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link to="/people" className="group">
              <div className="p-8 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <Users className="h-12 w-12 text-primary mb-4 transition-transform group-hover:scale-110" />
                <h3 className="font-heading font-semibold text-xl mb-2">People</h3>
                <p className="text-muted-foreground">
                  Meet our dedicated wardens, staff, and administration team
                </p>
              </div>
            </Link>

            <Link to="/facilities" className="group">
              <div className="p-8 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <Building className="h-12 w-12 text-primary mb-4 transition-transform group-hover:scale-110" />
                <h3 className="font-heading font-semibold text-xl mb-2">Facilities</h3>
                <p className="text-muted-foreground">
                  Explore our world-class amenities and infrastructure
                </p>
              </div>
            </Link>

            <Link to="/contact" className="group">
              <div className="p-8 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <Phone className="h-12 w-12 text-primary mb-4 transition-transform group-hover:scale-110" />
                <h3 className="font-heading font-semibold text-xl mb-2">Contact</h3>
                <p className="text-muted-foreground">
                  Get in touch with us for any queries or assistance
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
                Gallery Highlights
              </h2>
              <p className="text-muted-foreground text-lg">
                Explore the vibrant life and memorable moments at our hostel
              </p>
            </div>

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
              className="w-full mb-8"
            >
              <CarouselContent>
                {featuredPhotos.map((photo, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="relative h-[300px] rounded-xl overflow-hidden mx-2">
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-heading font-semibold text-lg">
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

            <div className="text-center">
              <Link to="/gallery">
                <Button size="lg" className="group">
                  View More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Google Map Section */}
<section className="py-16 bg-background border-t border-border">
  <div className="container mx-auto px-4">
    <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-8">
      Find Us on Map
    </h2>
    <div className="rounded-xl overflow-hidden shadow-lg border border-border">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.316535952298!2d91.6934001754679!3d26.186379477087588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5be93f8038f3%3A0x3622bac526d12208!2sDisang%20Hostel!5e0!3m2!1sen!2sin!4v1760261775091!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-[350px] border-0"
      ></iframe>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
