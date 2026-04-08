import { CatalogControls } from "@/components/CatalogControls";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductsGrid } from "@/components/ProductsGrid";
import { StoreHeader } from "@/components/StoreHeader";
import { useMediaQuery } from "@/hooks/use-media-query";

export const StoreLayout = () => {
  const isDesktop = useMediaQuery("(max-width: 1024px)");

  return (
    <div className="max-w-360 mx-auto p-6 grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8">
      <header className="lg:col-span-full">
        <StoreHeader />
      </header>

      {!isDesktop && (
        <aside>
          <CategoryFilter />
        </aside>
      )}
      <main className="flex flex-col gap-6">
        <CatalogControls />
        <ProductsGrid />
      </main>
    </div>
  );
};
