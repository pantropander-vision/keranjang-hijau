import Link from 'next/link'

const C = {
  green:      '#1E6B2E',
  greenLight: '#2D8A40',
  cream:      '#FDF6EC',
  orange:     '#D45F1A',
  dark:       '#111827',
  gray:       '#F3F4F6',
  grayBorder: '#E5E7EB',
  white:      '#FFFFFF',
  textMuted:  '#6B7280',
  textLight:  '#9CA3AF',
}

export default function LandingPage() {
  return (
    <main style={{ minHeight: '100vh', background: C.cream, fontFamily: "'Plus Jakarta Sans', sans-serif", color: C.dark }}>

      {/* ── HEADER ── */}
      <header style={{ background: C.white, borderBottom: `1px solid ${C.grayBorder}`, position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 34, height: 34, background: C.green, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: C.white, fontWeight: 800, fontSize: 13 }}>KH</span>
            </div>
            <span style={{ fontWeight: 800, fontSize: 17, color: C.dark }}>Keranjang Hijau</span>
          </div>
          {/* Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Link href="/masuk" style={{ color: C.green, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
              Masuk
            </Link>
            <Link href="/daftar" style={{
              background: C.orange, color: C.white, fontWeight: 700, fontSize: 14,
              padding: '9px 20px', borderRadius: 10, textDecoration: 'none',
              display: 'inline-block',
            }}>
              Daftar Gratis
            </Link>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section style={{ background: C.green, padding: '72px 20px 64px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div style={{
            display: 'inline-block', background: 'rgba(255,255,255,0.2)',
            color: C.white, borderRadius: 999, padding: '6px 16px',
            fontSize: 13, fontWeight: 600, marginBottom: 20,
            border: '1px solid rgba(255,255,255,0.3)',
          }}>
            🟢 Marketplace B2B F&B #1 Indonesia
          </div>
          <h1 style={{ color: C.white, fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, lineHeight: 1.2, margin: '0 0 16px' }}>
            Semua yang bisnis F&B kamu butuhkan
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 18, margin: '0 0 36px', lineHeight: 1.6 }}>
            Dari supplier sampai jasa — dalam satu tempat terpercaya.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <Link href="/daftar" style={{
              background: C.orange, color: C.white, fontWeight: 800, fontSize: 16,
              padding: '14px 32px', borderRadius: 12, textDecoration: 'none',
              display: 'inline-block', boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
            }}>
              Mulai Sekarang — Gratis
            </Link>
            <Link href="/beranda" style={{
              background: 'rgba(255,255,255,0.15)', color: C.white, fontWeight: 700, fontSize: 16,
              padding: '14px 32px', borderRadius: 12, textDecoration: 'none',
              display: 'inline-block', border: '2px solid rgba(255,255,255,0.4)',
            }}>
              Jelajahi Marketplace
            </Link>
          </div>
          {/* Social proof */}
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13, marginTop: 24 }}>
            ✓ Gratis selamanya untuk 10 listing  ·  ✓ Escrow aman  ·  ✓ Terverifikasi
          </p>
        </div>
      </section>

      {/* ── VALUE PROPS ── */}
      <section style={{ padding: '64px 20px', background: C.white }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 26, fontWeight: 800, color: C.dark, marginBottom: 8 }}>
            Kenapa Keranjang Hijau?
          </h2>
          <p style={{ textAlign: 'center', color: C.textMuted, marginBottom: 40, fontSize: 15 }}>
            Platform yang dibangun khusus untuk ekosistem F&B Indonesia
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {[
              { icon: '🔍', title: 'Temukan dengan Mudah', desc: 'Supplier dan jasa F&B terpercaya di kotamu, lengkap dengan portofolio dan ulasan nyata dari sesama pelaku bisnis.' },
              { icon: '🛡️', title: 'Transaksi Aman', desc: 'Pembayaran via escrow — uang kamu aman tersimpan sampai pekerjaan selesai dan kamu benar-benar puas.' },
              { icon: '⚡', title: 'Jual & Beli Sekaligus', desc: 'Satu akun untuk semua. Beli bahan baku hari ini, tawarkan jasamu ke sesama F&B besok.' },
            ].map((item) => (
              <div key={item.title} style={{
                background: C.cream, borderRadius: 14, padding: '28px 24px',
                border: `1px solid ${C.grayBorder}`,
              }}>
                <div style={{ fontSize: 36, marginBottom: 14 }}>{item.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 17, color: C.dark, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ color: C.textMuted, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section style={{ padding: '56px 20px', background: C.cream }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: C.dark, margin: 0 }}>Kategori Populer</h2>
            <Link href="/beranda" style={{ color: C.green, fontWeight: 700, fontSize: 14, textDecoration: 'none' }}>
              Lihat semua →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 14 }}>
            {[
              { icon: '🥩', label: 'Bahan Baku', sub: 'Supplier' },
              { icon: '📦', label: 'Kemasan', sub: 'Packaging' },
              { icon: '📸', label: 'Foto Makanan', sub: 'Jasa' },
              { icon: '🎨', label: 'Desain & Branding', sub: 'Jasa' },
              { icon: '📱', label: 'Digital Marketing', sub: 'Jasa' },
              { icon: '🍶', label: 'Minuman & Boba', sub: 'Supplier' },
              { icon: '🔪', label: 'Peralatan Dapur', sub: 'Supplier' },
              { icon: '📋', label: 'Konsultasi', sub: 'Jasa' },
            ].map((cat) => (
              <Link key={cat.label} href="/beranda" style={{ textDecoration: 'none' }}>
                <div style={{
                  background: C.white, borderRadius: 12, padding: '20px 12px',
                  textAlign: 'center', border: `1px solid ${C.grayBorder}`,
                  transition: 'box-shadow 0.2s',
                  cursor: 'pointer',
                }}>
                  <div style={{ fontSize: 32, marginBottom: 8 }}>{cat.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: C.dark }}>{cat.label}</div>
                  <div style={{ fontSize: 12, color: C.textMuted, marginTop: 2 }}>{cat.sub}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ background: C.green, padding: '40px 20px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 24, textAlign: 'center' }}>
          {[
            { value: '65M+', label: 'Pelaku UMKM F&B di Indonesia' },
            { value: '15', label: 'Kategori produk & jasa' },
            { value: '100%', label: 'Transaksi aman via escrow' },
            { value: 'Gratis', label: 'Untuk 10 listing pertama' },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ color: C.white, fontSize: 30, fontWeight: 800 }}>{s.value}</div>
              <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '72px 20px', textAlign: 'center', background: C.white }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: C.dark, marginBottom: 12 }}>
            Siap bergabung?
          </h2>
          <p style={{ color: C.textMuted, fontSize: 16, marginBottom: 32, lineHeight: 1.6 }}>
            Gratis selamanya untuk 10 listing pertama. Mulai dalam 2 menit — tanpa kartu kredit.
          </p>
          <Link href="/daftar" style={{
            background: C.green, color: C.white, fontWeight: 800, fontSize: 17,
            padding: '16px 40px', borderRadius: 12, textDecoration: 'none',
            display: 'inline-block', boxShadow: '0 4px 16px rgba(30,107,46,0.3)',
          }}>
            Daftar Sekarang — Gratis
          </Link>
          <p style={{ color: C.textLight, fontSize: 13, marginTop: 16 }}>
            Sudah punya akun?{' '}
            <Link href="/masuk" style={{ color: C.green, fontWeight: 700, textDecoration: 'none' }}>Masuk di sini</Link>
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: C.dark, color: 'rgba(255,255,255,0.7)', padding: '40px 20px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 12 }}>
            <div style={{ width: 28, height: 28, background: C.green, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: C.white, fontWeight: 800, fontSize: 11 }}>KH</span>
            </div>
            <span style={{ color: C.white, fontWeight: 700, fontSize: 15 }}>Keranjang Hijau</span>
          </div>
          <p style={{ fontSize: 13, marginBottom: 20 }}>Marketplace B2B untuk bisnis F&amp;B Indonesia</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 24, fontSize: 13, marginBottom: 24 }}>
            {['Tentang', 'Bantuan', 'Kebijakan Privasi', 'Syarat & Ketentuan'].map(label => (
              <Link key={label} href="#" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>{label}</Link>
            ))}
          </div>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
            © 2026 Keranjang Hijau. Dibuat dengan ❤️ untuk UMKM F&amp;B Indonesia.
          </p>
        </div>
      </footer>
    </main>
  )
}
