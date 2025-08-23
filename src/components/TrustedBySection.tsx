const TrustedBySection = () => {
  const partners = [
    { name: "Google", logoUrl: "/site-icons/google.webp" },
    { name: "Microsoft", logoUrl: "/site-icons/microsoft.png" },
    { name: "HubSpot", logoUrl: "https://cdn.simpleicons.org/hubspot" },
    { name: "Semrush", logoUrl: "https://cdn.simpleicons.org/semrush" },
    { name: "Meta", logoUrl: "https://cdn.simpleicons.org/meta" },
    { name: "LinkedIn", logoUrl: "/site-icons/linkedin.webp" },
    { name: "Stripe", logoUrl: "https://cdn.simpleicons.org/stripe" },
    { name: "Shopify", logoUrl: "https://cdn.simpleicons.org/shopify" },
    { name: "Google Analytics", logoUrl: "https://cdn.simpleicons.org/googleanalytics" },
    { name: "Mailchimp", logoUrl: "https://cdn.simpleicons.org/mailchimp" },
    { name: "Hotjar", logoUrl: "https://cdn.simpleicons.org/hotjar" },
    // { name: "Segment", logoUrl: "https://cdn.simpleicons.org/segment" },
    { name: "Twilio", logoUrl: "/site-icons/twilio-icon.svg" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-4">Partnered With</h3>
          <p className="text-muted-foreground">Ecosystem tools and platforms I integrate with</p>
        </div>

        {/* Partners Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {partners.map((p, index) => {
            const slug = p.name.toLowerCase().replace(/\s+/g, "");
            return (
              <div key={index} className="flex items-center justify-center animate-fade-in" style={{ animationDelay: `${0.05 * index}s` }}>
                <div className="w-28 h-20 rounded-xl bg-muted/50 hover:bg-primary/10 transition-all duration-300 flex items-center justify-center border border-border hover:border-primary/20 shadow-sm">
                  <img
                    src={p.logoUrl}
                    alt={`${p.name} logo`}
                    className="max-w-[70%] max-h-[60%] opacity-80 hover:opacity-100 transition-opacity"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = `https://cdn.simpleicons.org/${slug}`;
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;