'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, Star, MapPin, MessageCircle, ShoppingCart, Share2, Heart, Zap, Check, Shield } from 'lucide-react'
import BottomNav from '@/components/layout/BottomNav'

// Mock data — will be replaced with real API call
const MOCK_LISTING = {
  id: '1',
  title: 'Foto Produk Makanan — Reels & Feed Instagram',
  seller: {
    name: 'Studio Rasa Visual',
    avatar: '📸',
    city: 'Jakarta Selatan',
    verificationLevel: 3,
    rating: 4.9,
    reviews: 87,
    repeatClientRate: 72,
    responseTime: '< 1 jam',
    totalTransactions: 134,
  },
  type: 'service',
  description: 'Kami spesialis foto dan video konten makanan untuk bisnis F&B. Hasil profesional, nuansa hangat dan autentik yang bikin followers langsung lapar!\n\nCocok untuk:\n• Menu baru / rebranding\n• Konten Instagram & TikTok mingguan\n• GoFood / GrabFood thumbnail\n• Campaign promo spesial',
  images: ['📸', '🍜', '☕', '🍰'],
  packages: [
    { name: 'Basic', price: 800000, description: '10 foto produk, 1 hari shoot, 1 lokasi, edit standar', deliverables: ['10 foto JPG HD', 'Edit warna & exposure', 'Livetime: 3 hari kerja'] },
    { name: 'Pro', price: 1500000, description: '25 foto + 3 video Reels, 1 hari shoot, 1 lokasi, edit premium', deliverables: ['25 foto JPG HD', '3 video Reels 15–30 detik', 'Edit sinematik + musik', 'Livetime: 5 hari kerja'] },
    { name: 'Bisnis', price: 3000000, description: 'Full day shoot, 50 foto + 5 video + behind the scenes', deliverables: ['50 foto JPG HD', '5 video Reels + 1 BTS', 'Caption siap upload', 'Revisi 2x', 'Livetime: 7 hari kerja'] },
  ],
  tags: ['foto makanan', 'reels', 'instagram', 'tiktok', 'food styling'],
  rating: 4.9,
  reviewCount: 87,
  reviewList: [
    { id: '1', name: 'Warung Bu Dewi', rating: 5, text: 'Hasilnya keren banget! Customer langsung DM mau pesan setelah liat foto baru. Worth it banget!', date: '15/03/2026', photos: ['🍜'] },
    { id: '2', name: 'Kopi Kenangan Lokal', rating: 5, text: 'Profesional, on time, dan hasilnya melebihi ekspektasi. Sudah langganan 6 bulan.', date: '02/03/2026', photos: [] },
    { id: '3', name: 'Catering Berkah', rating: 4, text: 'Bagus, cuma waktu revisi agak lama. Overall puas sih.', date: '22/02/2026', photos: ['🍱'] },
  ],
}

