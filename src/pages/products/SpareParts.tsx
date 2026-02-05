import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Search, ArrowRight, CheckCircle, Package } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

const parts = [
  { image: "/images/spare-battery.jpg", name: "Batteries", desc: "Emergency light batteries for all brands" },
  { image: "/images/spare-intercom.jpg", name: "Intercom Systems", desc: "Emergency communication systems" },
  { image: "/images/spare-drive.jpg", name: "VVVF Drives", desc: "Variable frequency drives" },
  { image: "/images/spare-handrails.jpg", name: "Handrails", desc: "Rubber/PU escalator handrails" },
  { image: "/images/spare-chain.jpg", name: "Tension Chains", desc: "Handrail tension chains" },
  { image: "/images/spare-sensors.jpg", name: "Sensors", desc: "Door and safety sensors" },
  { image: "/images/spare-governor.jpg", name: "Speed Governors", desc: "Elevator speed governors" },
  { image: "/images/spare-machine.jpg", name: "Gearless Machines", desc: "MRL solutions" },
  { image: "/images/spare-combs.jpg", name: "Combs", desc: "Escalator step combs" },
  { image: "/images/spare-rollers.jpg", name: "Rollers", desc: "Step and chain rollers" },
];

const brands = ["OTIS", "KONE", "Schindler", "ThyssenKrupp", "Mitsubishi", "Hitachi"];

const SpareParts = () => {
  return (
    <Layout>
      <SEOHead 
        canonicalUrl="/products/spare-parts.html"
         title="Elevator Spare Parts - All Major Brands"
         description="Genuine and compatible spare parts for OTIS, KONE, Schindler, ThyssenKrupp, Mitsubishi, Hitachi elevators. VVVF drives, batteries, sensors, governors. Fast delivery."
         keywords="elevator spare parts Delhi, escalator parts India, OTIS parts, KONE parts, Schindler parts, VVVF drives, elevator batteries"
         pageType="ItemPage"
         breadcrumbs={[{ name: "Products", url: "/products.html" }, { name: "Spare Parts", url: "/products/spare-parts.html" }]}
      />
      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="container">
          <SectionHeader 
            eyebrow="Spare Parts Catalog" 
            title="Complete Parts Inventory" 
            description="Genuine and compatible spare parts for all major elevator and escalator brands."
          />
          {/* Search */}
          <div className="max-w-2xl mx-auto mt-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Search parts by name, brand, or part number..." className="pl-12 h-14 text-lg bg-card" />
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container">
        <Breadcrumbs />
      </div>

      {/* Brand Filter */}
      <section className="py-8 border-b border-border">
        <div className="container">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-muted-foreground">Filter by brand:</span>
            <Button variant="secondary" size="sm" className="bg-primary text-primary-foreground">All Brands</Button>
            {brands.map((brand) => (
              <Button key={brand} variant="outline" size="sm">{brand}</Button>
            ))}
          </div>
        </div>
      </section>

      {/* Parts Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {parts.map((part) => (
              <div key={part.name} className="group rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all hover-lift bg-card">
                <div className="aspect-square overflow-hidden p-4">
                  <img src={part.image} alt={part.name} className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-4 border-t border-border">
                  <h4 className="font-medium mb-1">{part.name}</h4>
                  <p className="text-muted-foreground text-sm mb-3">{part.desc}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-green-500">In Stock</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Orders */}
      <section className="py-24 section-gradient">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Bulk Orders</span>
              <h2 className="font-display text-4xl md:text-5xl mb-6">Volume Discounts Available</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Save more when you order in bulk. We offer competitive pricing for maintenance companies and elevator service providers.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  { qty: "10+ pieces", discount: "5% discount" },
                  { qty: "50+ pieces", discount: "10% discount" },
                  { qty: "100+ pieces", discount: "15% discount" },
                ].map((tier) => (
                  <li key={tier.qty} className="flex items-center gap-3">
                    <Package className="h-5 w-5 text-primary" />
                    <span>{tier.qty}: <strong className="text-primary">{tier.discount}</strong></span>
                  </li>
                ))}
              </ul>
              <Link to="/contact.html">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Request Bulk Quote</Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl bg-card border border-border text-center">
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-medium">OEM Parts</h4>
                <p className="text-muted-foreground text-sm">Original manufacturer parts</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border text-center">
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-medium">Compatible Parts</h4>
                <p className="text-muted-foreground text-sm">Quality-tested alternatives</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border text-center">
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-medium">Fast Delivery</h4>
                <p className="text-muted-foreground text-sm">3-5 days for stock items</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border text-center">
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <h4 className="font-medium">Technical Support</h4>
                <p className="text-muted-foreground text-sm">Expert installation guidance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SpareParts;
