# Creativo Landing Page 🎨

Landing page modern dengan struktur lengkap:
**Navbar → Hero + CTA → Social Proof → Services (Accordion) → Portfolio → Testimonials → CTA → Footer**  
Dibangun menggunakan **Next.js (App Router)**, **TailwindCSS**, dan **shadcn/ui**.

![Preview](./public/hero.svg)

---

## 🚀 Features
- ⚡ **Next.js 14 (App Router)**
- 🎨 **TailwindCSS** styling
- 🧩 **shadcn/ui** components (Button, Accordion, Card, Input, Sheet, DropdownMenu)
- 🌗 **Dark/Light mode toggle** (via `next-themes`)
- 📱 **Responsive layout** (mobile-first)
- 🖼️ **Portfolio grid section** siap untuk showcase project
- 💬 **Testimonials cards**
- 📩 **CTA form** dengan validasi sederhana

---

## 📂 Project Structure
```
src/
├─ app/
│  └─ page.tsx            # Komposisi section utama
├─ components/
│  ├─ navbar.tsx          # Navbar + Theme Toggle + MobileNav (Sheet)
│  ├─ hero.tsx            # Hero section + CTA + Social Proof
│  ├─ services.tsx        # Services accordion
│  ├─ portfolio.tsx       # Portfolio grid section
│  ├─ testimonials.tsx    # Testimonials cards
│  ├─ cta.tsx             # Secondary CTA (form)
│  ├─ footer.tsx          # Footer links
│  ├─ theme-provider.tsx  # Wrapper untuk next-themes
│  ├─ mode-toggle.tsx     # Dark/Light toggle
│  └─ mobile-nav.tsx      # Mobile menu (Sheet)
```

---

## 🛠️ Getting Started

### 1. Clone project
```bash
git clone https://github.com/username/creativo-landing.git
cd creativo-landing
```

### 2. Install dependencies
```bash
npm install
# atau
yarn install
# atau
pnpm install
```

### 3. Tambahkan shadcn components
```bash
npx shadcn@latest init
npx shadcn@latest add button accordion card input sheet dropdown-menu
```

### 4. Tambahkan dependencies tambahan
```bash
npm install next-themes lucide-react
```

### 5. Jalankan
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000).

---

## 🎨 Customization
- **Gambar:** letakkan di folder `/public` (`hero.svg`, `photo-4.jpg`, dll.)
- **Teks:** ubah konten di setiap komponen (`hero.tsx`, `services.tsx`, dll.)
- **Warna:** sesuaikan di `tailwind.config.ts` atau override class Tailwind.
- **Portfolio:** update list di `portfolio.tsx` untuk showcase project pribadi.

---

## ☁️ Deploy
Mudah deploy di **Vercel**:
1. Push repo ini ke GitHub.
2. Login ke [Vercel](https://vercel.com/).
3. Import project dari GitHub.
4. Klik **Deploy** → landing page siap online 🚀

---

## 🧪 Checklist Sebelum Deploy
- [ ] Ubah judul & deskripsi di `layout.tsx` (`metadata`).
- [ ] Ganti semua teks/gambar dummy.
- [ ] Tambahkan OpenGraph/SEO tag jika perlu.
- [ ] Test responsive di mobile & desktop.

---

## 📄 License
MIT – bebas dipakai & dimodifikasi.
