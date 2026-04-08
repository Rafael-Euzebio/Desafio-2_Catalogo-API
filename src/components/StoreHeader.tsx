import { useSearchParams } from "react-router";

import { useProducts } from "@/hooks/use-products";

import { StoreBadge } from "./StoreBadge";
import { Card, CardContent } from "./ui/card";

export const StoreHeader = () => {
  const { totalCount } = useProducts();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "All products";
  return (
    <header className="w-full">
      <Card>
        <CardContent className="flex justify-between flex-wrap gap-5">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700">
              FAKE STORE API
            </p>
            <h1 className="text-3xl font-bold">Product Catalog</h1>
            <p>Browse products, filter by category, and sort by price.</p>
          </div>
          <div className="space-x-2 self-end">
            <StoreBadge label="CATEGORY" value={category} />
            <StoreBadge label="SHOWING" value={totalCount} />
          </div>
        </CardContent>
      </Card>
    </header>
  );
};
