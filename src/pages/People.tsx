import { useState } from "react";
import Navbar from "@/components/Navbar";
import PersonCard from "@/components/PersonCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import wardenImage from "@/assets/wardenimage/warden.jpeg";
import wardenSamir from "@/assets/wardenimage/samir.jpeg";
import wardenteena from "@/assets/wardenimage/teena.jpeg";
import anjankumar from "@/assets/staff1image/anjan kumar.jpeg";
import dipti from "@/assets/staff1image/dipti.jpeg";
import hab from "@/assets/wardenimage/hab.jpeg";
import harshita from "@/assets/staff1image/harshita.jpeg";
import meduri from "@/assets/staff1image/meduri.jpeg";
import Romanbabu from "@/assets/staff1image/Romanbabu.jpeg";
import sharmila from "@/assets/staff1image/sharmila.jpeg";
import vishaka from "@/assets/admin1Image/vishaka.jpeg";
import deva from "@/assets/admin1Image/deva.jpeg";
import pramila from "@/assets/admin1Image/pramila.jpeg";
import priti from "@/assets/admin1Image/priti.jpeg";
import shubhra from "@/assets/admin1Image/shubhra.jpeg";
import vanshika from "@/assets/admin1Image/vanshika.jpeg";
import image from "@/assets/admin1Image/image.jpeg";
import ankita from "@/assets/admin1Image/ankita.jpeg"
import swetank from "@/assets/admin1Image/swetank.jpeg"
import snehal from "@/assets/admin1Image/snehal.jpeg"
import simran from "@/assets/admin1Image/simran.jpeg"
import sanchita from "@/assets/admin1Image/sanchita.jpeg"
import ruchitha from "@/assets/admin1Image/ruchitha.jpeg"
import poulomi from "@/assets/admin1Image/poulomi.jpeg"
import harsha from "@/assets/admin1Image/harsha.jpeg"
import shurbhi from "@/assets/admin1Image/shurbhi.jpeg"
import riya from "@/assets/admin1Image/riya.jpeg"
import somita from "@/assets/admin1Image/somita.jpeg"
import palak from "@/assets/admin1Image/palak.jpeg"
import yashvi from "@/assets/admin1Image/yashvi.jpeg"


