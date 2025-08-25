import { TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
            <TrendingUp className="w-5 h-5 text-primary" />
          </span>
          <span className="text-lg font-bold">
            WorX With <span className="text-primary">Neha</span>
          </span>
        </a>

        {/* CTA */}
        <div className="hidden sm:block">
          <a href="#contact">
            <Button className="px-4 py-2" size="sm">Let's Grow</Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
