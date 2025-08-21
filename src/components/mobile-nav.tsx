'use client';

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Open menu" className="md:hidden">
          <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" />
          </svg>
        </Button>
      </SheetTrigger>

      <SheetContent side="top" className="pt-4 px-5">
        <SheetHeader>
          <SheetTitle className="sr-only">Navigation</SheetTitle>
        </SheetHeader>
        <nav className="grid gap-3 text-sm font-medium">
          <a href="#home" className='hover:underline'>Home</a>
          <a href="#about" className='hover:underline'>About Us</a>
          <a href="#portfolio" className='hover:underline'>Portfolio</a>
          <a href="#services" className='hover:underline'>Services</a>
          <Button asChild className="mt-2">
            <a href="#contact">Get in Touch</a>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
