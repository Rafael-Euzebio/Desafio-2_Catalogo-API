import type { Product } from "@/constants/products";
import { useProducts } from "@/hooks/use-products";

import { ProductCard } from "./ProductCard";
import { ProductCardSkeleton } from "./ProductCardSkeleton";
import { Card, CardContent } from "./ui/card";

export const ProductsGrid = () => {
  const { products, isPending } = useProducts();

  return (
    <Card>
      <CardContent className="grid grid-cols-3 gap-4">
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
