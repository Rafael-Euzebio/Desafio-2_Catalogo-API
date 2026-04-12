type CategorySidebarProps = {
  categories: string[]
  selectedCategory: string
  onSelectCategory: (category: string) => void
  isDark?: boolean
}

export default function CategorySidebar({
  categories,
  selectedCategory,
  onSelectCategory,
  isDark = false,
}: CategorySidebarProps) {
  return (
    <aside
      className={
        isDark
          ? 'rounded-3xl border border-slate-800 bg-slate-900 p-4 shadow-sm'
          : 'rounded-3xl border border-slate-200 bg-white p-4 shadow-sm'
      }
    >
      <div className="mb-4">
        <p className={isDark ? 'text-sm font-medium text-slate-400' : 'text-sm font-medium text-slate-500'}>
          Categorias
        </p>
        <h2 className="text-lg font-bold">Filtrar catálogo</h2>
      </div>

      <div className="flex flex-col gap-2">
        <button
          onClick={() => onSelectCategory('all')}
          className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
            selectedCategory === 'all'
              ? 'bg-slate-900 text-white shadow-sm'
              : isDark
              ? 'bg-slate-800 text-slate-200 hover:bg-slate-700'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Todas as categorias
        </button>

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold capitalize transition ${
              selectedCategory === category
                ? 'bg-slate-900 text-white shadow-sm'
                : isDark
                ? 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </aside>
  )
}