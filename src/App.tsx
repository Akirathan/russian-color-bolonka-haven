import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import About from "./pages/About";
import Dogs from "./pages/Dogs";
import Puppies from "./pages/Puppies";
import AktualniVrhy from "./pages/AktualniVrhy";
import PlanovaneVrhy from "./pages/PlanovaneVrhy";
import NaseOdchovy from "./pages/NaseOdchovy";
import LitterDetail from "./pages/LitterDetail";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Use Vite's computed base URL so routing works in preview (/) and on GitHub Pages (/repo-name/).
const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, "");

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={routerBasename}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/o-nas" element={<AboutUs />} />
          {/* SEO-friendly breed URL */}
          <Route path="/o-plemeni" element={<About />} />
          {/* Redirects from old URLs */}
          <Route path="/plemeno/ruska-barevna-bolonka" element={<Navigate to="/o-plemeni" replace />} />
          <Route path="/o-plemeni" element={<About />} />
          <Route path="/nasi-psi" element={<Dogs />} />
          {/* Puppies hub */}
          <Route path="/stenata" element={<Puppies />} />
          <Route path="/aktualni-vrhy" element={<AktualniVrhy />} />
          <Route path="/planovane-vrhy" element={<PlanovaneVrhy />} />
          <Route path="/nase-odchovy" element={<NaseOdchovy />} />
          <Route path="/stenata/vrh-leden-2026" element={<LitterDetail />} />
          <Route path="/clanky" element={<Articles />} />
          <Route path="/clanky/:slug" element={<ArticleDetail />} />
          <Route path="/kontakt" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
