// Layout for seller dashboard routes
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-lg mx-auto min-h-screen bg-brand-gray">
      {children}
    </div>
  )
}
