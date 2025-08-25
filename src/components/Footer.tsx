import { Mail, Linkedin, TrendingUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 flex items-center justify-center md:justify-start gap-2">
              <span className="p-2 rounded-lg bg-primary/10">
                <TrendingUp className="w-5 h-5 text-primary" />
              </span>
              <span>
                WorX With <span className="text-primary">Neha</span>
              </span>
            </h3>
            <p className="text-background/70 max-w-md">
              Performance marketing specialist helping businesses in Dubai and the UAE 
              achieve measurable growth through data-driven strategies.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:hello@worxwithneha.com"
              className="p-3 bg-background/10 hover:bg-background/20 rounded-lg transition-colors group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://linkedin.com/in/neha-performance-marketer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-background/10 hover:bg-background/20 rounded-lg transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 my-8"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-background/70">
          <div>
            © 2024 WorX With Neha. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <span>Based in Dubai, UAE</span>
            <span>•</span>
            <span>Available for global projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;