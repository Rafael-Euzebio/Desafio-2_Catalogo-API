import { useEffect, useMemo, useState } from 'react'
import CategorySidebar from './components/CategorySidebar'
import EmptyState from './components/EmptyState'
import ErrorState from './components/ErrorState'
import FavoritesFilterBar from './components/FavoritesFilterBar'
import Header from './components/Header'
import LoadingState from './components/LoadingState'
import ProductDetailsModal from './components/ProductDetailsModal'
import ProductGrid from './components/ProductGrid'
import Toast from './components/Toast'
import { useFavorites } from './hooks/useFavorites'
import { useProducts } from './hooks/useProducts'
import type { Product } from './types/product'

type ThemeMode = 'light' | 'dark'
type ViewMode = 'all' | 'favorites'

export default function App() {
  const {
    products,
    categories,
    loading,
    error,
    search,
    setSearch,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
  } = useProducts()

  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [toastMessage, setToastMessage] = useState('')
  const [viewMode, setViewMode] = useState<ViewMode>('all')

  const [theme, setTheme] = useState<ThemeMode>(() => {
    const savedTheme = localStorage.getItem('premium-theme')
    return savedTheme === 'dark' ? 'dark' : 'light'
  })

  const { favorites, toggleFavorite, isFavorite } = useFavorites()

  useEffect(() => {
    localStorage.setItem('premium-theme', theme)
  }, [theme])

  useEffect(() => {
    if (!toastMessage) return

    const timer = window.setTimeout(() => {
      setToastMessage('')
    }, 2200)

    return () => window.clearTimeout(timer)
  }, [toastMessage])

  const isDark = theme === 'dark'

  const visibleProducts = useMemo(() => {
    if (viewMode === 'favorites') {
      return products.filter((product) => favorites.includes(product.id))
    }

    return products
  }, [products, favorites, viewMode])

  const resultsLabel = useMemo(() => {
    if (loading) return 'Carregando resultados...'
    if (error) return 'Erro ao carregar os produtos'
    return `${visibleProducts.length} produto${visibleProducts.length !== 1 ? 's' : ''} encontrado${visibleProducts.length !== 1 ? 's' : ''}`
  }, [loading, error, visibleProducts.length])

  function clearFilters() {
    setSearch('')
    setSelectedCategory('all')
    setSortBy('default')
    setViewMode('all')
  }

  function handleToggleTheme() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  function handleToggleFavorite(productId: number) {
    const alreadyFavorite = isFavorite(productId)

    toggleFavorite(productId)

    setToastMessage(
      alreadyFavorite
        ? 'Produto removido dos favoritos'
        : 'Produto adicionado aos favoritos',
    )
  }

  return (
    <div
      className={
        isDark
          ? 'min-h-screen bg-slate-950 text-slate-100 transition-colors duration-300'
          : 'min-h-screen bg-slate-100 text-slate-900 transition-colors duration-300'
      }
    >
      <Header
        search={search}
        onSearchChange={setSearch}
        sortBy={sortBy}
        onSortChange={setSortBy}
        onOpenFilters={() => setIsMobileFiltersOpen(true)}
        onToggleTheme={handleToggleTheme}
        theme={theme}
        favoritesCount={favorites.length}
      />

      <main className="mx-auto max-w-7xl px-4 py-6">
        <section
          className={
            isDark
              ? 'mb-6 rounded-3xl border border-slate-800 bg-slate-900 p-4 shadow-sm'
              : 'mb-6 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm'
          }
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className={isDark ? 'text-sm font-medium text-slate-400' : 'text-sm font-medium text-slate-500'}>
                Catálogo
              </p>
              <h2 className="text-2xl font-bold tracking-tight">Explore os produtos</h2>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <span
                className={
                  isDark
                    ? 'rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200'
                    : 'rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700'
                }
              >
                {resultsLabel}
              </span>

              <button
                onClick={clearFilters}
                className={
                  isDark
                    ? 'rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-slate-800'
                    : 'rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50'
                }
              >
                Limpar filtros
              </button>
            </div>
          </div>

          <div className="mt-4">
            <FavoritesFilterBar
              viewMode={viewMode}
              onChangeViewMode={setViewMode}
              favoritesCount={favorites.length}
              isDark={isDark}
            />
          </div>
        </section>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[280px_1fr]">
          <div className="hidden lg:block">
            <CategorySidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              isDark={isDark}
            />
          </div>

          <section className="space-y-4">
            {loading && <LoadingState isDark={isDark} />}

            {error && !loading && <ErrorState message={error} isDark={isDark} />}

            {!loading && !error && visibleProducts.length === 0 && (
              <EmptyState isDark={isDark} />
            )}

            {!loading && !error && visibleProducts.length > 0 && (
              <ProductGrid
                products={visibleProducts}
                onOpenDetails={setSelectedProduct}
                onToggleFavorite={handleToggleFavorite}
                isFavorite={isFavorite}
                isDark={isDark}
              />
            )}
          </section>
        </div>
      </main>

      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <button
            aria-label="Fechar filtros"
            className="absolute inset-0 bg-slate-950/50"
            onClick={() => setIsMobileFiltersOpen(false)}
          />

          <div
            className={
              isDark
                ? 'relative ml-auto h-full w-[88%] max-w-sm overflow-y-auto border-l border-slate-800 bg-slate-900 p-4 shadow-2xl'
                : 'relative ml-auto h-full w-[88%] max-w-sm overflow-y-auto border-l border-slate-200 bg-white p-4 shadow-2xl'
            }
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className={isDark ? 'text-sm font-medium text-slate-400' : 'text-sm font-medium text-slate-500'}>
                  Filtros
                </p>
                <h3 className="text-xl font-bold">Refine sua busca</h3>
              </div>

              <button
                onClick={() => setIsMobileFiltersOpen(false)}
                className={
                  isDark
                    ? 'rounded-xl border border-slate-700 px-3 py-2 text-sm font-semibold text-slate-200'
                    : 'rounded-xl border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700'
                }
              >
                Fechar
              </button>
            </div>

            <CategorySidebar
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              isDark={isDark}
            />

            <div className="mt-4">
              <FavoritesFilterBar
                viewMode={viewMode}
                onChangeViewMode={setViewMode}
                favoritesCount={favorites.length}
                isDark={isDark}
              />
            </div>

            <button
              onClick={() => {
                clearFilters()
                setIsMobileFiltersOpen(false)
              }}
              className="mt-4 w-full rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              Limpar tudo
            </button>
          </div>
        </div>
      )}

      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onToggleFavorite={handleToggleFavorite}
          isFavorite={isFavorite(selectedProduct.id)}
          isDark={isDark}
        />
      )}

      <Toast message={toastMessage} isDark={isDark} />
    </div>
  )
}