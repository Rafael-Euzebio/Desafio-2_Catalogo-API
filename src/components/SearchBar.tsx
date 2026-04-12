type SearchBarProps = {
  value: string
  onChange: (value: string) => void
  isDark?: boolean
}

export default function SearchBar({ value, onChange, isDark = false }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Buscar por nome do produto..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={
        isDark
          ? 'w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-slate-500 focus:ring-4 focus:ring-slate-800'
          : 'w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-500 focus:ring-4 focus:ring-slate-200'
      }
    />
  )
}