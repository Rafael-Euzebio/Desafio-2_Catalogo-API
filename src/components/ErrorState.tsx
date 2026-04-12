type ErrorStateProps = {
  message: string
  isDark?: boolean
}

export default function ErrorState({ message, isDark = false }: ErrorStateProps) {
  return (
    <div
      className={
        isDark
          ? 'rounded-3xl border border-red-900 bg-red-950/40 p-8 text-center shadow-sm'
          : 'rounded-3xl border border-red-200 bg-red-50 p-8 text-center shadow-sm'
      }
    >
      <p className="text-sm font-medium uppercase tracking-wide text-red-500">
        Ocorreu um problema
      </p>
      <h3 className="mt-2 text-xl font-bold text-red-600">Falha ao carregar</h3>
      <p className="mt-2 text-red-500">{message}</p>
    </div>
  )
}