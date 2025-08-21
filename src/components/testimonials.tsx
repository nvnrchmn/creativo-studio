import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function Testimonials() {
  return (
    <section id="testimoni" className="container mx-auto px-4 py-16 md:py-20">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold">What Clients Say</h2>
        <p className="text-muted-foreground mt-2">Feedback nyata dari pengguna dan mitra kami.</p>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-semibold">“Rebrand sukses, engagement 3× naik.”</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-3">
            <Image src="/photo-4.jpg" alt="Client" width={40} height={40} className="rounded-full" />
            <div className="text-sm">
              <div className="font-semibold">Rama Putra</div>
              <div className="text-muted-foreground">CMO, Orbit</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base font-semibold">“UI/UX rapi, handoff ke dev smooth.”</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-3">
            <Image src="/photo-5.jpg" alt="Client" width={40} height={40} className="rounded-full" />
            <div className="text-sm">
              <div className="font-semibold">Intan Nabila</div>
              <div className="text-muted-foreground">Product Manager, Nord</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base font-semibold">“Launching terasa fresh & relevan.”</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-3">
            <Image src="/photo-6.jpg" alt="Client" width={40} height={40} className="rounded-full" />
            <div className="text-sm">
              <div className="font-semibold">Surya A.</div>
              <div className="text-muted-foreground">Founder, Zephyr</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
