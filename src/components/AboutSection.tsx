import { Target, Zap, BarChart3, TrendingUp, Users, Clock } from "lucide-react";

const AboutSection = () => {
  const whyWorkWithMe = [
    {
      icon: Target,
     // emoji: "🎯",
      title: "ROI-Driven Ads",
      description: "I run data-backed campaigns that don't just get clicks, but conversions.",
      highlight: "Conversion-focused"
    },
    {
      icon: Zap,
     // emoji: "⚡",
      title: "Funnel + Automation",
      description: "Build predictable lead pipelines with automation that never sleeps.",
      highlight: "24/7 Pipeline"
    },
    {
      icon: BarChart3,
     // emoji: "📈",
      title: "Real Reporting",
      description: "Transparent dashboards that show profit, not vanity metrics.",
      highlight: "Profit-focused"
    }
  ];

  // Floating metrics similar to hero section
  const metrics = [
    { value: "97%", label: "Client Retention", icon: Users },
    { value: "3.2x", label: "Avg ROAS", icon: TrendingUp },
    { value: "48hrs", label: "Setup Time", icon: Clock }
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-background overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
      </div>

      {/* Floating Metrics - Similar to hero section */}
      <div className="absolute inset-0 pointer-events-none z-20 hidden xl:block">
        <div className="absolute top-20 left-2 animate-bounce">
          <div className="p-2.5 bg-primary/15 rounded-lg backdrop-blur-sm border border-primary/30 shadow-lg">
            <Users className="w-3 h-3 text-primary mb-1" />
            <div className="text-primary font-bold text-xs">97%</div>
            <div className="text-xs text-muted-foreground">Retention</div>
          </div>
        </div>
        <div className="absolute top-32 right-2 animate-bounce" style={{ animationDelay: '0.5s' }}>
          <div className="p-2.5 bg-accent/15 rounded-lg backdrop-blur-sm border border-accent/30 shadow-lg">
            <TrendingUp className="w-3 h-3 text-accent mb-1" />
            <div className="text-accent font-bold text-xs">3.2x</div>
            <div className="text-xs text-muted-foreground">Avg ROAS</div>
          </div>
        </div>
        <div className="absolute bottom-20 left-4 animate-bounce" style={{ animationDelay: '1s' }}>
          <div className="p-2.5 bg-primary/15 rounded-lg backdrop-blur-sm border border-primary/30 shadow-lg">
            <Clock className="w-3 h-3 text-primary mb-1" />
            <div className="text-primary font-bold text-xs">48hrs</div>
            <div className="text-xs text-muted-foreground">Setup</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-4">
              Why Work With <span className="text-primary">Me</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Three core pillars that make the difference between spending money on ads and actually making money from them.
            </p>
          </div>

          {/* Why Work With Me Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-fade-in animate-delay-200">
            {whyWorkWithMe.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 group"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Icon and Emoji */}
                <div className="flex items-center justify-center mb-4">
                  <div className="relative">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/15 transition-colors">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>

                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                    {item.highlight}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 animate-fade-in animate-delay-400">
            <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-full px-6 py-3">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary font-semibold text-sm">
                Ready to see these principles in action? Let's talk strategy.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;