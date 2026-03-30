'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Search, MessageCircle, ShoppingBag, User } from 'lucide-react'
import { clsx } from 'clsx'

const NAV_ITEMS = [
  { href: '/beranda', icon: Home, label: 'Beranda' },
  { href: '/cari', icon: Search, label: 'Cari' },
  { href: '/pesan', icon: MessageCircle, label: 'Pesan' },
  { href: '/pesanan', icon: ShoppingBag, label: 'Pesanan' },
  { href: '/profil', icon: User, label: 'Profil' },
]

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50 bottom-nav">
      <div className="flex items-center justify-around px-2 pt-2 pb-1 max-w-lg mx-auto">
        {NAV_ITEMS.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href || pathname.startsWith(href + '/')
          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                'flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-colors min-w-[56px]',
                isActive
                  ? 'text-brand-green'
                  : 'text-gray-400 hover:text-gray-600'
              )}
            >
              <Icon
                size={22}
                strokeWidth={isActive ? 2.5 : 2}
                className={isActive ? 'text-brand-green' : ''}
              />
              <span className={clsx('text-xs font-medium', isActive ? 'text-brand-green' : 'text-gray-400')}>
                {label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
