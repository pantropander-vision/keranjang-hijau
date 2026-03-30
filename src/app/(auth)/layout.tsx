// Layout for auth routes (login, register)
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-sm mx-auto min-h-screen">
      {children}
    </div>
  )
}
