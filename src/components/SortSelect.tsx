type SortSelectProps = {
  value: string
  onChange: (value: string) => void
  isDark?: boolean
}

export default function SortSelect({ value, onChange, isDark = false }: SortSelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={
        isDark
          ? 'w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-slate-500 focus:ring-4 focus:ring-slate-800'
          : 'w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500 focus:ring-4 focus:ring-slate-200'
      }
    >
      <option value="default">Ordenar por</option>
      <option value="price-asc">Menor preço</option>
      <option value="price-desc">Maior preço</option>
      <option value="title-asc">Título A-Z</option>
      <option value="title-desc">Título Z-A</option>
    </select>
  )
}