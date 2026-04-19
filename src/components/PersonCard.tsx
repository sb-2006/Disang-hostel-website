import { Mail, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface PersonCardProps {
  name: string;
  role: string;
  department: string;
  email: string;
  phone?: string;
  image: string;
}

const PersonCard = ({ name, role, department, email, phone, image }: PersonCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
      <div className="aspect-square overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-heading font-bold text-xl text-foreground mb-1">
          {name}
        </h3>
        <p className="text-primary font-semibold mb-1">{role}</p>
        <p className="text-sm text-muted-foreground mb-4">{department}</p>
        
        <div className="space-y-2">
          <a 
            href={`mailto:${email}`}
            className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span className="truncate">{email}</span>
          </a>
          {phone && (
            <a 
              href={`tel:${phone}`}
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>{phone}</span>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonCard;
