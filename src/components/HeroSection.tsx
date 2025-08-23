import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Target, BarChart3 } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="p-3 bg-primary/10 rounded-full">
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
        </div>
        <div className="absolute top-32 right-20 animate-bounce" style={{ animationDelay: '0.5s' }}>
          <div className="p-3 bg-accent/10 rounded-full">
            <Target className="w-6 h-6 text-accent" />
          </div>
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce" style={{ animationDelay: '1s' }}>
          <div className="p-3 bg-primary/10 rounded-full">
            <BarChart3 className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in">
            Hi, I'm{" "}
            <span className="text-gradient">Neha</span>
            {" "}–{" "}
            <br className="hidden md:block" />
            Results-Focused{" "}
            <span className="text-gradient">Performance Marketer</span>
            {" "}in Dubai
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-fade-in animate-delay-200">
            Turning ad budgets into quality leads & revenue with data-driven strategies
          </p>

          {/* Stats Row */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-12 animate-fade-in animate-delay-300">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">200%</div>
              <div className="text-sm text-muted-foreground">Avg ROI Increase</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Campaigns Launched</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-fade-in animate-delay-400">
            <Button 
              className="btn-hero group"
              size="lg"
            >
              WorX With Neha
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;