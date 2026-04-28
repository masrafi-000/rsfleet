"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  LifeBuoy, 
  Globe,
  ArrowRight,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add logic here
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* ── Section 1: Hero Header ── */}
      <section className="bg-slate-50 py-12 md:py-20 border-b border-slate-200 relative overflow-hidden">
        {/* Subtle pattern background */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#000 0.5px, transparent 0.5px)",
            backgroundSize: "24px 24px"
          }}
        />
        
        <div className="container mx-auto px-4 relative">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="size-4" />
            <span className="text-foreground font-medium">Contact Us</span>
          </nav>
          
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              Get in touch
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Contact <span className="text-primary">RS Fleet</span> Experts
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions about our fleet services or need a quick repair quote? 
              Our team is ready to help you keep your business moving. Reach out via form, 
              phone, or visit one of our workshops.
            </p>
          </div>
        </div>
      </section>

      {/* ── Section 2: Contact Info Cards ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <Card className="border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Phone className="size-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Call Support</h3>
                <p className="text-sm text-muted-foreground mb-4">Speak directly with our service coordinators.</p>
                <Link href="tel:+41000000000" className="text-primary font-bold hover:underline flex items-center gap-1">
                  +41 00 000 00 00 <ArrowRight className="size-3" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Mail className="size-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Email Us</h3>
                <p className="text-sm text-muted-foreground mb-4">Send us your detailed inquiries or documentation.</p>
                <Link href="mailto:info@rsfleet.ch" className="text-primary font-bold hover:underline flex items-center gap-1">
                  info@rsfleet.ch <ArrowRight className="size-3" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <MapPin className="size-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Main Office</h3>
                <p className="text-sm text-muted-foreground mb-4">Our headquarters and primary logistics center.</p>
                <p className="text-foreground font-bold">Zurich, Switzerland</p>
              </CardContent>
            </Card>

            <Card className="border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <LifeBuoy className="size-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">24/7 Support</h3>
                <p className="text-sm text-muted-foreground mb-4">Emergency roadside assistance for fleet members.</p>
                <Link href="#" className="text-primary font-bold hover:underline flex items-center gap-1">
                  Emergency Line <ArrowRight className="size-3" />
                </Link>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* ── Section 3: Contact Form + Details ── */}
      <section className="py-16 md:py-24 bg-slate-50 relative">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* Left: Form */}
              <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-slate-100">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2">Send us a message</h2>
                  <p className="text-muted-foreground">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        className="bg-slate-50 border-slate-200"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        className="bg-slate-50 border-slate-200"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      placeholder="Fleet maintenance inquiry" 
                      className="bg-slate-50 border-slate-200"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea 
                      id="message"
                      rows={6}
                      className="flex w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                      placeholder="Tell us about your fleet needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full sm:w-auto font-bold uppercase tracking-wider group">
                    Send Message
                    <Send className="size-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </form>
              </div>

              {/* Right: Info & Visual */}
              <div className="p-8 md:p-12 bg-slate-50/50 space-y-10">
                
                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase tracking-widest text-primary text-sm">Working Hours</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-start gap-4">
                      <div className="size-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                        <Clock className="size-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">Monday – Friday</p>
                        <p className="text-muted-foreground">8:00 AM – 6:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="size-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                        <Clock className="size-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-foreground">Saturday</p>
                        <p className="text-muted-foreground">9:00 AM – 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold uppercase tracking-widest text-primary text-sm">Our Global Reach</h3>
                  <div className="flex items-start gap-4">
                    <div className="size-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                      <Globe className="size-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">Swiss Operations</p>
                      <p className="text-muted-foreground leading-relaxed">
                        With 9 service centers strategically located, we provide 
                        comprehensive coverage for all your trucking needs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <MessageSquare className="size-5 text-primary" />
                      <h4 className="font-bold">Live Chat Available</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Need an immediate answer? Our customer success team is online during business hours.
                    </p>
                    <Button variant="outline" size="sm" className="font-bold uppercase text-xs">
                      Start Chatting
                    </Button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Simple FAQ / Support ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Questions</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Quick answers to help you get started with RS Fleet services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="space-y-3">
              <h4 className="font-bold text-lg">How quickly can I book a service?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Most routine maintenance can be scheduled within 24-48 hours. Emergency 
                repairs are prioritized at all our locations.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-lg">Do you offer roadside assistance?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Yes, we provide 24/7 emergency roadside support for all registered 
                fleet members across Switzerland.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-lg">What truck brands do you service?</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our technicians are certified for all major brands including Volvo, 
                Scania, MAN, Mercedes-Benz, and DAF.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">Didn&apos;t find what you were looking for?</p>
            <Button variant="ghost" className="text-primary font-bold">
              Visit our Help Center <ArrowRight className="size-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;
