import { Button } from "@/components/ui/button";
import { Download, FileText, CheckCircle } from "lucide-react";

const LeadMagnetSection = () => {
  const auditBenefits = [
    "Identify your biggest ROI leaks",
    "Get specific fix recommendations",
    "See competitor analysis insights",
    "Receive actionable next steps"
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-accent/5 to-primary/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12 shadow-2xl animate-fade-in">
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-4">
              Ready to See Where You're{" "}
              <span className="text-accent">Losing ROI</span>?
            </h2>

            {/* Subheadline */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Download your <strong>Free ROI Audit PDF</strong>—we'll break down where your ad spend is leaking 
              and show you how to fix it.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-in animate-delay-200">
              {auditBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-left">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  <span className="text-sm sm:text-base text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="space-y-4 animate-fade-in animate-delay-300">
              <Button 
                className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-glow hover:scale-105 group"
                size="lg"
              >
                <Download className="mr-2 w-5 h-5" />
                📥 Get My Free Audit
                <FileText className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <p className="text-xs text-muted-foreground">
                No spam, just actionable insights. Delivered instantly to your inbox.
              </p>
            </div>

            {/* Trust Indicator */}
            <div className="mt-8 pt-6 border-t border-border animate-fade-in animate-delay-400">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-primary/20 rounded-full border-2 border-background flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">N</span>
                  </div>
                  <div className="w-8 h-8 bg-accent/20 rounded-full border-2 border-background flex items-center justify-center">
                    <span className="text-xs font-bold text-accent">A</span>
                  </div>
                  <div className="w-8 h-8 bg-primary/20 rounded-full border-2 border-background flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">R</span>
                  </div>
                </div>
                <span>Join 500+ marketers who've downloaded this audit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
