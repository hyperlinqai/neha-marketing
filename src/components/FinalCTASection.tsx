import { Button } from "@/components/ui/button";
import { Download, MessageCircle, TrendingUp, Target, BarChart3, Zap } from "lucide-react";

const FinalCTASection = () => {
  // Floating elements representing the marketing machine
  const marketingElements = [
    { icon: Target, label: "Ads", position: "top-20 left-8" },
    { icon: Zap, label: "Funnels", position: "top-32 right-12" },
    { icon: BarChart3, label: "Automation", position: "bottom-32 left-12" },
    { icon: TrendingUp, label: "Reporting", position: "bottom-20 right-8" }
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
      </div>

      {/* Floating Marketing Elements */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden xl:block">
        {marketingElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.position} animate-bounce`}
            style={{ animationDelay: `${0.5 * index}s` }}
          >
            <div className="p-3 bg-background/80 backdrop-blur-sm rounded-xl border border-border shadow-lg">
              <element.icon className="w-5 h-5 text-primary mb-1" />
              <div className="text-xs text-muted-foreground font-medium">{element.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content Card */}
          <div className="bg-background/90 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12 shadow-2xl animate-fade-in">
            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
              Ready to Scale{" "}
              <span className="text-primary">Smarter</span>?
            </h2>

            {/* Copy */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              Let's talk about how <strong>ads, funnels, automation, and reporting</strong> can turn your marketing into a{" "}
              <span className="text-accent font-semibold">profit machine</span>.
            </p>

            {/* Visual Elements - Marketing Machine Concept */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 animate-fade-in animate-delay-200">
              <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-primary/10 rounded-full">
                <Target className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span className="text-xs sm:text-sm font-medium text-primary">Ads</span>
              </div>
              <div className="text-muted-foreground text-xs sm:text-sm">+</div>
              <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-primary/10 rounded-full">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span className="text-xs sm:text-sm font-medium text-primary">Funnels</span>
              </div>
              <div className="text-muted-foreground text-xs sm:text-sm">+</div>
              <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-primary/10 rounded-full">
                <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span className="text-xs sm:text-sm font-medium text-primary">Automation</span>
              </div>
              <div className="text-muted-foreground text-xs sm:text-sm">+</div>
              <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-primary/10 rounded-full">
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span className="text-xs sm:text-sm font-medium text-primary">Reporting</span>
              </div>
              <div className="text-muted-foreground text-xs sm:text-sm">=</div>
              <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 bg-accent/10 rounded-full">
                <span className="text-xs sm:text-sm font-bold text-accent">💰 Profit Machine</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animate-delay-300">
              <Button 
                className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-glow hover:scale-105 group"
                size="lg"
              >
                <Download className="mr-2 w-5 h-5" />
                Get My Free Audit
                <TrendingUp className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 group"
                size="lg"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Let's Talk
                <MessageCircle className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            {/* Trust Indicator */}
            <div className="mt-8 pt-6 border-t border-border animate-fade-in animate-delay-400">
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Available for new projects</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-border"></div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span>Free strategy session included</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12 animate-fade-in animate-delay-500">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">48hrs</div>
              <div className="text-sm text-muted-foreground">Average Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">3.2x</div>
              <div className="text-sm text-muted-foreground">Average ROAS Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">97%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
