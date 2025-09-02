"use client";

import { TrendingUp, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-secondary/95 backdrop-blur supports-[backdrop-filter]:bg-secondary/90 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
            <TrendingUp className="w-5 h-5 text-primary" />
          </span>
          <span className="text-lg font-bold text-white">
            WorX With <span className="text-primary">Neha</span>
          </span>
        </a>

        {/* Navigation Menu - Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-primary transition-colors font-medium">
            Home
          </a>
          <a href="#case-studies" className="text-white hover:text-primary transition-colors font-medium">
            Case Studies
          </a>
          <a href="#contact" className="text-white hover:text-primary transition-colors font-medium">
            Contact
          </a>
        </nav>

        {/* CTA - Desktop */}
        <div className="hidden sm:block">
          <a href="#contact">
            <Button className="bg-accent hover:bg-accent-hover text-white px-6 py-2 font-semibold" size="sm">
              Get Free Funnel Audit
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary border-t border-border">
          <nav className="container mx-auto px-6 py-4 space-y-4">
            <a href="#" className="block text-white hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#case-studies" className="block text-white hover:text-primary transition-colors font-medium">
              Case Studies
            </a>
            <a href="#contact" className="block text-white hover:text-primary transition-colors font-medium">
              Contact
            </a>
            <div className="pt-4">
              <a href="#contact" className="block">
                <Button className="bg-accent hover:bg-accent-hover text-white px-6 py-2 font-semibold w-full" size="sm">
                  Get Free Funnel Audit
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
