import Link from 'next/link'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-brand-cream">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">KH</span>
            </div>
            <span className="font-bold text-brand-dark text-lg">Keranjang Hijau</span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/masuk"
              className="text-brand-green font-semibold text-sm hover:underline"
            >
              Masuk
            </Link>
            <Link
              href="/daftar"
              className="bg-brand-orange text-white font-semibold text-sm px-4 py-2 rounded-button hover:bg-brand-orange-light transition-colors"
            >
              Daftar Gratis
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-brand-green text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            Semua yang bisnis F&amp;B kamu butuhkan
          </h1>
          <p className="text-lg text-green-100 mb-8">
            Dari supplier sampai jasa — dalam satu tempat terpercaya.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/daftar"
              className="bg-brand-orange text-white font-bold py-3 px-8 rounded-xl text-lg hover:bg-orange-500 transition-colors"
            >
              Mulai Sekarang
            </Link>
            <Link
              href="/cari"
              className="bg-white/20 text-white font-semibold py-3 px-8 rounded-xl text-lg hover:bg-white/30 transition-colors border border-white/30"
            >
              Jelajahi Marketplace
            </Link>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-brand-dark mb-8">
            Kenapa Keranjang Hijau?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🔍',
                title: 'Temukan dengan Mudah',
                desc: 'Supplier dan jasa F&B terpercaya di kotamu, lengkap dengan portofolio dan ulasan nyata.',
              },
              {
                icon: '🤝',
                title: 'Transaksi Aman',
                desc: 'Pembayaran via escrow — uang aman sampai kamu puas dengan pesanan.',
              },
              {
                icon: '⚡',
                title: 'Kamu Bisa Jual & Beli',
                desc: 'Satu akun untuk semua. Beli bahan baku sambil tawarkan jasamu ke sesama pelaku F&B.',
              },
            ].map((item) => (
              <div key={item.title} className="card p-6 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-brand-dark mb-6">Kategori Populer</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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
              <Link
                key={cat.label}
                href="/cari"
                className="card p-4 flex flex-col items-center text-center hover:shadow-card-hover transition-shadow"
              >
                <span className="text-3xl mb-2">{cat.icon}</span>
                <span className="font-semibold text-brand-dark text-sm">{cat.label}</span>
                <span className="text-xs text-gray-500">{cat.sub}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/cari" className="text-brand-green font-semibold text-sm hover:underline">
              Lihat semua kategori →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-brand-dark mb-3">
            Siap bergabung?
          </h2>
          <p className="text-gray-600 mb-6">
            Gratis selamanya untuk 10 listing pertama. Mulai dalam 2 menit.
          </p>
          <Link
            href="/daftar"
            className="inline-block bg-brand-green text-white font-bold py-3 px-10 rounded-xl text-lg hover:bg-green-700 transition-colors"
          >
            Daftar Sekarang — Gratis
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-6 h-6 bg-brand-green rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">KH</span>
            </div>
            <span className="font-bold">Keranjang Hijau</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Marketplace B2B untuk bisnis F&amp;B Indonesia
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <Link href="/tentang" className="hover:text-white transition-colors">Tentang</Link>
            <Link href="/bantuan" className="hover:text-white transition-colors">Bantuan</Link>
            <Link href="/pengaturan" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
          </div>
          <p className="text-gray-600 text-xs mt-6">
            © 2026 Keranjang Hijau. Dibuat dengan ❤️ untuk UMKM F&amp;B Indonesia.
          </p>
        </div>
      </footer>
    </main>
  )
}
