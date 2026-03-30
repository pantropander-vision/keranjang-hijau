'use client'

import Link from 'next/link'
import { Search, Bell, MapPin, Star, Zap } from 'lucide-react'
import BottomNav from '@/components/layout/BottomNav'

const FEATURED_CATEGORIES = [
  { icon: '🥩', label: 'Bahan Baku', href: '/cari/bahan-baku' },
  { icon: '📦', label: 'Kemasan', href: '/cari/kemasan' },
  { icon: '📸', label: 'Foto Makanan', href: '/cari/fotografi' },
  { icon: '🎨', label: 'Desain', href: '/cari/desain' },
  { icon: '📱', label: 'Sosmed', href: '/cari/marketing' },
  { icon: '🍶', label: 'Minuman', href: '/cari/minuman' },
  { icon: '🔪', label: 'Peralatan', href: '/cari/peralatan' },
  { icon: '📋', label: 'Konsultasi', href: '/cari/konsultasi' },
]

// Mock listing cards for skeleton/demo
const MOCK_LISTINGS = [
  {
    id: '1',
    title: 'Foto Produk Makanan — Reels & Feed Instagram',
    seller: 'Studio Rasa Visual',
    city: 'Jakarta Selatan',
    rating: 4.9,
    reviews: 87,
    price: 'Rp 1.500.000',
    image: '📸',
    verified: true,
    urgent: false,
  },
  {
    id: '2',
    title: 'Supplier Ayam Broiler — Minimal 50kg/order',
    seller: 'PT Sumber Protein',
    city: 'Tangerang',
    rating: 4.8,
    reviews: 234,
    price: 'Rp 38.000/kg',
    image: '🐔',
    verified: true,
    urgent: true,
  },
  {
    id: '3',
    title: 'Desain Logo & Branding Kafe / Resto',
    seller: 'Kreatif Studio ID',
    city: 'Bandung',
    rating: 5.0,
    reviews: 42,
    price: 'Rp 2.500.000',
    image: '🎨',
    verified: true,
    urgent: false,
  },
  {
    id: '4',
    title: 'Kemasan Box Makanan Custom Print',
    seller: 'Kemasan Indo',
    city: 'Surabaya',
    rating: 4.7,
    reviews: 156,
    price: 'Rp 850/pcs',
    image: '📦',
    verified: false,
    urgent: false,
  },
]

export default function BerandaPage() {
  return (
    <div className="min-h-screen bg-brand-gray pb-24">
      {/* Top Bar */}
      <div className="bg-brand-green px-4 pt-12 pb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-green-200 text-sm">Selamat datang 👋</p>
            <h1 className="text-white font-bold text-xl">Hai, Pantro!</h1>
            <div className="flex items-center gap-1 mt-0.5">
              <MapPin size={12} className="text-green-200" />
              <span className="text-green-200 text-xs">Jakarta</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <button className="relative w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bell size={20} className="text-white" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-orange rounded-full" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <Link
          href="/cari"
          className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm"
        >
          <Search size={18} className="text-gray-400" />
          <span className="text-gray-400 text-sm">Cari supplier, jasa, atau produk...</span>
        </Link>
      </div>

      {/* Categories */}
      <div className="bg-white px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-brand-dark text-sm">Kategori</h2>
          <Link href="/cari" className="text-brand-green text-xs font-semibold">Lihat semua</Link>
        </div>
        <div className="scroll-x flex gap-3">
          {FEATURED_CATEGORIES.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="flex-shrink-0 flex flex-col items-center gap-1 w-16"
            >
              <div className="w-14 h-14 bg-brand-gray rounded-xl flex items-center justify-center text-2xl">
                {cat.icon}
              </div>
              <span className="text-xs text-gray-600 text-center leading-tight font-medium">{cat.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Listings */}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-brand-dark">Rekomendasi Untukmu</h2>
          <Link href="/cari" className="text-brand-green text-xs font-semibold">Lihat semua</Link>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {MOCK_LISTINGS.map((listing) => (
            <Link
              key={listing.id}
              href={`/produk/${listing.id}`}
              className="card overflow-hidden hover:shadow-card-hover transition-shadow"
            >
              {/* Image placeholder */}
              <div className="bg-brand-gray aspect-square flex items-center justify-center text-4xl">
                {listing.image}
              </div>

              <div className="p-3">
                {/* Badges */}
                <div className="flex items-center gap-1 mb-1 flex-wrap">
                  {listing.verified && (
                    <span className="badge-verified text-[10px] px-1.5 py-0.5">✓ Verified</span>
                  )}
                  {listing.urgent && (
                    <span className="flex items-center gap-0.5 bg-orange-50 text-brand-orange rounded-full px-1.5 py-0.5 text-[10px] font-semibold">
                      <Zap size={10} /> Cepat
                    </span>
                  )}
                </div>

                <h3 className="text-xs font-semibold text-brand-dark leading-tight line-clamp-2 mb-1">
                  {listing.title}
                </h3>

                <p className="text-[11px] text-gray-500 mb-1">{listing.seller}</p>

                <div className="flex items-center gap-1 mb-2">
                  <Star size={11} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-[11px] font-semibold text-brand-dark">{listing.rating}</span>
                  <span className="text-[11px] text-gray-400">({listing.reviews})</span>
                </div>

                <p className="price text-sm">{listing.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}
