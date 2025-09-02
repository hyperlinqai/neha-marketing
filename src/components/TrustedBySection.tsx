const TrustedBySection = () => {
  // Certifications and Platform Expertise
  const certifications = [
    { name: "Google Ads", logoUrl: "https://cdn.simpleicons.org/googleads", description: "Certified Expert" },
    { name: "Meta Business", logoUrl: "https://cdn.simpleicons.org/meta", description: "Blueprint Certified" },
    { name: "Google Analytics 4", logoUrl: "https://cdn.simpleicons.org/googleanalytics", description: "GA4 Qualified" },
  ];

  // Industries Served
  const industries = [
    { name: "Real Estate", icon: "🏢", description: "Property & Development" },
    { name: "Healthcare", icon: "🏥", description: "Medical & Wellness" },
    { name: "Manufacturing", icon: "🏭", description: "Industrial & B2B" },
    { name: "Services", icon: "💼", description: "Professional Services" },
  ];

  // Client Trust Indicators
  const trustIndicators = [
    { region: "GCC Markets", count: "15+", description: "Active Clients" },
    { region: "India", count: "25+", description: "Successful Campaigns" },
    { region: "Global", count: "40+", description: "Projects Delivered" },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Brands Across <span className="text-primary">GCC, India & Global Markets</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Certified expertise, proven results across industries, and trusted partnerships worldwide
          </p>
        </div>

        <div className="space-y-16">
          {/* Certifications Section */}
          <div className="animate-fade-in animate-delay-200">
            <h3 className="text-xl font-semibold text-center mb-8 text-foreground">
              🏆 Platform Certifications & Expertise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 rounded-2xl bg-background border-2 border-border group-hover:border-primary/50 transition-all duration-300 flex items-center justify-center shadow-card group-hover:shadow-hover">
                    <img
                      src={cert.logoUrl}
                      alt={`${cert.name} certification`}
                      className="w-10 h-10 sm:w-12 sm:h-12 opacity-80 group-hover:opacity-100 transition-opacity"
                      loading="lazy"
                    />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{cert.name}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Industries Served Section */}
          <div className="animate-fade-in animate-delay-300">
            <h3 className="text-xl font-semibold text-center mb-8 text-foreground">
              🎯 Industries Served
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {industries.map((industry, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-background border border-border group-hover:border-accent/50 transition-all duration-300 flex items-center justify-center shadow-card group-hover:shadow-hover">
                    <span className="text-3xl">{industry.icon}</span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{industry.name}</h4>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Indicators Section */}
          <div className="animate-fade-in animate-delay-400">
            <h3 className="text-xl font-semibold text-center mb-8 text-foreground">
              🌍 Global Reach & Trust
            </h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="text-center bg-background rounded-2xl p-6 border border-border shadow-card hover:shadow-hover transition-all duration-300">
                  <div className="text-3xl font-bold text-primary mb-2">{indicator.count}</div>
                  <h4 className="font-semibold text-foreground mb-1">{indicator.region}</h4>
                  <p className="text-sm text-muted-foreground">{indicator.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Trust Badge */}
          <div className="text-center animate-fade-in animate-delay-500">
            <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-full px-6 py-3">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="text-primary font-semibold">Currently accepting new clients globally</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;