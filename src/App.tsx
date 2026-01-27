import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/ss-sheets" element={<SSSheets />} />
            <Route path="/products/panels" element={<Panels />} />
            <Route path="/products/spare-parts" element={<SpareParts />} />
            <Route path="/products/displays" element={<Displays />} />
            <Route path="/products/safety" element={<Safety />} />
            <Route path="/products/entrances" element={<Entrances />} />
            <Route path="/products/tools" element={<Tools />} />
            <Route path="/services/installation" element={<Installation />} />
            <Route path="/services/building-systems" element={<BuildingSystems />} />
            <Route path="/services/vertical-gardens" element={<VerticalGardens />} />
            <Route path="/services/scientific-agriculture" element={<ScientificAgriculture />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
