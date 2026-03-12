import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { PageViewTracker } from "@/components/PageViewTracker";
import Index from "./pages/Index";
import SolutionPage from "./pages/SolutionPage";
import SubProductPage from "./pages/SubProductPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/AdminDashboard";
import QuickLanding from "./pages/QuickLanding";
import LogoDownload from "./pages/LogoDownload";
import EMopedEBikePage from "./pages/EMopedEBikePage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Tracking from "./pages/Tracking";
import { CookieConsent } from "./components/CookieConsent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <PageViewTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Static Pages - must come before dynamic routes */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/logo" element={<LogoDownload />} />
          <Route path="/quick" element={<QuickLanding />} />
          <Route path="/e-moped-e-bike" element={<EMopedEBikePage />} />
          
          {/* Sub Product Pages - more specific, comes before single param route */}
          <Route path="/:categorySlug/:productSlug" element={<SubProductPage />} />
          
          {/* Solution Pages - Dynamic route with slug */}
          <Route path="/:slug" element={<SolutionPage />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;