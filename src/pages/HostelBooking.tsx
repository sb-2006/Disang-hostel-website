import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle, Clock, Building } from "lucide-react";
import qrCode from "../assets/qr_code.jpeg";

const HostelBooking = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Building className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-heading text-4xl font-bold mb-4 text-foreground">
              Hostel Booking
            </h1>
            <p className="text-muted-foreground text-lg">
              Reserve your accommodation in our hostel facility
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border border-border shadow-sm">
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg text-foreground">
                  Single Occupancy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Some text
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border border-border shadow-sm">
              <CardHeader>
                <Calendar className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg text-foreground">
                  Attached Bathroom
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Some text
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border border-border shadow-sm">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg text-foreground">
                  Furnished with Bed, Table, and Wardrobe
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Some text
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Instructions */}
          <div className="mt-16">
            <h2 className="font-heading text-2xl font-semibold text-primary mb-6 text-center md:text-left">
              Follow these simple steps to quickly get a guest room in our hostel
            </h2>

            <div className="bg-card border border-border rounded-xl w-full shadow-md p-6">
              <CardContent className="pt-2">
                <ul className="list-disc pl-5 space-y-3 text-sm text-muted-foreground">
  <li>
    Mail your request to 
    <span className="text-blue-600 font-medium"> chr_hab@iitg.ac.in </span>
    (Chairperson, HAB)
  </li>

  <li>
    Keep the following in CC:
    <ul className="list-none pl-4 mt-1 space-y-1">
      <li>
        <span className="text-blue-600 font-medium"> vchr_hab3@iitg.ac.in </span> (Vice Chair Girls, HAB)
      </li>
      <li>
        <span className="text-blue-600 font-medium"> warden.disang_gw@iitg.ac.in </span> (Warden, Disang)
      </li>
      <li>
        <span className="text-blue-600 font-medium"> disang.gw_off@iitg.ac.in </span> (Disang Hostel Office)
      </li>
    </ul>
  </li>

  <li>
    Wardens and hostel staff are not authorized to approve guest room requests.
  </li>

  <li>
    Ensure that the guest room payment is made to the HAB General Account (QR code attached).
  </li>

</ul>

              </CardContent>
            </div>
          </div>

          {/* Download Form */}
          <div className="mt-10 text-center">
            <a href={qrCode} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-accent">
                Get the QR code
              </Button>
            </a>
          </div>

          {/* Charges Section */}
          <div className="mt-16 bg-card border border-border rounded-xl shadow-md p-6">
            <CardContent className="pt-2">
              <h3 className="font-semibold mb-2 text-foreground">Charges</h3>
              <p className="text-sm text-muted-foreground mb-4">Charges per day</p>

              <h3 className="font-semibold mb-2 text-foreground">Stay</h3>
              <p className="text-sm text-muted-foreground">
                Maximum days of stay allowed
              </p>
            </CardContent>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HostelBooking;
