import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const items = [
  { title: 'Brand Identity Refresh', img: '/porto1.jpg', tags: ['Branding', 'Guidelines'] },
  { title: 'E-Commerce UI Kit', img: '/porto1.jpg', tags: ['UI/UX', 'Design System'] },
  { title: 'Launch Campaign 2025', img: '/porto1.jpg', tags: ['Campaign', 'Social'] },
  { title: 'Corporate Website', img: '/porto1.jpg', tags: ['Web', 'SEO'] },
  { title: 'Mobile App Prototype', img: '/porto1.jpg', tags: ['Prototype', 'Testing'] },
  { title: 'Product Landing', img: '/porto1.jpg', tags: ['Conversion', 'A/B'] },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="container mx-auto px-4 py-16 md:py-20">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold">Selected Works</h2>
        <p className="text-muted-foreground mt-2">Beberapa proyek pilihan kami.</p>
      </div>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it) => (
          <Card key={it.title} className="overflow-hidden">
            <div className="relative aspect-[4/3] w-full">
              <Image src={it.img} alt={it.title} fill className="object-cover" />
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{it.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2">
                {it.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full border px-2 py-0.5 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
