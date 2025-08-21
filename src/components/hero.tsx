import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section id="home" className="container mx-auto px-4 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <p className="uppercase tracking-wide text-muted-foreground text-xs font-semibold">Creative Studio</p>
        <h1 className="mt-2 scroll-m-20 text-4xl/tight md:text-5xl/tight font-extrabold">
          Where <span className="text-primary">Design</span> Meets Innovation!
        </h1>
        <p className="mt-4 text-muted-foreground max-w-prose">
          {"Whether you're a startup looking to establish your brand identity or an established business aiming to refresh your image, we've got the creative firepower to make it happen."}
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button asChild><a href="#contact">{"Let's Talk"}</a></Button>
          <Button asChild variant="outline"><a href="#portfolio">Lihat Portfolio</a></Button>
        </div>

        {/* Social proof */}
        <div className="mt-8 flex items-center gap-4">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">Trusted by</span>
          <ul className="flex gap-4 text-sm font-semibold text-foreground/70">
            <li>Acme</li><li>Orbit</li><li>Nord</li><li>Zephyr</li>
          </ul>
        </div>
      </div>

      <div className="relative">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border">
          {/* ganti ke asetmu di /public/hero.svg / hero.jpg */}
          <Image src="/hero.svg" alt="Creative team working" fill className="object-cover" priority />
        </div>
      </div>
    </section>
  );
}
