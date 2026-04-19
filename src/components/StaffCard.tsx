// WardenCard.tsx or StaffCard.tsx
import React from "react";

interface StaffCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
}

const StaffCard: React.FC<StaffCardProps> = ({ name, role, description, image }) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 bg-sky-100 rounded-xl shadow-md p-6 md:p-8">
      {/* Image */}
      <div className="flex-shrink-0">
        <img 
          src={image} 
          alt={name} 
          className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full border-4 border-blue-200 shadow-lg"
        />
      </div>

      {/* Text */}
      <div className="text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-1">{name}</h3>
        <h4 className="text-xl md:text-2xl text-gray-700 mb-3">{role}</h4>
        <p className="text-gray-800 text-base md:text-lg">{description}</p>
      </div>
    </div>
  );
};

export default StaffCard;
