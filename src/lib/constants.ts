// ─────────────────────────────────────────
// Keranjang Hijau — Brand & App Constants
// ─────────────────────────────────────────

export const BRAND = {
  name: 'Keranjang Hijau',
  tagline: 'Semua yang bisnis F&B kamu butuhkan — dalam satu tempat terpercaya.',
  url: 'https://keranjanghijau.zoeclouds.com',
  colors: {
    primary: '#2D7A3A',
    secondary: '#FFF8F0',
    accent: '#E8722A',
    dark: '#1A1A1A',
    lightGray: '#F5F5F5',
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
  },
}

// Bahasa Indonesia UI strings
export const UI = {
  search: 'Cari',
  categories: 'Kategori',
  services: 'Jasa',
  products: 'Produk',
  suppliers: 'Supplier',
  cart: 'Keranjang',
  order: 'Pesanan',
  project: 'Proyek',
  chat: 'Pesan',
  profile: 'Profil',
  dashboard: 'Dasbor',
  reviews: 'Ulasan',
  verified: 'Terverifikasi',
  settings: 'Pengaturan',
  help: 'Bantuan',
  login: 'Masuk',
  register: 'Daftar',
  logout: 'Keluar',
  payment: 'Pembayaran',
  earnings: 'Pendapatan',
  favorites: 'Favorit',
  boost: 'Promosikan',
  submit: 'Kirim',
  cancel: 'Batal',
  confirm: 'Konfirmasi',
  dispute: 'Sengketa',
  negotiate: 'Negosiasi',
  buyer: 'Pembeli',
  seller: 'Penjual',
  loading: 'Memuat...',
  save: 'Simpan',
  edit: 'Edit',
  delete: 'Hapus',
  back: 'Kembali',
  next: 'Lanjut',
  done: 'Selesai',
}

// Commission rates
export const COMMISSION = {
  services: {
    gratis: 0.10,
    pro: 0.08,
    bisnis: 0.06,
  },
  products: {
    gratis: 0.05,
    pro: 0.03,
    bisnis: 0.02,
  },
  freeTransactions: 3, // First N transactions are commission-free
}

// Subscription pricing (IDR)
export const SUBSCRIPTION = {
  gratis: { price: 0, maxListings: 10 },
  pro: { price: 99000, maxListings: Infinity },
  bisnis: { price: 249000, maxListings: Infinity },
}

// Boost pricing (IDR/day)
export const BOOST_PRICING = {
  min: 15000,
  max: 50000,
}

// Verification levels
export const VERIFICATION_LEVELS = {
  1: { label: 'Nomor HP Terverifikasi', color: 'gray' },
  2: { label: 'KTP Terverifikasi', color: 'blue' },
  3: { label: 'Bisnis Terverifikasi', color: 'green' },
  4: { label: 'Diaudit Platform', color: 'gold' },
}

// Indonesian cities (top 20 for initial launch)
export const INDONESIAN_CITIES = [
  'Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Bekasi',
  'Tangerang', 'Depok', 'Semarang', 'Palembang', 'Makassar',
  'Bogor', 'Batam', 'Pekanbaru', 'Bandar Lampung', 'Malang',
  'Padang', 'Denpasar', 'Samarinda', 'Tasikmalaya', 'Pontianak',
]

// Business types in Bahasa
export const BUSINESS_TYPE_LABELS: Record<string, string> = {
  restaurant: 'Restoran',
  cafe: 'Kafe',
  catering: 'Katering',
  cloud_kitchen: 'Cloud Kitchen',
  food_producer: 'Produsen Makanan',
  bakery: 'Bakeri',
  food_truck: 'Food Truck',
  supplier: 'Supplier',
  service_provider: 'Penyedia Jasa',
  other: 'Lainnya',
}

// Format IDR currency
export function formatRupiah(amount: number): string {
  return 'Rp ' + amount.toLocaleString('id-ID')
}

// Format date DD/MM/YYYY
export function formatDate(date: string | Date): string {
  const d = new Date(date)
  return d.toLocaleDateString('id-ID', {
    day: '2-digit', month: '2-digit', year: 'numeric'
  })
}

// Format Indonesian phone number
export function formatPhone(phone: string): string {
  // Normalize to +62 format
  const clean = phone.replace(/\D/g, '')
  if (clean.startsWith('0')) return '+62' + clean.slice(1)
  if (clean.startsWith('62')) return '+' + clean
  return '+62' + clean
}
