import { Button } from "@/components/ui/button";
import { Phone, MapPin, GraduationCap, Award, TrendingUp } from "lucide-react";
import nehaPhoto from "@/assets/neha-photo.jpg";

const FounderSnapshotSection = () => {
  const journey = [
    {
      location: "Gurgaon",
      company: "Almond AI",
      description: "Discovered how technology and marketing could truly move the needle",
      icon: TrendingUp,
      color: "text-primary"
    },
    {
      location: "Bangalore", 
      achievement: "Marketing Degree",
      description: "Built a strong foundation in strategy",
      icon: GraduationCap,
      color: "text-accent"
    },
    {
      location: "Chennai",
      focus: "Brand Scaling",
      description: "Refined expertise, learning how to scale brands with precision",
      icon: Award,
      color: "text-primary"
    }
  ];

  const certifications = [
    "Google Ads Certified",
    "Meta Blueprint Certified", 
    "GA4 Qualified"
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 animate-fade-in">
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              Who's Behind{" "}
              <span className="text-primary">WorX Media</span>?
            </h2>

            {/* Journey Story */}
            <div className="space-y-4">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I began my journey in <strong>Gurgaon with Almond AI</strong>, where I saw how technology and marketing 
                could truly move the needle. <strong>Bangalore</strong> gave me the platform to earn my Marketing degree, 
                building a strong foundation in strategy.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Later, <strong>Chennai</strong> refined my expertise, teaching me how to scale brands with precision.
              </p>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Today, with <strong>Google Ads, Meta & GA4 certifications</strong>, I combine data, creativity, and cultural 
                intelligence to help brands worldwide grow with measurable ROI.
              </p>
            </div>

            {/* Journey Timeline */}
            <div className="space-y-4 animate-fade-in animate-delay-200">
              {journey.map((step, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border">
                  <div className={`p-2 rounded-lg bg-primary/10`}>
                    <step.icon className={`w-5 h-5 ${step.color}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-4 h-4 text-muted-foreground" />
                      <span className="font-semibold text-foreground">{step.location}</span>
                      {step.company && (
                        <span className="text-sm text-primary">• {step.company}</span>
                      )}
                      {step.achievement && (
                        <span className="text-sm text-accent">• {step.achievement}</span>
                      )}
                      {step.focus && (
                        <span className="text-sm text-primary">• {step.focus}</span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="animate-fade-in animate-delay-300">
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3">Certifications & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="inline-flex items-center px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm font-semibold rounded-full">
                    <Award className="w-3 h-3 mr-1" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="animate-fade-in animate-delay-400">
              <Button 
                className="bg-accent hover:bg-accent-hover text-white px-8 py-3 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-glow hover:scale-105 group"
              >
                <Phone className="mr-2 w-4 h-4" />
                 Book a Free Strategy Call
                <TrendingUp className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Column - Professional Photo */}
          <div className="relative animate-fade-in animate-delay-500">
            <div className="relative max-w-md mx-auto">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3"></div>
              
              {/* Photo */}
              <img
                src={nehaPhoto}
                alt="Neha - Founder of WorX Media"
                className="relative w-full rounded-2xl shadow-xl"
              />
              
              {/* Floating location badges */}
              <div className="absolute -top-3 -left-3 bg-background shadow-card rounded-lg p-3 border border-border">
                <div className="text-primary font-bold text-sm">Gurgaon</div>
                <div className="text-xs text-muted-foreground">Started</div>
              </div>
              
              <div className="absolute top-1/2 -right-3 bg-background shadow-card rounded-lg p-3 border border-border">
                <div className="text-accent font-bold text-sm">Bangalore</div>
                <div className="text-xs text-muted-foreground">Studied</div>
              </div>
              
              <div className="absolute -bottom-3 -left-3 bg-background shadow-card rounded-lg p-3 border border-border">
                <div className="text-primary font-bold text-sm">Chennai</div>
                <div className="text-xs text-muted-foreground">Refined</div>
              </div>

              {/* Current status badge */}
              <div className="absolute -bottom-3 -right-3 bg-primary shadow-card rounded-lg p-3 border border-border">
                <div className="text-white font-bold text-sm">Global</div>
                <div className="text-xs text-primary-foreground">Now Serving</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSnapshotSection;
