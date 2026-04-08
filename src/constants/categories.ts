import { z } from "zod";

export const PRODUCT_CATEGORIES = [
  "All products",
  "Electronics",
  "Jewelery",
  "Men's clothing",
  "Women's clothing",
] as const;

export const productCategorySchema = z.enum(PRODUCT_CATEGORIES);

export type ProductCategory = z.infer<typeof productCategorySchema>;
