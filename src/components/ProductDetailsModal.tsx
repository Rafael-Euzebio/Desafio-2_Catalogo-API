import type { Product } from '../types/product'
import { formatPrice } from '../utils/formatPrice'

type ProductDetailsModalProps = {
  product: Product
  onClose: () => void
  onToggleFavorite: (productId: number) => void
  isFavorite: boolean
  isDark?: boolean
}

export default function ProductDetailsModal({
  product,
  onClose,
  onToggleFavorite,
  isFavorite,
  isDark = false,
}: ProductDetailsModalProps) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <button
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-label="Fechar modal"
      />

      <div
        className={
          isDark
            ? 'relative z-10 w-full max-w-4xl animate-modal-in rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl'
            : 'relative z-10 w-full max-w-4xl animate-modal-in rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl'
        }
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          <h2 className="text-2xl font-bold">Detalhes do produto</h2>

          <button
            onClick={onClose}
            className={
              isDark
                ? 'rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-100'
                : 'rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700'
            }
          >
            Fechar
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className={isDark ? 'flex h-80 items-center justify-center rounded-3xl bg-slate-950 p-6' : 'flex h-80 items-center justify-center rounded-3xl bg-slate-100 p-6'}>
            <img
              src={product.image}
              alt={product.title}
              className="max-h-full object-contain"
            />
          </div>

          <div className="flex flex-col">
            <span
              className={
                isDark
                  ? 'mb-3 w-fit rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold capitalize text-slate-200'
                  : 'mb-3 w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold capitalize text-slate-700'
              }
            >
              {product.category}
            </span>

            <h3 className="text-2xl font-bold leading-tight">{product.title}</h3>

            <p className={isDark ? 'mt-4 text-slate-300' : 'mt-4 text-slate-600'}>
              {product.description}
            </p>

            <div className="mt-6">
              <p className={isDark ? 'text-sm text-slate-400' : 'text-sm text-slate-500'}>
                Preço
              </p>
              <p className="text-3xl font-extrabold">{formatPrice(product.price)}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => onToggleFavorite(product.id)}
                className="rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
              >
                {isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
              </button>

              <button
                onClick={onClose}
                className={
                  isDark
                    ? 'rounded-2xl border border-slate-700 px-5 py-3 font-semibold text-slate-100'
                    : 'rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-700'
                }
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}