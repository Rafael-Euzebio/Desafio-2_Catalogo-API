import SearchBar from './SearchBar'
import SortSelect from './SortSelect'

type HeaderProps = {
  search: string
  onSearchChange: (value: string) => void
  sortBy: string
  onSortChange: (value: string) => void
  onOpenFilters: () => void
  onToggleTheme: () => void
  theme: 'light' | 'dark'
  favoritesCount: number
}

export default function Header({
  search,
  onSearchChange,
  sortBy,
  onSortChange,
  onOpenFilters,
  onToggleTheme,
  theme,
  favoritesCount,
}: HeaderProps) {
  const isDark = theme === 'dark'

  return (
    <header
      className={
        isDark
          ? 'sticky top-0 z-40 border-b border-slate-800 bg-slate-950/85 backdrop-blur-xl'
          : 'sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur-xl'
      }
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              Premium Catalog
            </span>
            <h1 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              FakeStore Product Catalog
            </h1>
            <p className={isDark ? 'mt-1 text-sm text-slate-400' : 'mt-1 text-sm text-slate-500'}>
              React + Vite + TypeScript + Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={
                isDark
                  ? 'hidden rounded-xl bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-200 sm:inline-flex'
                  : 'hidden rounded-xl bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700 sm:inline-flex'
              }
            >
              Favoritos: {favoritesCount}
            </span>

            <button
              onClick={onToggleTheme}
              className={
                isDark
                  ? 'rounded-2xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-slate-800'
                  : 'rounded-2xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50'
              }
            >
              {isDark ? 'Tema claro' : 'Tema escuro'}
            </button>

            <button
              onClick={onOpenFilters}
              className={
                isDark
                  ? 'rounded-2xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-slate-800 lg:hidden'
                  : 'rounded-2xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 lg:hidden'
              }
            >
              Filtros
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_220px]">
          <SearchBar value={search} onChange={onSearchChange} isDark={isDark} />
          <SortSelect value={sortBy} onChange={onSortChange} isDark={isDark} />
        </div>
      </div>
    </header>
  )
}