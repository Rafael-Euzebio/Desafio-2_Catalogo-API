type ToastProps = {
  message: string
  isDark?: boolean
}

export default function Toast({ message, isDark = false }: ToastProps) {
  if (!message) return null

  return (
    <div className="pointer-events-none fixed bottom-6 left-1/2 z-[80] -translate-x-1/2 px-4">
      <div
        className={
          isDark
            ? 'rounded-2xl border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 shadow-2xl animate-toast-in'
            : 'rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-2xl animate-toast-in'
        }
      >
        {message}
      </div>
    </div>
  )
}