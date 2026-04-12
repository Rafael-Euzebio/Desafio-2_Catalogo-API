type FavoritesFilterBarProps = {
  viewMode: 'all' | 'favorites'
  onChangeViewMode: (mode: 'all' | 'favorites') => void
  favoritesCount: number
  isDark?: boolean
}

export default function FavoritesFilterBar({
  viewMode,
  onChangeViewMode,
  favoritesCount,
  isDark = false,
}: FavoritesFilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onChangeViewMode('all')}
        className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
          viewMode === 'all'
            ? 'bg-slate-900 text-white'
            : isDark
            ? 'bg-slate-800 text-slate-200 hover:bg-slate-700'
            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
        }`}
      >
        Todos os produtos
      </button>

      <button
        onClick={() => onChangeViewMode('favorites')}
        className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
          viewMode === 'favorites'
            ? 'bg-slate-900 text-white'
            : isDark
            ? 'bg-slate-800 text-slate-200 hover:bg-slate-700'
            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
        }`}
      >
        Favoritos ({favoritesCount})
      </button>
    </div>
  )
}