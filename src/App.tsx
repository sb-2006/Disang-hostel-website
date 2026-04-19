import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import People from "./pages/People";
import Rules from "./pages/Rules";
import Forms from "./pages/Forms";
import HostelBooking from "./pages/HostelBooking";
import Facilities from "./pages/Facilities";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Complaints from "./pages/Complaints";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/people" element={<People />} /> */}
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/hostel-booking" element={<HostelBooking />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
