import { useQuery } from "@tanstack/react-query";

import type { Product } from "@/constants/products";
import { FakeStoreService } from "@/services/fake-store.service";

import { ProductCard } from "./ProductCard";
import { Card, CardContent } from "./ui/card";

export const ProductsGrid = () => {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: () => new FakeStoreService().getProducts(),
  });

  return (
    <Card>
      <CardContent className="grid grid-cols-3 gap-4">
        {products?.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </CardContent>
    </Card>
  );
};
