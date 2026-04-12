type LoadingStateProps = {
  isDark?: boolean
}

export default function LoadingState({ isDark = false }: LoadingStateProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className={
            isDark
              ? 'overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-sm'
              : 'overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm'
          }
        >
          <div className={isDark ? 'h-64 animate-pulse bg-slate-800' : 'h-64 animate-pulse bg-slate-200'} />
          <div className="space-y-3 p-5">
            <div className={isDark ? 'h-4 animate-pulse rounded bg-slate-800' : 'h-4 animate-pulse rounded bg-slate-200'} />
            <div className={isDark ? 'h-4 w-3/4 animate-pulse rounded bg-slate-800' : 'h-4 w-3/4 animate-pulse rounded bg-slate-200'} />
            <div className={isDark ? 'h-4 w-1/2 animate-pulse rounded bg-slate-800' : 'h-4 w-1/2 animate-pulse rounded bg-slate-200'} />
            <div className={isDark ? 'h-10 w-32 animate-pulse rounded bg-slate-800' : 'h-10 w-32 animate-pulse rounded bg-slate-200'} />
          </div>
        </div>
      ))}
    </div>
  )
}