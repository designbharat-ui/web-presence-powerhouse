import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import SSSheets from "./pages/products/SSSheets";
import Panels from "./pages/products/Panels";
import SpareParts from "./pages/products/SpareParts";
import Displays from "./pages/products/Displays";
import Safety from "./pages/products/Safety";
import Entrances from "./pages/products/Entrances";
import Tools from "./pages/products/Tools";
import Installation from "./pages/services/Installation";
import BuildingSystems from "./pages/services/BuildingSystems";
import VerticalGardens from "./pages/services/VerticalGardens";
import ScientificAgriculture from "./pages/services/ScientificAgriculture";
import Projects from "./pages/Projects";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Main routes with .html extension */}
            <Route path="/" element={<Navigate to="/index.html" replace />} />
            <Route path="/index.html" element={<Index />} />
            <Route path="/about.html" element={<About />} />
            <Route path="/products.html" element={<Products />} />
            <Route path="/products/ss-sheets.html" element={<SSSheets />} />
            <Route path="/products/panels.html" element={<Panels />} />
            <Route path="/products/spare-parts.html" element={<SpareParts />} />
            <Route path="/products/displays.html" element={<Displays />} />
            <Route path="/products/safety.html" element={<Safety />} />
            <Route path="/products/entrances.html" element={<Entrances />} />
            <Route path="/products/tools.html" element={<Tools />} />
            <Route path="/services/installation.html" element={<Installation />} />
            <Route path="/services/building-systems.html" element={<BuildingSystems />} />
            <Route path="/services/vertical-gardens.html" element={<VerticalGardens />} />
            <Route path="/services/scientific-agriculture.html" element={<ScientificAgriculture />} />
            <Route path="/projects.html" element={<Projects />} />
            <Route path="/clients.html" element={<Clients />} />
            <Route path="/contact.html" element={<Contact />} />
            <Route path="/sitemap.html" element={<Sitemap />} />
            
            {/* Redirects from old URLs to new .html URLs */}
            <Route path="/about" element={<Navigate to="/about.html" replace />} />
            <Route path="/products" element={<Navigate to="/products.html" replace />} />
            <Route path="/products/ss-sheets" element={<Navigate to="/products/ss-sheets.html" replace />} />
            <Route path="/products/panels" element={<Navigate to="/products/panels.html" replace />} />
            <Route path="/products/spare-parts" element={<Navigate to="/products/spare-parts.html" replace />} />
            <Route path="/products/displays" element={<Navigate to="/products/displays.html" replace />} />
            <Route path="/products/safety" element={<Navigate to="/products/safety.html" replace />} />
            <Route path="/products/entrances" element={<Navigate to="/products/entrances.html" replace />} />
            <Route path="/products/tools" element={<Navigate to="/products/tools.html" replace />} />
            <Route path="/services/installation" element={<Navigate to="/services/installation.html" replace />} />
            <Route path="/services/building-systems" element={<Navigate to="/services/building-systems.html" replace />} />
            <Route path="/services/vertical-gardens" element={<Navigate to="/services/vertical-gardens.html" replace />} />
            <Route path="/services/scientific-agriculture" element={<Navigate to="/services/scientific-agriculture.html" replace />} />
            <Route path="/projects" element={<Navigate to="/projects.html" replace />} />
            <Route path="/clients" element={<Navigate to="/clients.html" replace />} />
            <Route path="/contact" element={<Navigate to="/contact.html" replace />} />
            <Route path="/sitemap" element={<Navigate to="/sitemap.html" replace />} />
            
            {/* 404 catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
