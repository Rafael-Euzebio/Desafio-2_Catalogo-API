type EmptyStateProps = {
  isDark?: boolean
}

export default function EmptyState({ isDark = false }: EmptyStateProps) {
  return (
    <div
      className={
        isDark
          ? 'rounded-3xl border border-slate-800 bg-slate-900 p-10 text-center shadow-sm'
          : 'rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm'
      }
    >
      <p className={isDark ? 'text-sm font-medium uppercase tracking-wide text-slate-500' : 'text-sm font-medium uppercase tracking-wide text-slate-400'}>
        Nenhum resultado
      </p>
      <h3 className="mt-2 text-2xl font-bold">
        Nenhum produto encontrado
      </h3>
      <p className={isDark ? 'mt-2 text-slate-400' : 'mt-2 text-slate-500'}>
        Tente alterar a busca, categoria ou ordenação.
      </p>
    </div>
  )
}