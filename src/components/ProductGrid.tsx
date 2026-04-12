import type { Product } from '../types/product'
import ProductCard from './ProductCard'

type ProductGridProps = {
  products: Product[]
  onOpenDetails: (product: Product) => void
  onToggleFavorite: (productId: number) => void
  isFavorite: (productId: number) => boolean
  isDark?: boolean
}

export default function ProductGrid({
  products,
  onOpenDetails,
  onToggleFavorite,
  isFavorite,
  isDark = false,
}: ProductGridProps) {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onOpenDetails={onOpenDetails}
          onToggleFavorite={onToggleFavorite}
          isFavorite={isFavorite(product.id)}
          isDark={isDark}
        />
      ))}
    </section>
  )
}