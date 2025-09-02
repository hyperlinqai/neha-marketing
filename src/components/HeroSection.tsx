import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, BarChart3, Download, Rocket, Mail } from "lucide-react";
import { useState } from "react";
import heroBackground from "@/assets/hero-bg.jpg";
import nehaPhoto from "@/assets/neha-photo.jpg";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background with Dashboard Mockups */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Floating Dashboard Elements */}
      <div className="absolute inset-0 pointer-events-none z-20 hidden lg:block">
        <div className="absolute top-24 left-2 animate-bounce">
          <div className="p-2.5 bg-primary/15 rounded-lg backdrop-blur-sm border border-primary/30 shadow-lg">
            <div className="text-primary font-bold text-xs">+247%</div>
            <div className="text-xs text-muted-foreground">ROI Increase</div>
          </div>
        </div>
        <div className="absolute top-16 right-2 animate-bounce" style={{ animationDelay: '0.5s' }}>
          <div className="p-2.5 bg-accent/15 rounded-lg backdrop-blur-sm border border-accent/30 shadow-lg">
            <div className="text-accent font-bold text-xs">$2.4M</div>
            <div className="text-xs text-muted-foreground">Revenue</div>
          </div>
        </div>
        <div className="absolute bottom-16 left-4 animate-bounce" style={{ animationDelay: '1s' }}>
          <div className="p-2.5 bg-primary/15 rounded-lg backdrop-blur-sm border border-primary/30 shadow-lg">
            <BarChart3 className="w-3 h-3 text-primary mb-1" />
            <div className="text-xs text-muted-foreground">Analytics</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center min-h-screen py-8 sm:py-12">
          {/* Left Column - Content */}
          <div className="space-y-5 animate-fade-in max-w-xl">
            {/* Main Headline */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground">
              From Clicks to Clients:{" "}
              <span className="text-primary">Performance Marketing</span>{" "}
              That Delivers{" "}
              <span className="text-primary">ROI</span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed animate-fade-in animate-delay-200">
              I help businesses in <strong>real estate, healthcare, manufacturing, and services</strong> generate
              consistent, qualified leads through data-driven ad campaigns, conversion funnels, automation,
              and ROI-focused reporting.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 animate-fade-in animate-delay-300">
              <Button
                className="bg-accent hover:bg-accent-hover text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-glow hover:scale-105 group"
              >
                <Rocket className="mr-1 w-4 h-4" />
                Get My Free Funnel Audit 🚀
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 group"
              >
                <Download className="mr-1 w-4 h-4" />
                📊 Download ROI Guide
              </Button>
            </div>

            {/* Inline Lead Magnet Form */}
            <div className="bg-card border border-border rounded-lg p-4 shadow-card animate-fade-in animate-delay-400">
              <div className="flex items-center gap-2 mb-3">
                <Mail className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-semibold text-foreground">
                  📩 Claim Your Free Audit & Funnel Strategy
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-background border-border h-10 text-sm"
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-background border-border h-10 text-sm"
                    required
                  />
                  <Input
                    type="url"
                    name="website"
                    placeholder="Website URL"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="bg-background border-border h-10 text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-2 rounded-lg transition-all duration-300 text-sm"
                >
                  Send Me My Free Strategy
                </Button>
              </form>
            </div>
          </div>

          {/* Right Column - Professional Photo */}
          <div className="relative animate-fade-in animate-delay-500">
            <div className="relative max-w-sm mx-auto">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-6"></div>

              {/* Photo */}
              <img
                src={nehaPhoto}
                alt="Neha - Performance Marketing Expert"
                className="relative w-full rounded-2xl shadow-xl"
              />

              {/* Floating achievement badges */}
              <div className="absolute -top-3 -right-3 bg-background shadow-card rounded-lg p-3 border border-border">
                <div className="text-xl font-bold text-primary">4+</div>
                <div className="text-xs text-muted-foreground">Years</div>
              </div>

              <div className="absolute -bottom-3 -left-3 bg-background shadow-card rounded-lg p-3 border border-border">
                <div className="text-xl font-bold text-accent">200%</div>
                <div className="text-xs text-muted-foreground">Avg ROI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;