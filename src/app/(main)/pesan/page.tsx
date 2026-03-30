'use client'

import Link from 'next/link'
import { Search, MessageCircle } from 'lucide-react'
import BottomNav from '@/components/layout/BottomNav'

const MOCK_CONVERSATIONS = [
  { id: '1', name: 'Studio Rasa Visual', avatar: '📸', lastMessage: 'Oke siap, kami kirim proposal besok ya 🙏', time: '10:32', unread: 2, online: true },
  { id: '2', name: 'PT Sumber Protein', avatar: '🐔', lastMessage: 'Stok ayam sudah ready, mau order berapa kg?', time: '09:15', unread: 0, online: false },
  { id: '3', name: 'Kreatif Studio ID', avatar: '🎨', lastMessage: 'Revisi logo sudah kami kirim, cek email ya', time: 'Kemarin', unread: 0, online: true },
  { id: '4', name: 'Kemasan Indo', avatar: '📦', lastMessage: 'Terima kasih sudah order! Estimasi 3 hari kerja', time: 'Kemarin', unread: 0, online: false },
]

export default function PesanPage() {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <div className="px-4 pt-12 pb-3 sticky top-0 bg-white z-40 border-b border-gray-100">
        <h1 className="text-xl font-bold text-brand-dark mb-3">Pesan</h1>
        <div className="flex items-center gap-2 bg-brand-gray rounded-xl px-3 py-2.5">
          <Search size={16} className="text-gray-400" />
          <input
            type="search"
            placeholder="Cari percakapan..."
            className="flex-1 bg-transparent outline-none text-sm text-brand-dark placeholder-gray-400"
          />
        </div>
      </div>

      {/* Conversations */}
      <div className="divide-y divide-gray-50">
        {MOCK_CONVERSATIONS.map((conv) => (
          <Link
            key={conv.id}
            href={`/pesan/${conv.id}`}
            className="flex items-center gap-3 px-4 py-3.5 hover:bg-brand-gray/50 transition-colors"
          >
            {/* Avatar */}
            <div className="relative">
              <div className="w-12 h-12 bg-brand-gray rounded-full flex items-center justify-center text-2xl">
                {conv.avatar}
              </div>
              {conv.online && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-0.5">
                <span className="font-semibold text-brand-dark text-sm">{conv.name}</span>
                <span className="text-xs text-gray-400">{conv.time}</span>
              </div>
              <p className="text-sm text-gray-500 truncate">{conv.lastMessage}</p>
            </div>

            {/* Unread badge */}
            {conv.unread > 0 && (
              <div className="w-5 h-5 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">{conv.unread}</span>
              </div>
            )}
          </Link>
        ))}
      </div>

      {/* Empty state fallback */}
      {MOCK_CONVERSATIONS.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
          <MessageCircle size={48} className="text-gray-200 mb-4" />
          <h3 className="font-bold text-brand-dark mb-2">Belum ada pesan</h3>
          <p className="text-gray-500 text-sm mb-4">
            Mulai percakapan dengan menghubungi supplier atau penyedia jasa
          </p>
          <Link href="/cari" className="bg-brand-green text-white font-semibold px-6 py-2.5 rounded-xl text-sm">
            Jelajahi Marketplace
          </Link>
        </div>
      )}

      <BottomNav />
    </div>
  )
}
