import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", projectType: "", productCategory: "", message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Project details are required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Please fill all required fields",
        description: "Fields marked with * are mandatory.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Quote Request Submitted!",
      description: "Our team will contact you within 24 hours.",
    });
    handleClear();
  };

  const handleClear = () => {
    setFormData({ name: "", email: "", phone: "", company: "", projectType: "", productCategory: "", message: "" });
    setErrors({});
  };

  return (
    <Layout>
      <SEOHead 
        canonicalUrl="/contact.html"
         title="Contact Us - Get Expert Consultation"
         description="Contact One Touch Industrial Solutions for elevator products and installation quotes. Call +91 9711312081 or email us. Quick response within 24 hours. Delhi, India."
         keywords="contact elevator company Delhi, elevator quote India, escalator installation quote, lift consultation, industrial solutions contact"
         pageType="ContactPage"
         breadcrumbs={[{ name: "Contact Us", url: "/contact.html" }]}
      />
      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="container">
          <SectionHeader
            eyebrow="Contact Us" 
            title="Let's Discuss Your Project" 
            description="Get a free consultation and quote from our expert team. We're here to help elevate your next project."
          />
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container">
        <Breadcrumbs />
      </div>

      {/* Contact Info & Form */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <a href="tel:+919711312081" className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+91 9711312081</p>
                    </div>
                  </a>
                  <a href="mailto:info@onetouchindustrialsolutions.com" className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@onetouchindustrialsolutions.com</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Head Office</p>
                      <p className="text-muted-foreground">Delhi, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Working Hours</p>
                      <p className="text-muted-foreground">Mon - Fri: 8:00 - 18:00<br />Sat: 9:00 - 14:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/919711312081" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 rounded-xl bg-green-600 text-white hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="h-6 w-6" />
                <span className="font-medium">Chat on WhatsApp</span>
              </a>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <div className="p-8 rounded-2xl bg-card border border-border">
                <h3 className="font-display text-2xl mb-6">Request a Quote</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        value={formData.name} 
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="Your name"
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        type="email" 
                        value={formData.email} 
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="your@email.com"
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        value={formData.phone} 
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="+91 XXX XXX XXXX"
                        className={errors.phone ? "border-red-500" : ""}
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Company <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        value={formData.company} 
                        onChange={(e) => {
                          setFormData({ ...formData, company: e.target.value });
                          if (errors.company) setErrors({ ...errors, company: undefined });
                        }}
                        placeholder="Company name"
                        className={errors.company ? "border-red-500" : ""}
                      />
                      {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Project Type</label>
                      <Select value={formData.projectType} onValueChange={(value) => setFormData({ ...formData, projectType: value })}>
                        <SelectTrigger><SelectValue placeholder="Select project type" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new-installation">New Installation</SelectItem>
                          <SelectItem value="modernization">Modernization & Upgrades</SelectItem>
                          <SelectItem value="maintenance">AMC / Maintenance Contract</SelectItem>
                          <SelectItem value="spare-parts">Spare Parts Supply</SelectItem>
                          <SelectItem value="building-cladding">Building & Cladding</SelectItem>
                          <SelectItem value="vertical-gardens">Vertical Gardens</SelectItem>
                          <SelectItem value="tensile-structures">Tensile Structures</SelectItem>
                          <SelectItem value="consultation">Technical Consultation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Product Category</label>
                      <Select value={formData.productCategory} onValueChange={(value) => setFormData({ ...formData, productCategory: value })}>
                        <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ss-sheets">Designer SS 304 Sheets</SelectItem>
                          <SelectItem value="panels">Car Operating Panels</SelectItem>
                          <SelectItem value="spare-parts">Elevator & Escalator Spare Parts</SelectItem>
                          <SelectItem value="displays">Multimedia Displays</SelectItem>
                          <SelectItem value="entrances">Entrances & Signage</SelectItem>
                          <SelectItem value="safety">Safety Equipment & PPE</SelectItem>
                          <SelectItem value="tools">Industrial Tools</SelectItem>
                          <SelectItem value="installation">Installation Services</SelectItem>
                          <SelectItem value="acp-hpl">ACP/HPL Cladding</SelectItem>
                          <SelectItem value="glass-glazing">Glass & Glazing</SelectItem>
                          <SelectItem value="vertical-gardens">Vertical Gardens</SelectItem>
                          <SelectItem value="scientific-agriculture">Scientific & Agriculture</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <Textarea 
                      value={formData.message} 
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Tell us about your project requirements, quantities, timeline, etc."
                      rows={5}
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                  <div className="flex gap-4">
                    <Button type="submit" size="lg" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                      <Send className="mr-2 h-5 w-5" /> Submit Quote Request
                    </Button>
                    <Button type="button" size="lg" variant="outline" onClick={handleClear}>
                      <RotateCcw className="mr-2 h-5 w-5" /> Clear
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-24 section-gradient">
        <div className="container">
          <div className="rounded-2xl overflow-hidden border border-border h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.95106tried!2d77.0688997!3d28.6436844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="OneTouch Location"
            />
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="py-24">
        <div className="container text-center">
          <h2 className="font-display text-4xl mb-4">Join Our Team</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for skilled mechanics, supervisors, and project managers to join our growing team.
          </p>
          <a href="mailto:careers@onetouchindustrialsolutions.com">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              View Open Positions
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
