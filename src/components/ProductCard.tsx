import type { Product } from '../types/product'
import { formatPrice } from '../utils/formatPrice'

type ProductCardProps = {
  product: Product
  onOpenDetails: (product: Product) => void
  onToggleFavorite: (productId: number) => void
  isFavorite: boolean
  isDark?: boolean
}

export default function ProductCard({
  product,
  onOpenDetails,
  onToggleFavorite,
  isFavorite,
  isDark = false,
}: ProductCardProps) {
  return (
    <article
      className={
        isDark
          ? 'group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl'
          : 'group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl'
      }
    >
      <div
        className={
          isDark
            ? 'relative flex h-64 items-center justify-center overflow-hidden bg-slate-950 p-6'
            : 'relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 p-6'
        }
      >
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full object-contain transition duration-300 group-hover:scale-105"
        />

        <span
          className={
            isDark
              ? 'absolute left-4 top-4 rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold capitalize text-slate-200 shadow-sm'
              : 'absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold capitalize text-slate-700 shadow-sm backdrop-blur'
          }
        >
          {product.category}
        </span>

        <button
          onClick={() => onToggleFavorite(product.id)}
          className={
            isDark
              ? 'absolute right-4 top-4 rounded-full bg-slate-800 px-3 py-2 text-sm shadow-sm transition hover:scale-105 hover:bg-slate-700'
              : 'absolute right-4 top-4 rounded-full bg-white px-3 py-2 text-sm shadow-sm transition hover:scale-105 hover:bg-slate-100'
          }
        >
          {isFavorite ? '♥' : '♡'}
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-2 text-base font-bold leading-6">
          {product.title}
        </h3>

        <p className={isDark ? 'mt-2 line-clamp-3 text-sm text-slate-400' : 'mt-2 line-clamp-3 text-sm text-slate-500'}>
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div>
            <p className={isDark ? 'text-xs font-medium uppercase tracking-wide text-slate-500' : 'text-xs font-medium uppercase tracking-wide text-slate-400'}>
              Preço
            </p>
            <p className="text-2xl font-extrabold tracking-tight">
              {formatPrice(product.price)}
            </p>
          </div>

          <button
            onClick={() => onOpenDetails(product)}
            className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-slate-800"
          >
            Ver item
          </button>
        </div>
      </div>
    </article>
  )
}