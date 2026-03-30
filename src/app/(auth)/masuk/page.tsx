'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, ArrowRight, ChevronLeft } from 'lucide-react'

type Step = 'phone' | 'otp'

export default function MasukPage() {
  const [step, setStep] = useState<Step>('phone')
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!phone || phone.length < 9) {
      setError('Masukkan nomor HP yang valid')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/auth/otp/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      })
      if (!res.ok) throw new Error('Gagal kirim OTP')
      setStep('otp')
    } catch {
      setError('Gagal mengirim OTP. Coba lagi ya?')
    } finally {
      setLoading(false)
    }
  }

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (otp.length !== 6) {
      setError('Kode OTP harus 6 digit')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/auth/otp/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, otp }),
      })
      if (!res.ok) throw new Error('OTP salah')
      window.location.href = '/beranda'
    } catch {
      setError('Kode OTP salah atau sudah kedaluwarsa.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col">
      {/* Header */}
      <div className="p-4 flex items-center gap-3">
        <Link href="/" className="p-2 -ml-2 text-gray-500 hover:text-brand-dark">
          <ChevronLeft size={24} />
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-brand-green rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs">KH</span>
          </div>
          <span className="font-bold text-brand-dark">Keranjang Hijau</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center px-6 pb-12 max-w-sm mx-auto w-full">
        {step === 'phone' ? (
          <>
            <div className="mb-8">
              <div className="w-14 h-14 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-4">
                <Phone className="text-brand-green" size={28} />
              </div>
              <h1 className="text-2xl font-extrabold text-brand-dark mb-2">Masuk ke akun kamu</h1>
              <p className="text-gray-500">Masukkan nomor HP untuk menerima kode OTP</p>
            </div>

            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                  Nomor HP
                </label>
                <div className="flex items-center border-2 border-gray-200 rounded-xl bg-white focus-within:border-brand-green transition-colors">
                  <span className="px-3 text-gray-500 font-medium text-sm border-r border-gray-200 py-3.5">
                    +62
                  </span>
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

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-green text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-green-700 transition-colors disabled:opacity-60"
              >
                {loading ? 'Mengirim...' : (
                  <>Kirim Kode OTP <ArrowRight size={18} /></>
                )}
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              Belum punya akun?{' '}
              <Link href="/daftar" className="text-brand-green font-semibold hover:underline">
                Daftar Gratis
              </Link>
            </p>
          </>
        ) : (
          <>
            <div className="mb-8">
              <button
                onClick={() => setStep('phone')}
                className="flex items-center gap-1 text-gray-500 text-sm mb-4 hover:text-brand-dark"
              >
                <ChevronLeft size={16} /> Ganti nomor
              </button>
              <h1 className="text-2xl font-extrabold text-brand-dark mb-2">Masukkan kode OTP</h1>
              <p className="text-gray-500 text-sm">
                Kode 6 digit dikirim ke{' '}
                <span className="font-semibold text-brand-dark">+62{phone}</span>
              </p>
            </div>

            <form onSubmit={handleVerifyOtp} className="space-y-4">
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

              <button
                type="submit"
                disabled={loading || otp.length !== 6}
                className="w-full bg-brand-green text-white font-bold py-3.5 rounded-xl hover:bg-green-700 transition-colors disabled:opacity-60"
              >
                {loading ? 'Memverifikasi...' : 'Masuk'}
              </button>

              <button
                type="button"
                className="w-full text-brand-green font-semibold text-sm py-2 hover:underline"
                onClick={handleSendOtp}
              >
                Kirim ulang OTP
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
