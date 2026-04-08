import z from "zod";

import { productCategorySchema } from "./categories";

export const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  category: productCategorySchema,
  image: z.url(),
  rating: z.object({
    rate: z.number(),
    count: z.number(),
  }),
});

export type Product = z.infer<typeof productSchema>;
