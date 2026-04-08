// src/hooks/useProducts.ts
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useSearchParams } from "react-router";

import { FakeStoreService } from "../services/fake-store";

export function useProducts() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "All products";
  const sort = searchParams.get("sort") || "asc";

  const {
    data: rawProducts,
    isPending,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => new FakeStoreService().getProducts(),
  });

  const filteredAndSortedProducts = useMemo(() => {
    if (!rawProducts) return [];

    let processedList = [...rawProducts];

    if (category !== "All products") {
      processedList = processedList.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase(),
      );
    }

    if (sort === "asc") {
      processedList.sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
      processedList.sort((a, b) => b.price - a.price);
    }

    return processedList;
  }, [rawProducts, category, sort]);

  console.log(rawProducts);

  return {
    products: filteredAndSortedProducts,
    totalCount: filteredAndSortedProducts.length,
    isPending,
    error,
  };
}