const People = () => {
  // 🟩 Default active tab changed from "all" → "hmc"
  const [activeTab, setActiveTab] = useState("hmc");

  const people = [
    // 🟩 Added an HMC person
    {
      name: "Vishaka Chaudhary",
      role: "General Secretary",
      department: "Hostel Management Committee",
      email: "gs_disang.gw@iitg.ac.in",
      image: vishaka,
      category: "hmc",
    },
     {
      name: "Harsha",
      role: "Content and Media Head",
      department: "Hostel Management Committee",
      image: harsha,
      category: "hmc",
    },
     {
      name: "Vanshika Mittal",
      role: "Technical Secretary",
      department: "Hostel Management Committee",
      email: "m.vanshika@iitg.ac.in",
      image: vanshika,
      category: "hmc",
    },
     {
      name: "Palak Singhal",
      role: "Associate Technical Secretary",
      department: "Hostel Management Committee",
      email: "s.palak@iitg.ac.in",
      image: palak,
      category: "hmc",
    },
     {
      name: "Yashvi Mehta",
      role: "Associate Technical Secretary",
      department: "Hostel Management Committee",
      email: "m.vanshika@iitg.ac.in",
      image: yashvi,
      category: "hmc",
    },
     {
      name: "Devanandika.P",
      role: "Maintenance Secretary",
      department: "Hostel Management Committee",
      email: "ms.disangG@iitg.ac.in",
      image: deva,
      category: "hmc",
    },
     {
      name: "Somita Sharma",
      role: " Maintenance Management Committee",
      department: "Hostel Management Committee",
      image: somita,
      category: "hmc",
    },
      {
      name: "Ankita Suman",
      role: " Maintenance Management Committee",
      department: "Hostel Management Committee",
      image: ankita,
      category: "hmc",
    },
      {
      name: "  Riya Sharma",
      role: " Maintenance Management Committee",
      department: "Hostel Management Committee",
      image: riya,
      category: "hmc",
    },
    {
      name: "Dr. Kususm K Singh",
      role: " Warden",
      department: "Hostel Administration",
      email: "kusumsingh@iitg.ac.in",
      image: wardenImage,
      category: "warden",
    },
    {
      name: "Shubhra Kedia",
      role: "Welfare Secretary",
      department: "Hostel Management Committee",
      email: "k.shubhra@iitg.ac.in",
      image: shubhra,
      category: "hmc",
    },
     {
      name: "Ruchitha Rathod",
      role: "Welfare Management Committee",
      department: "Hostel Management Committee",
      image: ruchitha,
      category: "hmc",
    },
    {
      name: "Poulomi Chakraborty",
      role: "Welfare Management Committee",
      department: "Hostel Management Committee",
      image: poulomi,
      category: "hmc",
    },
    {
      name: "Sanchita Shrivas",
      role: "Welfare Management Committee",
      department: "Hostel Management Committee",
      image: sanchita,
      category: "hmc",
    },
    {
      name: "Snehal Wahane",
      role: "Welfare Management Committee",
      department: "Hostel Management Committee",
      image: snehal,
      category: "hmc",
    },
    {
      name: "Simran Sethia",
      role: "Welfare Management Committee",
      department: "Hostel Management Committee",
      image: simran,
      category: "hmc",
    },
     {
      name: "Priti Nag",
      role: "Literary Secretary",
      department: "Hostel Management Committee",
      email: "n.priti@iitg.ac.in",
      image: priti,
      category: "hmc",
    },
     {
      name: "Pramila Meena",
      role: "Sports Secretary",
      department: "Hostel Management Committee",
      email: "m.pramila@iitg.ac.in",
      image: pramila,
      category: "hmc",
    },
     {
      name: "Aashi Sharma",
      role: "Associate Sports Secretary",
      department: "Hostel Management Committee",
      image: pramila,
      category: "hmc",
    },
     {
      name: "Varshika Mutha",
      role: "Services Secretary",
      department: "Hostel Management Committee",
      email: "m.varshika@iitg.ac.in",
      image: varshika,
      category: "hmc",
    },
     {
      name: "Swetank Shree",
      role: "Services Management Committee",
      department: "Hostel Management Committee",
      image: swetank,
      category: "hmc",
    },
    {
      name: "Shurbhi",
      role: "Services Management Committee",
      department: "Hostel Management Committee",
      image: shurbhi,
      category: "hmc",
    },
    
      {
      name: "Dr.Samir Kumar Sarkar",
      role: "Associate Warden",
      department: "Hostel Administration",
      email: "sksarkar@iitg.ac.in",
      image: wardenSamir,
      category: "warden",
    },
      {
      name: "Dr. Teena Sharma",
      role: "Associate Warden",
      department: "Hostel Administration",
      email: "teenasharma@iitg.ac.in",
      image:wardenteena,
      category: "warden",
    },
    {
      name: "Harshita Medhi",
      role: "Caretaker",
      department: "Hostel Office",
      email: "harshitamedhi98@iitg.ac.in",
      image: harshita,
      category: "administrative-staff", // 🟩 category renamed
    },
    {
      name: "Dipti Devi",
      role: "Caretaker",
      department: "Facilities Management",
      email: "diptid@iitg.ac.in",
      image: dipti,
      category: "administrative-staff",
    },
    {
      name: "Dr.Anjan Kumar S.",
      role: "Chairperson",
      department: "Hostel Board",
      email: "chr_hab@iitg.ac.in",
      phone: "+91-361 258 2164",
      image: staff1Image,
      category: "hab", // 🟩 new category
    },
   {
      name: "Dr.Romanbabu Oinam",
      role: "Vice Chairperson",
      department: "Hostel Board",
      email: "vchr_hab1@iitg.ac.in",
      phone: "+91-361 258 2164",
      image: Romanbabu,
      category: "hab", // 🟩 new category
    },
     {
      name: "Dr.Meduri Chakravartula ",
      role: "Vice Chairperson",
      department: "Hostel Board",
      email: "vchr_hab2@iitg.ac.in",
      phone: "+91-361 258 2164",
      image: meduri,
      category: "hab", // 🟩 new category
    },
      {
      name: "Dr.R.B. Sharmila",
      role: "Vice Chairperson(Girls')",
      department: "Hostel Board",
      email: "vchr_hab3@iitg.ac.in",
      phone: "+91-361 258 2164",
      image: sharmila,
      category: "hab", // 🟩 new category
    },
  ];

  // 🟩 New helper function for filtering people by tab category
  const getPeopleByCategory = (category) =>
    people.filter((person) => person.category === category);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-4">
              Our People
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated team that makes our hostel a home away from home
            </p>
          </div>

          {/* 🟩 Tabs updated: now 4 tabs with spacing */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 gap-2">
              <TabsTrigger value="hmc">HMC</TabsTrigger>
              <TabsTrigger value="warden">Warden</TabsTrigger>
              <TabsTrigger value="administrative-staff">Administrative Staff</TabsTrigger>
              <TabsTrigger value="hab">HAB</TabsTrigger>
            </TabsList>

            {/* 🟩 Separate <TabsContent> blocks for each tab */}
            <TabsContent value="hmc" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getPeopleByCategory("hmc").map((person, index) => (
                  <PersonCard key={index} {...person} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="warden" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getPeopleByCategory("warden").map((person, index) => (
                  <PersonCard key={index} {...person} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="administrative-staff" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getPeopleByCategory("administrative-staff").map((person, index) => (
                  <PersonCard key={index} {...person} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="hab" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getPeopleByCategory("hab").map((person, index) => (
                  <PersonCard key={index} {...person} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* 🟩 Optional: shows message if category is empty */}
          {getPeopleByCategory(activeTab).length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No people found in this category
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default People;
