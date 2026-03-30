// Layout for authenticated main app routes
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-lg mx-auto min-h-screen bg-brand-gray">
      {children}
    </div>
  )
}
