import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Product } from "@/constants/products";
import { formatCurrency } from "@/utils/format-currency";

export function ProductCard({ product }: { product: Product }) {
  const formattedPrice = formatCurrency(product);

  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <div className="w-full h-56 p-4 bg-white">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain mix-blend-multiply"
        />
      </div>

      <CardHeader className="flex flex-col p-6">
        <div className="flex items-start justify-between gap-4 mb-2">
          <CardTitle className="font-extrabold text-lg line-clamp-2 flex-1">
            {product.title}
          </CardTitle>

          <span className="font-bold text-lg shrink-0">{formattedPrice}</span>
        </div>

        <CardDescription className="line-clamp-3">
          {product.description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-between mt-auto text-sm text-muted-foreground">
        <span>Rating: {product.rating.rate} / 5</span>
        <span>{product.rating.count} reviews</span>
      </CardFooter>
    </Card>
  );
}
