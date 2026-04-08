import { useSearchParams } from "react-router";

import type { Product } from "@/constants/products";
import { useProducts } from "@/hooks/use-products";

import { ProductCard } from "./ProductCard";
import { ProductCardSkeleton } from "./ProductCardSkeleton";
import { Card, CardContent, CardHeader } from "./ui/card";

export const ProductsGrid = () => {
  const { products, isPending } = useProducts();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "All products";

  return (
    <Card>
      <CardHeader className="space-y-2 mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700">
          CATALOG OVERVIEW
        </p>
        <h3 className="text-xl font-bold">
          {category === "All products"
            ? "Featured products for every category"
            : `${category} picks`}
        </h3>
        <p>
          Browse the full catalog and refine the view using category filters and
          price sorting.
        </p>
      </CardHeader>
      <CardContent className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {isPending ? (
          Array.from({ length: 6 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))
        ) : (
          <>
            {products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}

            {products.length === 0 && (
              <div className="col-span-full text-center py-12 text-muted-foreground">
                No products found.
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};
