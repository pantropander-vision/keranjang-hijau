# Keranjang Hijau 🟢

**Marketplace B2B untuk bisnis F&B Indonesia**

> "Semua yang bisnis F&B kamu butuhkan — dari supplier sampai jasa — dalam satu tempat terpercaya."

---

## Stack

- **Frontend:** Next.js 15 + TypeScript + Tailwind CSS
- **Database:** PostgreSQL (via Prisma ORM)
- **Cache:** Redis
- **Auth:** OTP via SMS (phone-first)
- **Payments:** Midtrans / Xendit
- **Storage:** Cloudflare R2
- **Hosting:** Vercel (Singapore region)
- **CDN:** Cloudflare

## Getting Started

```bash
# Install dependencies
npm install

# Copy env file
cp .env.example .env.local
# Fill in your values

# Run DB migrations
npx prisma migrate dev

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── (auth)/          # Login, Register
│   ├── (main)/          # Authenticated user pages
│   ├── (dashboard)/     # Seller dashboard
│   ├── (admin)/         # Admin panel
│   └── api/             # API routes
├── components/
│   ├── layout/          # BottomNav, Header, etc.
│   ├── listing/         # Listing cards, detail
│   ├── chat/            # Messaging components
│   ├── order/           # Order flow
│   └── ui/              # Shared UI primitives
├── lib/                 # Constants, utils, db
├── types/               # TypeScript types
└── hooks/               # Custom React hooks
```

## Key Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/masuk` | Login (OTP) |
| `/daftar` | Register + Onboarding |
| `/beranda` | Personalized home feed |
| `/cari` | Search & browse |
| `/produk/[id]` | Listing detail |
| `/pesan` | Chat inbox |
| `/pesanan` | Orders (buyer) |
| `/dashboard` | Seller dashboard |

## Environment Variables

See `.env.example` for all required variables.

## Deployment

Hosted on Vercel (Singapore `sin1` region) at:
`https://keranjanghijau.zoeclouds.com`

---

Built with ❤️ for UMKM F&B Indonesia.
