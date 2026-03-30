'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Check } from 'lucide-react'
import { INDONESIAN_CITIES, BUSINESS_TYPE_LABELS } from '@/lib/constants'

type Step = 'phone' | 'otp' | 'profile' | 'role' | 'interests'

const ROLE_OPTIONS = [
  { value: 'buyer', label: 'Cari supplier / jasa', icon: '🔍', desc: 'Saya butuh produk atau layanan untuk bisnis F&B saya' },
  { value: 'seller', label: 'Tawarkan produk / jasa', icon: '🏪', desc: 'Saya ingin menjual ke bisnis F&B lain' },
  { value: 'both', label: 'Keduanya', icon: '⚡', desc: 'Saya mau beli sekaligus jual di platform ini' },
]

const INTEREST_CATEGORIES = [
  { id: 'bahan-baku', icon: '🥩', label: 'Bahan Baku' },
  { id: 'kemasan', icon: '📦', label: 'Kemasan' },
  { id: 'fotografi', icon: '📸', label: 'Foto Makanan' },
  { id: 'desain', icon: '🎨', label: 'Desain & Branding' },
  { id: 'marketing', icon: '📱', label: 'Digital Marketing' },
  { id: 'minuman', icon: '🍶', label: 'Minuman & Boba' },
  { id: 'peralatan', icon: '🔪', label: 'Peralatan Dapur' },
  { id: 'konsultasi', icon: '📋', label: 'Konsultasi' },
  { id: 'interior', icon: '🏠', label: 'Interior & Renovasi' },
  { id: 'staffing', icon: '👨‍🍳', label: 'Rekrutmen & SDM' },
  { id: 'bumbu', icon: '🌶️', label: 'Bumbu & Saus' },
  { id: 'frozen', icon: '❄️', label: 'Frozen Food' },
]