export default function ProdukDetailPage() {
  const [selectedPackage, setSelectedPackage] = useState(1)
  const [saved, setSaved] = useState(false)
  const listing = MOCK_LISTING

  return (
    <div className="min-h-screen bg-brand-gray pb-32">
      {/* Top bar */}
      <div className="bg-white px-4 pt-12 pb-3 flex items-center justify-between sticky top-0 z-40 shadow-sm">
        <Link href="/cari" className="p-2 -ml-2 text-gray-500">
          <ChevronLeft size={24} />
        </Link>
        <div className="flex items-center gap-2">
          <button onClick={() => setSaved(!saved)} className="p-2 text-gray-500">
            <Heart size={22} className={saved ? 'fill-red-500 text-red-500' : ''} />
          </button>
          <button className="p-2 text-gray-500">
            <Share2 size={22} />
          </button>
        </div>
      </div>

      {/* Image carousel */}
      <div className="scroll-x flex gap-2 px-4 py-3 bg-white">
        {listing.images.map((img, i) => (
          <div key={i} className={`flex-shrink-0 rounded-xl flex items-center justify-center text-4xl bg-brand-gray ${i === 0 ? 'w-64 h-48' : 'w-28 h-28'}`}>
            {img}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="px-4 pt-4 space-y-4">

        {/* Title & seller */}
        <div className="card p-4">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="badge-verified">✓ Terverifikasi</span>
            <span className="bg-blue-50 text-blue-600 text-[11px] px-2 py-0.5 rounded-full font-medium">Jasa</span>
            <span className="flex items-center gap-0.5 bg-purple-50 text-purple-600 text-[11px] px-2 py-0.5 rounded-full font-medium">
              ⭐ Top Rated
            </span>
          </div>
          <h1 className="text-lg font-bold text-brand-dark leading-snug mb-3">{listing.title}</h1>

          <Link href={`/profil/studio-rasa-visual`} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-gray rounded-full flex items-center justify-center text-xl">
              {listing.seller.avatar}
            </div>
            <div>
              <p className="font-semibold text-brand-dark text-sm">{listing.seller.name}</p>
              <div className="flex items-center gap-1">
                <MapPin size={11} className="text-gray-400" />
                <span className="text-xs text-gray-500">{listing.seller.city}</span>
              </div>
            </div>
            <ChevronLeft size={16} className="text-gray-400 ml-auto rotate-180" />
          </Link>
        </div>

        {/* Stats */}
        <div className="card p-4">
          <div className="grid grid-cols-4 gap-2 text-center">
            {[
              { label: 'Rating', value: listing.seller.rating, icon: '⭐' },
              { label: 'Ulasan', value: listing.seller.reviews, icon: '💬' },
              { label: 'Repeat', value: `${listing.seller.repeatClientRate}%`, icon: '🔄' },
              { label: 'Respons', value: listing.seller.responseTime, icon: '⚡' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-lg font-bold text-brand-dark">{stat.value}</p>
                <p className="text-[10px] text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Packages */}
        <div className="card p-4">
          <h2 className="font-bold text-brand-dark mb-3">Pilih Paket</h2>
          <div className="space-y-3">
            {listing.packages.map((pkg, i) => (
              <button
                key={i}
                onClick={() => setSelectedPackage(i)}
                className={`w-full text-left p-3 rounded-xl border-2 transition-all ${
                  selectedPackage === i
                    ? 'border-brand-green bg-green-50'
                    : 'border-gray-100 bg-white hover:border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-brand-dark text-sm">Paket {pkg.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="price text-sm">Rp {pkg.price.toLocaleString('id-ID')}</span>
                    {selectedPackage === i && (
                      <div className="w-5 h-5 bg-brand-green rounded-full flex items-center justify-center">
                        <Check size={12} className="text-white" />
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-2">{pkg.description}</p>
                <div className="space-y-0.5">
                  {pkg.deliverables.map((d, j) => (
                    <div key={j} className="flex items-center gap-1.5">
                      <div className="w-3.5 h-3.5 bg-brand-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check size={8} className="text-brand-green" />
                      </div>
                      <span className="text-xs text-gray-600">{d}</span>
                    </div>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="card p-4">
          <h2 className="font-bold text-brand-dark mb-2">Deskripsi</h2>
          <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{listing.description}</p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {listing.tags.map(tag => (
              <span key={tag} className="text-xs bg-brand-gray text-gray-600 px-2 py-1 rounded-full">#{tag}</span>
            ))}
          </div>
        </div>

        {/* Escrow trust */}
        <div className="flex items-center gap-3 bg-green-50 border border-green-100 rounded-xl p-3">
          <Shield size={20} className="text-brand-green flex-shrink-0" />
          <div>
            <p className="text-xs font-semibold text-brand-green">Pembayaran Aman dengan Escrow</p>
            <p className="text-xs text-gray-600">Uang kamu aman sampai pekerjaan selesai dan kamu puas</p>
          </div>
        </div>

        {/* Reviews */}
        <div className="card p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-brand-dark">Ulasan</h2>
            <div className="flex items-center gap-1">
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              <span className="font-bold text-brand-dark text-sm">{listing.rating}</span>
              <span className="text-gray-400 text-sm">({listing.reviewCount})</span>
            </div>
          </div>
          <div className="space-y-4">
            {listing.reviewList.map((review) => (
              <div key={review.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-sm text-brand-dark">{review.name}</span>
                  <span className="text-xs text-gray-400">{review.date}</span>
                </div>
                <div className="flex items-center gap-0.5 mb-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} className={i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'} />
                  ))}
                </div>
                <p className="text-sm text-gray-600">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-3 max-w-lg mx-auto" style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}>
        <div className="flex items-center gap-3 mb-3">
          <div>
            <p className="text-xs text-gray-500">Paket {listing.packages[selectedPackage].name}</p>
            <p className="price text-lg">Rp {listing.packages[selectedPackage].price.toLocaleString('id-ID')}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Link
            href="/pesan/new"
            className="flex-1 flex items-center justify-center gap-2 border-2 border-brand-green text-brand-green font-semibold py-3 rounded-xl text-sm hover:bg-green-50 transition-colors"
          >
            <MessageCircle size={18} /> Chat Dulu
          </Link>
          <button className="flex-2 flex-grow flex items-center justify-center gap-2 bg-brand-orange text-white font-bold py-3 px-6 rounded-xl text-sm hover:bg-orange-500 transition-colors">
            <ShoppingCart size={18} /> Pesan Sekarang
          </button>
        </div>
      </div>
    </div>
  )
}
