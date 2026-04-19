import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar, FileCheck, Tool } from "lucide-react";

const Forms = () => {
  // LEFT COLUMN - downloadable PDFs
  const pdfForms = [
    {
      icon: Calendar,
      title: "Leave Application Form",
      description: "Submit this form for overnight or extended leave",
      fileSize: "128 KB",
      category: "Leave",
      link: "public/leave application form.pdf",
    },
    {
      icon: FileCheck,
      title: "Hostel Undertaking Form",
      description: "Declaration form for hostel rules and regulations",
      fileSize: "128 KB",
      category: "Undertaking",
      link: ""public/leave application form.pdf",
    },
  ];

  // RIGHT COLUMN - feedback/web page links
  const feedbackLinks = [
    {
      icon: Tool,
      title: "LAN Issues Portal",
      description: "Access the LAN Issues Portal and log internet-related complaints.",
      link: "https://www.iitg.ac.in/cb/",
      category: "Complaint",
    },
    {
      icon: FileText,
      title: "IPM Complaint Portal",
      description: "Report maintenance issues or grievances.",
      link: "https://intranet.iitg.ac.in/ipm/complaint",
      category: "Complaint",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="font-heading text-4xl font-bold mb-4 text-foreground">
              Download Forms
            </h1>
            <p className="text-muted-foreground text-lg">
              Access all necessary hostel forms and documents. Download, fill, or open as required.
            </p>
          </div>

          {/* Two-column layout */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* LEFT COLUMN - PDFs */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Important Form PDFs</h2>
              <div className="space-y-6">
                {pdfForms.map((form, index) => {
                  const Icon = form.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-lg mb-2">{form.title}</CardTitle>
                              <CardDescription>{form.description}</CardDescription>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between pt-4 border-t">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="px-2 py-1 bg-secondary rounded text-xs font-medium">
                              {form.category}
                            </span>
                            <span>{form.fileSize}</span>
                          </div>
                          <Button asChild size="sm" className="gap-2">
                            <a href={form.link} target="_blank" rel="noopener noreferrer">
                              <Download className="h-4 w-4" />
                              Download
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* RIGHT COLUMN - Feedback Links */}
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Feedback Form Links</h2>
              <div className="space-y-6">
                {feedbackLinks.map((form, index) => {
                  const Icon = form.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-lg mb-2">{form.title}</CardTitle>
                              <CardDescription>{form.description}</CardDescription>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between pt-4 border-t">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="px-2 py-1 bg-secondary rounded text-xs font-medium">
                              {form.category}
                            </span>
                          </div>
                          <Button asChild size="sm" className="gap-2">
                            <a href={form.link} target="_blank" rel="noopener noreferrer">
                              <LinkIcon className="h-4 w-4" />
                              Open
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Forms;
