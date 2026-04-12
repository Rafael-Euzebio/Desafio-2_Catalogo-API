import { useEffect, useMemo, useState } from 'react'
import { getCategories, getProducts } from '../services/products'
import type { Product } from '../types/product'

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'title-asc' | 'title-desc'

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState<SortOption>('default')

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        setError(null)

        const [productsData, categoriesData] = await Promise.all([
          getProducts(),
          getCategories(),
        ])

        setProducts(productsData)
        setCategories(categoriesData)
      } catch (err) {
        setError('Não foi possível carregar os produtos.')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.toLowerCase().trim()

    let result = [...products]

    if (selectedCategory !== 'all') {
      result = result.filter((product) => product.category === selectedCategory)
    }

    if (normalizedSearch) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(normalizedSearch),
      )
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'title-asc':
        result.sort((a, b) => a.title.localeCompare(b.title))
        break
      case 'title-desc':
        result.sort((a, b) => b.title.localeCompare(a.title))
        break
    }

    return result
  }, [products, search, selectedCategory, sortBy])

  return {
    products: filteredProducts,
    categories,
    loading,
    error,
    search,
    setSearch,
    selectedCategory,
    setSelectedCategory,
    sortBy,
    setSortBy,
  }
}