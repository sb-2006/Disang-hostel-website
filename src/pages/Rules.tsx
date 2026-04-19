import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { watch } from "fs";
import { BookOpen, Clock, Users, Shield, Ban, CheckCircle, Watch, Clock1, Clock10, Clock10Icon, DumbbellIcon, Dumbbell, ClipboardCheck, BookCheck } from "lucide-react";

const Rules = () => {
  const ruleCategories = [
    {
      icon: Clock,
      title: "Timings",
      rules: [
        "Hostel gates close at 11:00 PM on weekdays",
        "Entry after gate closure requires prior permission",
        "Mess timings: Breakfast 7:30-9:30 AM, Lunch 12:30-2:30 PM, Dinner 7:30-9:30 PM",
        "Quiet hours: 11:00 PM to 7:00 AM"
      ]
    },
    {
      icon: Users,
      title: "Visitors",
      rules: [
        "Visitors must register at the security desk",
        "No visitors allowed in rooms after 8:00 PM",
        "Parents and guardians may visit with prior notice",
        "All visitors must carry valid identification"
      ]
    },
    {
      icon: Shield,
      title: "Discipline",
      rules: [
        "Ragging is strictly prohibited and punishable",
        "Smoking and alcohol consumption not allowed",
        "Maintain cleanliness in rooms and common areas",
        "Respect fellow residents and staff members"
      ]
    },
    {
      icon: Ban,
      title: "Prohibited Items",
      rules: [
        "No electrical cooking appliances in rooms",
        "Weapons and sharp objects are not allowed",
        "Pets are not permitted in the hostel",
        "Inflammable materials are strictly banned"
      ]
    },
        {
      icon: DumbbellIcon,
      title: "Gym Rules",
      rules: [
        "Register at the security desk and carry your college ID.",
        "Wear proper sports attire and sports shoes.",
        "Return all weights and equipment to their designated place; damage must be paid for.",
        "No food, loud music, or shouting; keep the gym clean.",
        "Take care of your items; the gym is not responsible for any loss.",
      ]
    },
    {
      icon: BookOpen,
      title: "Library Rules",
      rules: [
      "Maintain silence; no loud conversations or disturbances.",
      "No eating or drinking, except water in sealed bottles.",
      "Do not sleep; personal belongings cannot reserve a seat for more than 30 minutes. Unattended items may be removed.",
      "Keep the room clean; do not litter, damage furniture, or write on property.",
      "Use phones, laptops, or tablets with earphones at low volume; phones must be on silent.",
      ]
    },
        {
      icon: ClipboardCheck,
      title: "Code of conduct",
      rules: [
"attached pdf",
      ]
    },
    
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <BookCheck className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-heading text-4xl font-bold mb-4 text-foreground">
              Hostel Rules & Regulations
            </h1>
            <p className="text-muted-foreground text-lg">
              Please read and follow these guidelines to ensure a safe and comfortable living environment for all residents
            </p>
          </div>

          <div className="grid gap-6 mb-8">
            {ruleCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.rules.map((rule, ruleIndex) => (
                      <li key={ruleIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">
                <strong className="text-foreground">Note:</strong> Violation of any rules may result in disciplinary action. 
                For any clarifications, please contact the hostel administration.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Rules;
