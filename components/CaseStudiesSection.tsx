import { Button } from "@/components/ui/button";
import { Search, TrendingUp } from "lucide-react";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      id: 1,
      emoji: "🏢",
      industry: "Real Estate",
      result: "3.1% CTR → 540+ site visits → faster sales cycle",
      highlight: "3.1% CTR"
    },
    {
      id: 2,
      emoji: "🏭",
      industry: "Manufacturing",
      result: "200% increase in qualified B2B leads",
      highlight: "200% increase"
    },
    {
      id: 3,
      emoji: "🩺",
      industry: "Clinics",
      result: "₹5,000 CPL → 20% faster patient bookings",
      highlight: "₹5,000 CPL"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-4">
            Proof. <span className="text-primary">Not Promises.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real campaigns across different industries.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 animate-fade-in animate-delay-200">
          {caseStudies.map((study, index) => (
            <div
              key={study.id}
              className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 group"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Industry Icon */}
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <span className="text-3xl">{study.emoji}</span>
                </div>
              </div>

              {/* Industry Title */}
              <h3 className="text-lg font-bold text-foreground text-center mb-3">
                {study.industry}
              </h3>

              {/* Result */}
              <p className="text-sm text-muted-foreground text-center leading-relaxed mb-4">
                {study.result}
              </p>

              {/* Highlight Badge */}
              <div className="text-center">
                <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                  {study.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center animate-fade-in animate-delay-400">
          <Button
            className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-glow hover:scale-105 group"
          >
            <Search className="mr-2 w-4 h-4" />
            See All Case Studies
            <TrendingUp className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;