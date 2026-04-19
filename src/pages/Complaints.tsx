"use client";
import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Complaints = () => {
  // 👉 Replace this URL with your actual Google Form embed link
  const googleFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSf2Z1vNwe6AGcPGn6y-B9mkLayTw4BDfMj_Bn7Ih_dZW32Tgg/viewform?usp=dialog ";

  const formRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  };

  const handleCollapse = () => {
    setShowForm(false);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />

      <div ref={topRef} className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="font-heading font-bold text-4xl md:text-5xl mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Submit a Complaint
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-lg mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We're here to help. Please fill out the form below with your concern.
          </motion.p>

          <motion.div
            className="bg-card border border-border rounded-2xl shadow-md p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Click below to open the complaint form. Your response will be sent directly to
              our administration email.
            </p>

            <Button
              onClick={handleOpenForm}
              className="rounded-xl px-8 py-6 text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg"
            >
              Open Complaint Form
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>

        {/* Embedded Google Form (reveals below when clicked) */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              ref={formRef}
              className="max-w-4xl mx-auto mt-16 relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card border border-border rounded-2xl shadow-lg p-4 md:p-6 relative">
                <iframe
                  src={googleFormUrl}
                  width="100%"
                  height="1200"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded-xl"
                >
                  Loading…
                </iframe>
              </div>

              {/* Floating Collapse / Scroll-Up Button */}
              <motion.button
                onClick={handleCollapse}
                className="fixed bottom-8 right-8 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-2xl transition-all"
                animate={{
                  y: [0, -6, 0],
                  boxShadow: [
                    "0px 0px 10px rgba(4,105,152,0.4)",
                    "0px 0px 20px rgba(4,105,152,0.8)",
                    "0px 0px 10px rgba(4,105,152,0.4)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.15, rotate: 8 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronUp className="h-6 w-6" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Complaints;
