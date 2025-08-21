import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from '@/components/ui/accordion';

export function Services() {
  return (
    <section id="services" className="py-16 md:py-20 bg-muted/30 border-y">
      <div className="container mx-auto px-4 grid md:grid-cols-[1fr_1.2fr] gap-10 items-start">
        <div>
          <p className="uppercase tracking-wide text-xs font-semibold text-muted-foreground">Our Services</p>
          <h2 className="mt-2 text-2xl md:text-3xl font-bold">Visual Branding</h2>
          <p className="mt-2 text-muted-foreground">
            Your brand is more than just a logo; it's the essence of your business.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="branding">
            <AccordionTrigger className="text-base font-semibold">Visual Branding</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              We craft brand identities that speak your story and resonate with your audience — from logo,
              color system, to brand guidelines.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="campaign">
            <AccordionTrigger className="text-base font-semibold">Creative Campaign</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              End-to-end ideation to execution: key visuals, content calendar, and multi-platform activation.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="uiux">
            <AccordionTrigger className="text-base font-semibold">UI/UX Design</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Human-centered product design for website & apps. Wireframe, prototype, design system, usability test.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="dev">
            <AccordionTrigger className="text-base font-semibold">Development</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Modern web development (Laravel, React) with performance, accessibility, and SEO in mind.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
