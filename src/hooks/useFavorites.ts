import { useEffect, useState } from 'react'

const STORAGE_KEY = 'premium-catalog-favorites'

export function useFavorites() {
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      setFavorites(JSON.parse(stored))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
  }, [favorites])

  function toggleFavorite(productId: number) {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    )
  }

  function isFavorite(productId: number) {
    return favorites.includes(productId)
  }

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  }
}