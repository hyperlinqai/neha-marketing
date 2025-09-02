import { Mail, Linkedin, TrendingUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <span className="p-2 rounded-lg bg-primary/10">
                <TrendingUp className="w-5 h-5 text-primary" />
              </span>
              <span className="text-xl font-bold">
                WorX With <span className="text-primary">Neha</span>
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <nav className="flex items-center justify-center gap-4 sm:gap-6">
              <a
                href="#"
                className="text-white hover:text-primary transition-colors font-medium text-sm sm:text-base"
              >
                Home
              </a>
              <a
                href="#case-studies"
                className="text-white hover:text-primary transition-colors font-medium text-sm sm:text-base"
              >
                Case Studies
              </a>
              <a
                href="#contact"
                className="text-white hover:text-primary transition-colors font-medium text-sm sm:text-base"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            <a
              href="https://linkedin.com/in/neha-performance-marketer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:hello@worxwithneha.com"
              className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-white/70 text-sm">
            © 2025 WorX With Neha. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;