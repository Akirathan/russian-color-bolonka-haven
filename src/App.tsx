import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import About from "./pages/About";
import Dogs from "./pages/Dogs";
import Puppies from "./pages/Puppies";
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
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/o-nas" element={<AboutUs />} />
          {/* SEO-friendly breed URL with redirect from old */}
          <Route path="/plemeno/ruska-barevna-bolonka" element={<About />} />
          <Route path="/o-plemeni" element={<Navigate to="/plemeno/ruska-barevna-bolonka" replace />} />
          <Route path="/nasi-psi" element={<Dogs />} />
          <Route path="/stenata" element={<Puppies />} />
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
