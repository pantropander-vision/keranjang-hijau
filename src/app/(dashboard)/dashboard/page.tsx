'use client'

import Link from 'next/link'
import { TrendingUp, Package, ShoppingBag, Star, Plus, Eye, MessageCircle, ArrowUpRight } from 'lucide-react'
import BottomNav from '@/components/layout/BottomNav'

const STATS = [
  { label: 'Pendapatan Bulan Ini', value: 'Rp 4.750.000', change: '+23%', icon: TrendingUp, color: 'text-brand-green', bg: 'bg-green-50' },
  { label: 'Pesanan Aktif', value: '7', change: '3 baru', icon: ShoppingBag, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Listing Aktif', value: '12', change: '2 diboost', icon: Package, color: 'text-brand-orange', bg: 'bg-orange-50' },
  { label: 'Rating Rata-rata', value: '4.9', change: '87 ulasan', icon: Star, color: 'text-yellow-500', bg: 'bg-yellow-50' },
]

const RECENT_ORDERS = [
  { id: 'ORD-001', buyer: 'Warung Bu Sari', item: 'Foto Produk — Paket Pro', amount: 1500000, status: 'in_progress', date: '29/03/2026' },
  { id: 'ORD-002', buyer: 'Cloud Kitchen Nusantara', item: 'Foto Produk — Paket Basic', amount: 800000, status: 'delivered', date: '28/03/2026' },
  { id: 'ORD-003', buyer: 'Kafe Santai Seminyak', item: 'Foto Produk — Paket Bisnis', amount: 3000000, status: 'pending', date: '27/03/2026' },
]

const STATUS_LABELS: Record<string, { label: string, color: string }> = {
  pending: { label: 'Menunggu', color: 'bg-yellow-100 text-yellow-700' },
  accepted: { label: 'Diterima', color: 'bg-blue-100 text-blue-700' },
  in_progress: { label: 'Dikerjakan', color: 'bg-purple-100 text-purple-700' },
  delivered: { label: 'Dikirim', color: 'bg-orange-100 text-orange-700' },
  completed: { label: 'Selesai', color: 'bg-green-100 text-green-700' },
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-brand-gray pb-24">
      {/* Header */}
      <div className="bg-brand-green px-4 pt-12 pb-6">
        <div className="flex items-center justify-between mb-1">
          <div>
            <p className="text-green-200 text-sm">Dasbor Penjual</p>
            <h1 className="text-white font-bold text-xl">Studio Rasa Visual</h1>
          </div>
          <Link
            href="/dashboard/listing/baru"
            className="flex items-center gap-1.5 bg-white/20 text-white text-sm font-semibold px-3 py-2 rounded-xl border border-white/30"
          >
            <Plus size={16} /> Listing Baru
          </Link>
        </div>
      </div>

      <div className="px-4 py-4 space-y-4">

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-3">
          {STATS.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="card p-4">
                <div className={`w-9 h-9 ${stat.bg} rounded-xl flex items-center justify-center mb-2`}>
                  <Icon size={18} className={stat.color} />
                </div>
                <p className="font-bold text-brand-dark text-base leading-tight">{stat.value}</p>
                <p className="text-[11px] text-gray-500 mt-0.5">{stat.label}</p>
                <p className="text-[11px] text-brand-green font-semibold mt-0.5">{stat.change}</p>
              </div>
            )
          })}
        </div>

        {/* Quick actions */}
        <div className="card p-4">
          <h2 className="font-bold text-brand-dark mb-3 text-sm">Aksi Cepat</h2>
          <div className="grid grid-cols-4 gap-2">
            {[
              { icon: Plus, label: 'Tambah\nListing', href: '/dashboard/listing/baru', color: 'bg-green-50 text-brand-green' },
              { icon: ShoppingBag, label: 'Pesanan\nMasuk', href: '/dashboard/pesanan', color: 'bg-blue-50 text-blue-600' },
              { icon: MessageCircle, label: 'Pesan\nBaru', href: '/pesan', color: 'bg-purple-50 text-purple-600' },
              { icon: TrendingUp, label: 'Analitik', href: '/dashboard/analitik', color: 'bg-orange-50 text-brand-orange' },
            ].map((action) => {
              const Icon = action.icon
              return (
                <Link
                  key={action.label}
                  href={action.href}
                  className="flex flex-col items-center gap-1.5"
                >
                  <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center`}>
                    <Icon size={20} />
                  </div>
                  <span className="text-[11px] text-gray-600 text-center whitespace-pre-line leading-tight">{action.label}</span>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Recent orders */}
        <div className="card p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-brand-dark text-sm">Pesanan Terbaru</h2>
            <Link href="/dashboard/pesanan" className="text-brand-green text-xs font-semibold flex items-center gap-0.5">
              Lihat semua <ArrowUpRight size={12} />
            </Link>
          </div>
          <div className="space-y-3">
            {RECENT_ORDERS.map((order) => {
              const status = STATUS_LABELS[order.status]
              return (
                <Link
                  key={order.id}
                  href={`/pesanan/${order.id}`}
                  className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs font-semibold text-brand-dark">{order.buyer}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${status.color}`}>
                        {status.label}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 truncate">{order.item}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">{order.date}</p>
                  </div>
                  <div className="text-right ml-3">
                    <p className="price text-sm">Rp {order.amount.toLocaleString('id-ID')}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Performance tips */}
        <div className="bg-brand-green/5 border border-brand-green/20 rounded-xl p-4">
          <h3 className="font-bold text-brand-dark text-sm mb-2">💡 Tips untuk kamu</h3>
          <ul className="space-y-1.5">
            {[
              'Tambahkan foto sebelum & sesudah untuk tingkatkan konversi +40%',
              'Balas pesan dalam 1 jam — tingkatkan badge "Respon Cepat"',
              'Minta ulasan dari 3 pelanggan terakhir yang belum review',
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                <span className="text-brand-green mt-0.5 flex-shrink-0">→</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

      </div>

      <BottomNav />
    </div>
  )
}