export default function DaftarPage() {
  const [step, setStep] = useState<Step>('phone')
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [name, setName] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [city, setCity] = useState('')
  const [role, setRole] = useState('')
  const [interests, setInterests] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const STEPS: Step[] = ['phone', 'otp', 'profile', 'role', 'interests']
  const stepIndex = STEPS.indexOf(step)
  const progress = ((stepIndex + 1) / STEPS.length) * 100

  const toggleInterest = (id: string) => {
    setInterests(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!phone || phone.length < 9) { setError('Masukkan nomor HP yang valid'); return }
    setLoading(true)
    try {
      await fetch('/api/auth/otp/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      })
      setStep('otp')
    } catch { setError('Gagal mengirim OTP. Coba lagi ya?') }
    finally { setLoading(false) }
  }

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (otp.length !== 6) { setError('Kode OTP harus 6 digit'); return }
    setLoading(true)
    try {
      const res = await fetch('/api/auth/otp/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, otp, isRegistration: true }),
      })
      if (!res.ok) throw new Error()
      setStep('profile')
    } catch { setError('Kode OTP salah atau sudah kedaluwarsa.') }
    finally { setLoading(false) }
  }

  const handleFinish = async () => {
    setLoading(true)
    try {
      await fetch('/api/users/onboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, name, businessName, businessType, city, role, interests }),
      })
      window.location.href = '/beranda'
    } catch { setError('Gagal menyimpan profil. Coba lagi.') }
    finally { setLoading(false) }
  }

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col">
      {/* Header */}
      <div className="p-4 flex items-center gap-3">
        <button
          onClick={() => stepIndex > 0 ? setStep(STEPS[stepIndex - 1]) : undefined}
          className="p-2 -ml-2 text-gray-500 hover:text-brand-dark"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-brand-green rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs">KH</span>
          </div>
          <span className="font-bold text-brand-dark">Keranjang Hijau</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-4 mb-2">
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-green rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-gray-400 mt-1">Langkah {stepIndex + 1} dari {STEPS.length}</p>
      </div>

      <div className="flex-1 px-6 pb-12 pt-4 max-w-sm mx-auto w-full">

        {/* STEP 1: Phone */}
        {step === 'phone' && (
          <form onSubmit={handleSendOtp} className="space-y-5">
            <div>
              <h1 className="text-2xl font-extrabold text-brand-dark mb-1">Masukkan nomor HP kamu</h1>
              <p className="text-gray-500 text-sm">Kami akan kirim kode verifikasi via SMS</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-1.5">Nomor HP</label>
              <div className="flex items-center border-2 border-gray-200 rounded-xl bg-white focus-within:border-brand-green transition-colors">
                <span className="px-3 text-gray-500 font-medium text-sm border-r border-gray-200 py-3.5">+62</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value.replace(/\D/g, ''))}
                  placeholder="812-3456-7890"
                  className="flex-1 px-3 py-3.5 bg-transparent outline-none text-brand-dark text-sm"
                  inputMode="numeric"
                  autoFocus
                />
              </div>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" disabled={loading}
              className="w-full bg-brand-green text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 disabled:opacity-60">
              {loading ? 'Mengirim...' : <> Kirim OTP <ChevronRight size={18} /></>}
            </button>
            <p className="text-center text-sm text-gray-500">
              Sudah punya akun?{' '}
              <Link href="/masuk" className="text-brand-green font-semibold">Masuk</Link>
            </p>
          </form>
        )}

        {/* STEP 2: OTP */}
        {step === 'otp' && (
          <form onSubmit={handleVerifyOtp} className="space-y-5">
            <div>
              <h1 className="text-2xl font-extrabold text-brand-dark mb-1">Masukkan kode OTP</h1>
              <p className="text-gray-500 text-sm">Dikirim ke <span className="font-semibold text-brand-dark">+62{phone}</span></p>
            </div>
            <input
              type="text"
              value={otp}
              onChange={e => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
              placeholder="_ _ _ _ _ _"
              className="w-full border-2 border-gray-200 rounded-xl bg-white px-4 py-4 text-center text-3xl font-bold tracking-[0.5em] outline-none focus:border-brand-green transition-colors"
              inputMode="numeric"
              autoFocus
              maxLength={6}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" disabled={loading || otp.length !== 6}
              className="w-full bg-brand-green text-white font-bold py-3.5 rounded-xl disabled:opacity-60">
              {loading ? 'Memverifikasi...' : 'Lanjut'}
            </button>
          </form>
        )}

        {/* STEP 3: Profile */}
        {step === 'profile' && (
          <div className="space-y-5">
            <div>
              <h1 className="text-2xl font-extrabold text-brand-dark mb-1">Ceritakan bisnis kamu</h1>
              <p className="text-gray-500 text-sm">Ini membantu kami menampilkan konten yang relevan</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-1.5">Nama Lengkap *</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Nama kamu"
                className="w-full border-2 border-gray-200 rounded-xl bg-white px-4 py-3.5 outline-none focus:border-brand-green transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-1.5">Nama Bisnis</label>
              <input
                type="text"
                value={businessName}
                onChange={e => setBusinessName(e.target.value)}
                placeholder="Nama warung, kafe, atau usahamu"
                className="w-full border-2 border-gray-200 rounded-xl bg-white px-4 py-3.5 outline-none focus:border-brand-green transition-colors text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-1.5">Jenis Bisnis</label>
              <select
                value={businessType}
                onChange={e => setBusinessType(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-xl bg-white px-4 py-3.5 outline-none focus:border-brand-green transition-colors text-sm"
              >
                <option value="">Pilih jenis bisnis...</option>
                {Object.entries(BUSINESS_TYPE_LABELS).map(([value, label]) => (
                  <option key={value} value={value}>{label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-brand-dark mb-1.5">Kota</label>
              <select
                value={city}
                onChange={e => setCity(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-xl bg-white px-4 py-3.5 outline-none focus:border-brand-green transition-colors text-sm"
              >
                <option value="">Pilih kota...</option>
                {INDONESIAN_CITIES.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              onClick={() => name ? setStep('role') : setError('Nama harus diisi')}
              className="w-full bg-brand-green text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2">
              Lanjut <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* STEP 4: Role */}
        {step === 'role' && (
          <div className="space-y-5">
            <div>
              <h1 className="text-2xl font-extrabold text-brand-dark mb-1">Kamu mau...</h1>
              <p className="text-gray-500 text-sm">Kamu bisa ganti ini kapan saja</p>
            </div>
            <div className="space-y-3">
              {ROLE_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setRole(opt.value)}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                    role === opt.value
                      ? 'border-brand-green bg-green-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{opt.icon}</span>
                      <div>
                        <p className="font-semibold text-brand-dark text-sm">{opt.label}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{opt.desc}</p>
                      </div>
                    </div>
                    {role === opt.value && (
                      <div className="w-5 h-5 bg-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                        <Check size={12} className="text-white" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
            <button
              onClick={() => role ? setStep('interests') : setError('Pilih salah satu dulu')}
              disabled={!role}
              className="w-full bg-brand-green text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 disabled:opacity-60">
              Lanjut <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* STEP 5: Interests */}
        {step === 'interests' && (
          <div className="space-y-5">
            <div>
              <h1 className="text-2xl font-extrabold text-brand-dark mb-1">Pilih kategori yang relevan</h1>
              <p className="text-gray-500 text-sm">Pilih 3–5 untuk feed yang lebih personal</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {INTEREST_CATEGORIES.map((cat) => {
                const selected = interests.includes(cat.id)
                return (
                  <button
                    key={cat.id}
                    onClick={() => toggleInterest(cat.id)}
                    className={`flex flex-col items-center p-3 rounded-xl border-2 transition-all ${
                      selected
                        ? 'border-brand-green bg-green-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <span className="text-2xl mb-1">{cat.icon}</span>
                    <span className="text-xs font-medium text-brand-dark text-center leading-tight">{cat.label}</span>
                    {selected && (
                      <div className="w-4 h-4 bg-brand-green rounded-full flex items-center justify-center mt-1">
                        <Check size={10} className="text-white" />
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
            <p className="text-xs text-gray-400 text-center">
              {interests.length} dipilih {interests.length < 3 && `— pilih minimal 3`}
            </p>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            <button
              onClick={handleFinish}
              disabled={loading || interests.length < 1}
              className="w-full bg-brand-orange text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 disabled:opacity-60">
              {loading ? 'Menyimpan...' : '🎉 Mulai Jelajahi Keranjang Hijau'}
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
