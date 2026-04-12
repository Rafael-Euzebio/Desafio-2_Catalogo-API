import { BASE_URL } from './api'
import type { Product } from '../types/product'

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${BASE_URL}/products`)

  if (!response.ok) {
    throw new Error('Erro ao buscar produtos')
  }

  return response.json()
}

export async function getCategories(): Promise<string[]> {
  const response = await fetch(`${BASE_URL}/products/categories`)

  if (!response.ok) {
    throw new Error('Erro ao buscar categorias')
  }

  return response.json()
}