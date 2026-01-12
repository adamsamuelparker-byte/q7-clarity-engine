import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-section-primary">
      <Header />
      
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center px-5">
          <h1 className="text-6xl md:text-8xl font-bold text-heading mb-4">404</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/">
              Return to Homepage
            </Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;