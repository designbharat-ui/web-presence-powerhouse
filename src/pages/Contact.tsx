import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", projectType: "", productCategory: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted!",
      description: "Our team will contact you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", projectType: "", productCategory: "", message: "" });
  };

  return (
    <Layout>
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

      {/* Contact Info & Form */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <a href="tel:+212600000000" className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                    <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+212 600 000 000</p>
                    </div>
                  </a>
                  <a href="mailto:info@onetouch.ma" className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
                    <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@onetouch.ma</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">Head Office</p>
                      <p className="text-muted-foreground">Rabat, Morocco<br />Industrial Zone</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center shrink-0">
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
                href="https://wa.me/212600000000" 
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
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input 
                        required 
                        value={formData.name} 
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input 
                        type="email" 
                        required 
                        value={formData.email} 
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone *</label>
                      <Input 
                        required 
                        value={formData.phone} 
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+212 XXX XXX XXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company</label>
                      <Input 
                        value={formData.company} 
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Project Type</label>
                      <Select value={formData.projectType} onValueChange={(value) => setFormData({ ...formData, projectType: value })}>
                        <SelectTrigger><SelectValue placeholder="Select project type" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new-installation">New Installation</SelectItem>
                          <SelectItem value="modernization">Modernization</SelectItem>
                          <SelectItem value="maintenance">Maintenance Contract</SelectItem>
                          <SelectItem value="spare-parts">Spare Parts Order</SelectItem>
                          <SelectItem value="consultation">Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Product Category</label>
                      <Select value={formData.productCategory} onValueChange={(value) => setFormData({ ...formData, productCategory: value })}>
                        <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ss-sheets">SS 304 Sheets</SelectItem>
                          <SelectItem value="panels">Car Operative Panels</SelectItem>
                          <SelectItem value="spare-parts">Spare Parts</SelectItem>
                          <SelectItem value="displays">Multimedia Displays</SelectItem>
                          <SelectItem value="safety">Safety Equipment</SelectItem>
                          <SelectItem value="installation">Installation Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Details</label>
                    <Textarea 
                      value={formData.message} 
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project requirements, quantities, timeline, etc."
                      rows={5}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-gradient-gold text-primary-foreground">
                    <Send className="mr-2 h-5 w-5" /> Submit Quote Request
                  </Button>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212891.99953739648!2d-7.0927458!3d33.9715904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b871f50c5c1%3A0x7ac946ed7408076b!2sRabat%2C%20Morocco!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
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
          <a href="mailto:careers@onetouch.ma">
            <Button variant="outline" size="lg" className="border-primary/50">
              View Open Positions
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
