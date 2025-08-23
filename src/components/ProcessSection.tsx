import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Settings, Zap, TestTube, BarChart3 } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "Understanding your business goals, target audience, and current performance",
      icon: Search,
      color: "text-primary bg-primary/10"
    },
    {
      number: "02", 
      title: "Setup",
      description: "Campaign architecture, audience creation, and tracking implementation",
      icon: Settings,
      color: "text-accent bg-accent/10"
    },
    {
      number: "03",
      title: "Automation",
      description: "Building scalable systems and workflows for consistent performance",
      icon: Zap,
      color: "text-primary bg-primary/10"
    },
    {
      number: "04",
      title: "Testing",
      description: "Continuous optimization through A/B testing and data analysis",
      icon: TestTube,
      color: "text-accent bg-accent/10"
    },
    {
      number: "05",
      title: "Reporting",
      description: "Regular performance reviews and strategic recommendations",
      icon: BarChart3,
      color: "text-primary bg-primary/10"
    }
  ];

  // Calculate positions for circular layout
  const getStepPosition = (index: number, total: number) => {
    const angle = (index * 360) / total - 90; // Start from top
    const radius = 200; // Distance from center
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;
    return { x, y, angle };
  };

  return (
    <section className="py-24 relative bg-background" id="process">
      <div className="container mx-auto px-6">
        {/* Background overlay */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, hsl(var(--primary)/0.25) 0%, transparent 60%)' }} />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, hsl(var(--accent)/0.25) 0%, transparent 60%)' }} />
        </div>
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-xs font-semibold text-secondary-foreground mb-4">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Proven Framework
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A systematic approach to performance marketing that delivers consistent, 
            measurable results for every client.
          </p>
        </div>

        {/* Unified Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline rail */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/90 via-primary/60 to-accent/90 rounded-full shadow-glow/20" />

          <div className="space-y-8 md:space-y-10">
            {steps.map((step, index) => (
              <div key={index} className="group relative pl-16 md:pl-24 animate-slide-up" style={{ animationDelay: `${0.08 * index}s` }}>
                {/* Node */}
                <div className="absolute left-0 md:left-2 -top-1">
                  <div className="relative">
                    {/* Gradient ring wrapper */}
                    <div className="p-[2px] rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--primary))] transition-transform duration-300 group-hover:scale-105">
                      <div className="rounded-full bg-background">
                        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full ring-4 ring-background shadow-glow flex items-center justify-center transition-transform duration-300 ${step.color} group-hover:scale-105`}>
                          <step.icon className="w-6 h-6 md:w-7 md:h-7" />
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-7 h-7 md:w-8 md:h-8 bg-primary text-white rounded-full flex items-center justify-center text-xs md:text-sm font-bold shadow-card">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Connector to card */}
                <div className="absolute left-12 md:left-[3.25rem] top-6 h-0.5 w-8 md:w-12 bg-border" />

                {/* Card */}
                <Card className="relative overflow-hidden gradient-card border-0 shadow-card card-hover p-6 md:p-7 transition-smooth group-hover:shadow-hover">
                  {/* Decorative top gradient line */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-80" />
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="max-w-2xl">
                      <h3 className="text-xl md:text-2xl font-extrabold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    <div className="hidden md:block">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent text-accent-foreground shadow-sm">
                        Step {step.number}
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="relative overflow-hidden gradient-card border-0 shadow-card p-5 text-center card-hover">
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary/80 via-accent/80 to-primary/80" />
            <div className="text-sm text-muted-foreground">Avg CPA Improvement</div>
            <div className="text-2xl font-bold text-foreground">35%</div>
          </Card>
          <Card className="relative overflow-hidden gradient-card border-0 shadow-card p-5 text-center card-hover">
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary/80 via-accent/80 to-primary/80" />
            <div className="text-sm text-muted-foreground">Tracking Accuracy</div>
            <div className="text-2xl font-bold text-foreground">99%+</div>
          </Card>
          <Card className="relative overflow-hidden gradient-card border-0 shadow-card p-5 text-center card-hover">
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-primary/80 via-accent/80 to-primary/80" />
            <div className="text-sm text-muted-foreground">Experiments / Month</div>
            <div className="text-2xl font-bold text-foreground">10+</div>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14 animate-fade-in animate-delay-500">
          <div className="max-w-2xl mx-auto p-8 gradient-card rounded-2xl shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-2">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">Let's discuss how this proven process can transform your marketing results.</p>
            <div className="flex items-center justify-center gap-3">
              <Button variant="default" className="px-6 py-5 rounded-xl shadow-glow hover:shadow-hover transition-smooth">See Case Studies</Button>
              <Button variant="outline" className="px-6 py-5 rounded-xl border-2 hover:bg-secondary transition-smooth">Book Strategy Call</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;