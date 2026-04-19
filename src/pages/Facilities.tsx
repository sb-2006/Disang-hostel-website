import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Utensils, Dumbbell, BookOpen, Tv, Droplets, Coffee } from "lucide-react";

const Facilities = () => {
  const facilities = [
    {
      icon: Utensils,
      title: "Mess",
      description: "Nutritious and varied meals served daily in a clean, spacious hall.",
    },
    {
      icon: Coffee,
      title: "Canteen & Juice Centre",
      description: "Our dual canteen serves quick snacks, fresh juices, and beverages.",
    },
    {
      icon: Dumbbell,
      title: "Gymnasium",
      description: "Fitness center equipped for strength and cardio training.",
    },
    {
      icon: BookOpen,
      title: "Library",
      description: "Quiet and well-stocked library with study areas for students.",
    },
    {
      icon: Tv,
      title: "Recreation Rooms",
      description: "TV,games, and music spaces for relaxation and social activities.",
    },
    {
      icon: Droplets,
      title: "Amenities",
      description: "Water coolers,washing machines and sports equipments are available.",
    },
  ];

    return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              Hostel Facilities
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Well-designed spaces and services for a comfortable and enriching hostel life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border"
              >
                <CardHeader>
                  {/* Darker box for icon + title */}
                  <div className="flex items-center gap-3 border-2 border-primary/40 rounded-lg p-3 bg-primary/10">
                    <facility.icon className="h-7 w-7 text-primary" />
                    <h2 className="font-heading text-xl text-foreground">{facility.title}</h2>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mt-2">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Facilities;
