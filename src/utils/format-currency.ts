import type { Product } from "@/constants/products";

export const formatCurrency = (product: Product) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(product.price);
};
