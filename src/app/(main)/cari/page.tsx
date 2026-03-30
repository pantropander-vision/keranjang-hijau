'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, SlidersHorizontal, Star, Zap, X } from 'lucide-react'
import BottomNav from '@/components/layout/BottomNav'
import { formatRupiah } from '@/lib/constants'

const CATEGORIES = [
  { id: 'all', label: 'Semua', icon: '✨' },
  { id: 'bahan-baku', label: 'Bahan Baku', icon: '🥩' },
  { id: 'kemasan', label: 'Kemasan', icon: '📦' },
  { id: 'fotografi', label: 'Foto', icon: '📸' },
  { id: 'desain', label: 'Desain', icon: '🎨' },
  { id: 'marketing', label: 'Marketing', icon: '📱' },
  { id: 'minuman', label: 'Minuman', icon: '🍶' },
  { id: 'peralatan', label: 'Peralatan', icon: '🔪' },
  { id: 'konsultasi', label: 'Konsultasi', icon: '📋' },
]

const MOCK_RESULTS = [
  { id: '1', title: 'Foto Produk Makanan — Reels & Feed', seller: 'Studio Rasa Visual', city: 'Jakarta Selatan', rating: 4.9, reviews: 87, price: 1500000, unit: 'paket', image: '📸', verified: true, urgent: false, type: 'service' },
  { id: '2', title: 'Supplier Ayam Broiler Segar', seller: 'PT Sumber Protein', city: 'Tangerang', rating: 4.8, reviews: 234, price: 38000, unit: 'kg', image: '🐔', verified: true, urgent: true, type: 'product' },
  { id: '3', title: 'Desain Logo & Brand Identity F&B', seller: 'Kreatif Studio ID', city: 'Bandung', rating: 5.0, reviews: 42, price: 2500000, unit: 'paket', image: '🎨', verified: true, urgent: false, type: 'service' },
  { id: '4', title: 'Kemasan Box Makanan Custom Print', seller: 'Kemasan Indo', city: 'Surabaya', rating: 4.7, reviews: 156, price: 850, unit: 'pcs', image: '📦', verified: false, urgent: false, type: 'product' },
  { id: '5', title: 'Manajemen Instagram & TikTok F&B', seller: 'Kreasosmed Agency', city: 'Jakarta Barat', rating: 4.6, reviews: 61, price: 3500000, unit: 'bulan', image: '📱', verified: true, urgent: false, type: 'service' },
  { id: '6', title: 'Tepung Terigu Segitiga Biru Wholesale', seller: 'Grosir Bahan Baku', city: 'Jakarta Timur', rating: 4.9, reviews: 312, price: 185000, unit: '25kg', image: '🌾', verified: true, urgent: false, type: 'product' },
]

export default function CariPage() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [showFilters, setShowFilters] = useState(false)

  const filtered = MOCK_RESULTS.filter(item => {
    const matchesQuery = !query || item.title.toLowerCase().includes(query.toLowerCase()) || item.seller.toLowerCase().includes(query.toLowerCase())
    return matchesQuery
  })

  return (
    <div className="min-h-screen bg-brand-gray pb-24">
      {/* Search Header */}
      <div className="bg-white px-4 pt-12 pb-3 sticky top-0 z-40 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex-1 flex items-center gap-2 bg-brand-gray rounded-xl px-3 py-2.5 border-2 border-transparent focus-within:border-brand-green transition-colors">
            <Search size={18} className="text-gray-400 flex-shrink-0" />
            <input
              type="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Cari supplier, jasa, atau produk..."
              className="flex-1 bg-transparent outline-none text-sm text-brand-dark placeholder-gray-400"
              autoFocus
            />
            {query && (
              <button onClick={() => setQuery('')}>
                <X size={16} className="text-gray-400" />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border-2 transition-colors ${
              showFilters ? 'bg-brand-green border-brand-green text-white' : 'bg-white border-gray-200 text-gray-500'
            }`}
          >
            <SlidersHorizontal size={18} />
          </button>
        </div>

        {/* Category pills */}
        <div className="scroll-x flex gap-2 pb-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-brand-green text-white'
                  : 'bg-brand-gray text-gray-600 hover:bg-gray-200'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="px-4 py-4">
        <p className="text-sm text-gray-500 mb-3">
          {filtered.length} hasil ditemukan{query ? ` untuk "${query}"` : ''}
        </p>

        <div className="space-y-3">
          {filtered.map((item) => (
            <Link
              key={item.id}
              href={`/produk/${item.id}`}
              className="card flex gap-3 p-3 hover:shadow-card-hover transition-shadow"
            >
              {/* Thumbnail */}
              <div className="w-20 h-20 bg-brand-gray rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                {item.image}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 mb-1 flex-wrap">
                  {item.verified && (
                    <span className="badge-verified text-[10px]">✓ Verified</span>
                  )}
                  {item.urgent && (
                    <span className="flex items-center gap-0.5 bg-orange-50 text-brand-orange rounded-full px-1.5 py-0.5 text-[10px] font-semibold">
                      <Zap size={9} /> Butuh Cepat
                    </span>
                  )}
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                    item.type === 'service' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-brand-green'
                  }`}>
                    {item.type === 'service' ? 'Jasa' : 'Produk'}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-brand-dark leading-tight line-clamp-2">{item.title}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{item.seller} · {item.city}</p>

                <div className="flex items-center justify-between mt-1.5">
                  <div className="flex items-center gap-1">
                    <Star size={11} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-xs font-semibold text-brand-dark">{item.rating}</span>
                    <span className="text-xs text-gray-400">({item.reviews})</span>
                  </div>
                  <p className="price text-sm">
                    Rp {item.price.toLocaleString('id-ID')}
                    <span className="text-gray-400 font-normal text-xs">/{item.unit}</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="font-bold text-brand-dark mb-2">Tidak ada hasil</h3>
            <p className="text-gray-500 text-sm">
              Coba kata kunci lain atau ubah filter pencarian kamu
            </p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  )
}
