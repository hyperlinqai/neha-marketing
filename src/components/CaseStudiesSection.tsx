import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, DollarSign, Clock } from "lucide-react";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      id: 1,
      image: caseStudy1,
      client: "Abhay HealthTech",
      industry: "HealthTech / Consumer Healthcare",
      title: "How I Helped a Healthcare Brand Streamline Sales & Boost Product Awareness",
      challenge:
        "Split customer journey with redirects to third-party e-commerce, killing trust and brand authority",
      solution:
        "Implemented UTM tracking, trust signals, SEO optimization, and seamless redirect strategy with \"Buy Securely on Fills.in\" CTAs",
      results: [
        { metric: "Engagement Rate", before: "Baseline", after: "+20%", icon: TrendingUp },
        { metric: "Click-Through Rate", before: "Industry Avg 2–3%", after: "2.9%", icon: TrendingUp },
        { metric: "Cost per Click", before: "Market Rate", after: "₹8.3", icon: DollarSign },
        { metric: "Leads Captured", before: "0", after: "1,250", icon: Users },
        { metric: "Lead Response Time", before: "Manual", after: "Automated (Faster)", icon: Clock }
      ],
      description:
        "Key Takeaway: Even without direct payment integration, proper tracking, trust signals (ISO/WHO approvals), and seamless user experience can significantly improve healthcare e-commerce performance while maintaining brand credibility."
    },
    {
      id: 2,
      image: caseStudy2,
      client: "OneSquare Infra",
      industry: "Commercial Real Estate",
      challenge:
        "High organic traffic but low conversion rates, manual lead handling causing drop-offs, lack of investor trust in mid-sized developer segment",
      solution:
        "Implemented high-converting landing page with WhatsApp API automation, targeted Meta & Google Ads, and instant lead follow-up system",
      results: [
        { metric: "Cost per Lead", before: "Market Rate", after: "₹70–₹90", icon: DollarSign },
        { metric: "Landing Page Conversion Rate", before: "Low Baseline", after: "10–13%", icon: TrendingUp },
        { metric: "WhatsApp Engagement Rate", before: "Manual Follow-up", after: "80–85% (within 5 mins)", icon: Users },
        { metric: "Inventory Booked", before: "Stagnant", after: "20–40% (estimated)", icon: TrendingUp },
        { metric: "Lead Response Time", before: "Hours", after: "Seconds (automated)", icon: Clock },
        { metric: "Campaign Setup Time", before: "Months", after: "3 weeks (rapid)", icon: Clock }
      ],
      description:
        "Key Takeaway: In competitive commercial real estate markets, automation speed trumps everything — instant WhatsApp follow-up with brochures and scheduling can convert mid-sized developers into market winners against branded competitors."
    }
  ];

  return (
    <section className="py-24 gradient-hero">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Case <span className="text-gradient">Studies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real campaigns. See how I've helped businesses 
            transform their marketing performance.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card 
              key={study.id} 
              className="gradient-card border-0 shadow-card card-hover animate-slide-up"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative overflow-hidden rounded-t-xl">
                  <img
                    src={study.image}
                    alt={`${study.client} case study`}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-foreground">{study.industry}</span>
                  </div>
                </div>

                <div className="p-6 space-y-6">
                  {/* Client & Challenge */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{study.client}</h3>
                    {/** Optional Title */}
                    {(study as any).title && (
                      <p className="text-base text-foreground mb-2 font-semibold">
                        {(study as any).title}
                      </p>
                    )}
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm font-medium text-foreground">Industry:</span>
                        <p className="text-sm text-muted-foreground">{study.industry}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-accent">Challenge:</span>
                        <p className="text-sm text-muted-foreground">{study.challenge}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-primary">Solution:</span>
                        <p className="text-sm text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Results:</h4>
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <result.icon className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">{result.metric}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="text-muted-foreground">{result.before}</span>
                          <ArrowRight className="w-3 h-3 text-muted-foreground" />
                          <span className="font-bold text-accent">{result.after}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  

                  {/* Description & CTA */}
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">{study.description}</p>
                    <Button variant="outline" className="w-full group">
                      View Full Case Study
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;