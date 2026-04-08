import { useSearchParams } from "react-router";

import { PRODUCT_CATEGORIES } from "@/constants/categories";

import { FilterItem } from "./FilterItem";
import { Card, CardContent } from "./ui/card";

export const CategoryFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentCategory = searchParams.get("category") || "All products";

  const handleCategoryChange = (category: string) => {
    setSearchParams((prevCategory) => {
      prevCategory.set("category", category);
      return prevCategory;
    });
  };
  return (
    <Card className="h-full">
      <CardContent className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700">
          FILTERS
        </p>
        <h3 className="text-xl font-bold">Shop by Category</h3>
        <p>
          Narrow the catalog quickly white keeping the product grid as the main
          focus.
        </p>
        <div className="mt-5 space-y-2">
          {PRODUCT_CATEGORIES.map((category) => (
            <FilterItem
              label={category}
              key={category}
              onClick={() => handleCategoryChange(category)}
              isActive={category === currentCategory}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
