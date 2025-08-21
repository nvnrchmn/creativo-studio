'use client';

import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { MobileNav } from '@/components/mobile-nav';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-extrabold">
          <span className="inline-grid place-items-center size-6 rounded-md bg-foreground text-background">✺</span>
          Creativo.
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:underline underline-offset-4" href="#home">Home</a>
          <a className="hover:underline underline-offset-4" href="#about">About Us</a>
          <a className="hover:underline underline-offset-4" href="#portfolio">Portfolio</a>
          <a className="hover:underline underline-offset-4" href="#services">Services</a>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <ModeToggle />
          <Button asChild variant="outline">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        {/* Mobile: hamburger + theme toggle */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
