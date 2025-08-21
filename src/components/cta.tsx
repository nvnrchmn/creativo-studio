'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function CTA() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-muted/30 border-t">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-6 md:gap-10">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold">Siap upgrade brand & produk Anda?</h2>
          <p className="text-muted-foreground mt-2">
            Cerita dan tujuan Anda, kami terjemahkan jadi visual & pengalaman yang berkesan.
          </p>
        </div>

        <form
          className="flex-1 w-full grid grid-cols-1 sm:grid-cols-3 gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Terima kasih! Kami akan menghubungi Anda.');
          }}
        >
          <Input placeholder="Nama" required className="sm:col-span-1" />
          <Input type="email" placeholder="Email" required className="sm:col-span-1" />
          <Button type="submit" className="sm:col-span-1">Daftar Sekarang</Button>
        </form>
      </div>
    </section>
  );
}
