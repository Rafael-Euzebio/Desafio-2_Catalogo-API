import { useSearchParams } from "react-router";

import { PRODUCT_CATEGORIES } from "@/constants/categories";
import { useMediaQuery } from "@/hooks/use-media-query";

import { FilterItem } from "./FilterItem";
import { Card, CardContent } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export const CatalogControls = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [searchParams, setSearchParams] = useSearchParams();

  const currentSort = searchParams.get("sort") || "asc";
  const currentCategory = searchParams.get("category") || "All products";

  // Função Única e Reaproveitável
  const updateSearchParam = (key: "sort" | "category", value: string) => {
    setSearchParams((prevParams: URLSearchParams) => {
      prevParams.set(key, value);
      return prevParams;
    });
  };

  return (
    <Card>
      <CardContent className="flex justify-between not-lg:flex-col not-lg:space-y-4 p-6">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700">
            Refine the catalog
          </p>
          <h3 className="text-xl font-bold">Sort the current selection</h3>
          <p className="text-muted-foreground text-sm">
            Use price sorting to change how products are presented without
            leaving the current category view.
          </p>
        </div>

        <div className="self-end not-lg:w-full flex flex-col gap-2">
          <span className="text-sm font-medium">Sort by price</span>
          <Select
            value={currentSort}
            // Usando a função genérica direto no evento
            onValueChange={(val) => updateSearchParam("sort", val)}
          >
            <SelectTrigger className="w-full rounded-2xl">
              <SelectValue placeholder="Price sorting" />
            </SelectTrigger>
            <SelectContent className="rounded-2xl">
              <SelectItem value="asc">Price: Low to High</SelectItem>
              <SelectItem value="desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {!isDesktop && (
          <div className="flex flex-wrap gap-2 w-full pt-4 border-t">
            {PRODUCT_CATEGORIES.map((category) => (
              <FilterItem
                key={category}
                label={category}
                isActive={category === currentCategory}
                onClick={() => updateSearchParam("category", category)}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
