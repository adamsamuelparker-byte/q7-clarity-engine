import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import SolutionPage from "./pages/SolutionPage";
import SubProductPage from "./pages/SubProductPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/AdminDashboard";
import LogoDownload from "./pages/LogoDownload";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Static Pages - must come before dynamic routes */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/logo" element={<LogoDownload />} />
          
          {/* Sub Product Pages - more specific, comes before single param route */}
          <Route path="/:categorySlug/:productSlug" element={<SubProductPage />} />
          
          {/* Solution Pages - Dynamic route with slug */}
          <Route path="/:slug" element={<SolutionPage />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;