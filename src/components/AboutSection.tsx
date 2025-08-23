import { Card } from "@/components/ui/card";
import { Zap, Target, BarChart3, Cog } from "lucide-react";
import nehaPhoto from "@/assets/neha-photo.jpg";

const AboutSection = () => {
  const expertise = [
    {
      icon: Zap,
      title: "Paid Advertising",
      description: "Facebook, Google, LinkedIn campaigns that convert"
    },
    {
      icon: Target,
      title: "Landing Pages",
      description: "High-converting pages designed for performance"
    },
    {
      icon: Cog,
      title: "Marketing Automation",
      description: "Streamlined funnels that work 24/7"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Data-driven insights that drive growth"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Photo */}
          <div className="animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-2xl transform rotate-6"></div>
              <img
                src={nehaPhoto}
                alt="Neha - Performance Marketer"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-card"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-background shadow-card rounded-xl p-4">
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8 animate-fade-in animate-delay-200">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-gradient">Me</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With over 4 years of experience in performance marketing, I specialize in 
                creating full-funnel marketing strategies that deliver measurable results. 
                Based in Dubai, I've helped businesses across various industries optimize 
                their ad spend and maximize ROI.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach combines creative strategy with data-driven optimization to 
                ensure every campaign delivers quality leads and sustainable growth.
              </p>
            </div>

            {/* Expertise Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <Card 
                  key={index} 
                  className="p-6 gradient-card border-0 shadow-card card-hover animate-scale-in"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;