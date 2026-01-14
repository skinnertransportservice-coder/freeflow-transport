import { Truck, Package, Clock, Shield, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-transport.jpg";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
    <div className="container mx-auto px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <div className="w-10 h-10 rounded-lg accent-gradient flex items-center justify-center">
          <Truck className="w-6 h-6 text-primary-foreground" />
        </div>
        <span className="font-display text-xl font-bold">SKINNER TRANSPORT</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <button onClick={() => scrollToSection("services")} className="text-muted-foreground hover:text-foreground transition-colors">Services</button>
        <button onClick={() => scrollToSection("quote")} className="text-muted-foreground hover:text-foreground transition-colors">Get Quote</button>
        <button onClick={() => scrollToSection("drivers")} className="text-muted-foreground hover:text-foreground transition-colors">Drive With Us</button>
        <button onClick={() => scrollToSection("contact")} className="text-muted-foreground hover:text-foreground transition-colors">Contact</button>
      </div>
       <a 
    href="https://wa.me/61480806325" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
  >
    <WhatsAppIcon className="w-5 h-5" /> {/* If using an icon component */}
    +61 480 806 325
  </a>
    </div>
  </nav>
);

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-20">
    <div className="absolute inset-0 z-0">
      <img 
        src={heroImage} 
        alt="Transport trucks on highway" 
        className="w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 hero-gradient opacity-90" />
    </div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-primary font-medium">Reliable Transport Since 2010</span>
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Moving Your Freight,{" "}
          <span className="text-gradient">Across The Nation</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Professional logistics and transport services. From small packages to full truckloads, 
          we deliver with precision and care.
        </p>
        
        <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="xl" onClick={() => scrollToSection("quote")}>
            Get Instant Quote
          </Button>
          <Button variant="heroOutline" size="xl" onClick={() => scrollToSection("drivers")}>
            Join Our Team
          </Button>
        </div>
        
        <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/30 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div>
            <div className="text-3xl font-display font-bold text-primary">15K+</div>
            <div className="text-sm text-muted-foreground">Deliveries Complete</div>
          </div>
          <div>
            <div className="text-3xl font-display font-bold text-primary">98%</div>
            <div className="text-sm text-muted-foreground">On-Time Delivery</div>
          </div>
          <div>
            <div className="text-3xl font-display font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Active Drivers</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const services = [
  {
    icon: Truck,
    title: "Full Truckload",
    description: "Dedicated trucks for your large shipments with guaranteed capacity and direct routes.",
  },
  {
    icon: Package,
    title: "Less Than Truckload",
    description: "Cost-effective shipping for smaller loads, consolidated with other shipments.",
  },
  {
    icon: Clock,
    title: "Express Delivery",
    description: "Time-critical shipments delivered with expedited service and real-time tracking.",
  },
  {
    icon: Shield,
    title: "Secure Transport",
    description: "High-value cargo with enhanced security measures and insurance coverage.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 relative">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-primary font-medium mb-4 block">Our Services</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
          Complete Transport Solutions
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From coast to coast, we provide comprehensive logistics services tailored to your needs.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div 
            key={service.title}
            className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <service.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-muted-foreground text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const QuoteSection = () => (
  <section id="quote" className="py-24 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
    <div className="container mx-auto px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-medium mb-4 block">Free Quote</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Get Your Shipping Quote
          </h2>
          <p className="text-muted-foreground">
            Fill out the form below and receive a competitive quote within 24 hours.
          </p>
        </div>
        
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <form className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full h-12 px-4 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input 
                type="email" 
                placeholder="john@example.com"
                className="w-full h-12 px-4 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Phone Number</label>
              <input 
                type="tel" 
                placeholder="+1 (555) 123-4567"
                className="w-full h-12 px-4 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Service Type</label>
              <select className="w-full h-12 px-4 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors">
                <option>Full Truckload (FTL)</option>
                <option>Less Than Truckload (LTL)</option>
                <option>Express Delivery</option>
                <option>Secure Transport</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Pickup Location
              </label>
              <input 
                type="text" 
                placeholder="City, State or ZIP"
                className="w-full h-12 px-4 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Delivery Location
              </label>
              <input 
                type="text" 
                placeholder="City, State or ZIP"
                className="w-full h-12 px-4 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-medium">Cargo Description</label>
              <textarea 
                placeholder="Describe your cargo (weight, dimensions, special requirements...)"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors resize-none"
              />
            </div>
            <div className="md:col-span-2">
              <Button variant="hero" size="lg" className="w-full">
                Request Quote
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const DriversSection = () => (
  <section id="drivers" className="py-24 relative overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-primary font-medium mb-4 block">Join Our Team</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Drive With <span className="text-gradient">Skinner Transport</span>
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Join our growing family of professional drivers. Competitive pay, flexible schedules, 
            and a supportive team environment.
          </p>
          
          <ul className="space-y-4 mb-8">
            {[
              "Competitive weekly pay with bonuses",
              "Modern, well-maintained fleet",
              "Flexible home time schedules",
              "Full benefits package",
              "24/7 driver support team",
            ].map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          
          <Button variant="hero" size="lg" onClick={() => scrollToSection("drivers")}>
            Apply Now
          </Button>
        </div>
        
        <div className="relative">
          <div className="glass-card rounded-3xl p-8">
            <h3 className="font-display text-2xl font-bold mb-6">Quick Application</h3>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Full Name"
                className="w-full h-12 px-4 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
              />
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full h-12 px-4 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
              />
              <input 
                type="tel" 
                placeholder="Phone Number"
                className="w-full h-12 px-4 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
              />
              <select className="w-full h-12 px-4 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors">
                <option>Years of Experience</option>
                <option>1-2 years</option>
                <option>3-5 years</option>
                <option>5-10 years</option>
                <option>10+ years</option>
              </select>
              <select className="w-full h-12 px-4 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors">
                <option>CDL Class</option>
                <option>Class A</option>
                <option>Class B</option>
                <option>Class C</option>
              </select>
              <Button variant="hero" size="lg" className="w-full">
                Submit Application
              </Button>
            </form>
          </div>
          
          <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl accent-gradient opacity-20 animate-float" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-primary/10 animate-float" style={{ animationDelay: "1s" }} />
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="py-16 border-t border-border/30">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg accent-gradient flex items-center justify-center">
              <Truck className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold">SKINNER TRANSPORT</span>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            Your trusted partner in logistics and freight transportation across the nation.
          </p>
        </div>
        
        <div>
          <h4 className="font-display font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><button onClick={() => scrollToSection("services")} className="hover:text-foreground transition-colors">Full Truckload</button></li>
            <li><button onClick={() => scrollToSection("services")} className="hover:text-foreground transition-colors">LTL Shipping</button></li>
            <li><button onClick={() => scrollToSection("services")} className="hover:text-foreground transition-colors">Express Delivery</button></li>
            <li><button onClick={() => scrollToSection("services")} className="hover:text-foreground transition-colors">Secure Transport</button></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-display font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-foreground transition-colors">About Us</button></li>
            <li><button onClick={() => scrollToSection("drivers")} className="hover:text-foreground transition-colors">Careers</button></li>
            <li><button onClick={() => scrollToSection("quote")} className="hover:text-foreground transition-colors">Get Quote</button></li>
            <li><button onClick={() => scrollToSection("contact")} className="hover:text-foreground transition-colors">Contact</button></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-display font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>1234 Transport Way</li>
            <li>Los Angeles, CA 90001</li>
           <li>
  <a 
    href="https://wa.me/61480806325" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-primary hover:text-primary/80 transition-colors"
  >
    WhatsApp: +61 480 806 325
  </a>
</li>
            <li><a href="mailto:skinnertransportservice@gmail.com" className="text-primary hover:text-primary/80 transition-colors">dispatch@skinnertransport.com</a></li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-border/30 text-center text-sm text-muted-foreground">
        <p>© 2024 Skinner Transport Service. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <QuoteSection />
      <DriversSection />
      <Footer />
    </div>
  );
};

export default Index;
