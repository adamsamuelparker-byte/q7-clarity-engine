import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center">
        <section className="section-padding">
          <div className="container-narrow text-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
                <CheckCircle className="h-8 w-8" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">
                Thank You
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                We've received your enquiry. A member of our team will be in touch shortly to discuss your requirements.
              </p>
              
              <Button variant="accent" size="lg" asChild>
                <Link to="/">
                  Return to Homepage
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
