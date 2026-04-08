import { CatalogControls } from "@/components/CatalogControls";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductsCatalog } from "@/components/ProductsCatalog";
import { ProductsGrid } from "@/components/ProductsGrid";
import { StoreHeader } from "@/components/StoreHeader";

export const StoreLayout = () => {
  return (
    <div className="max-w-360 mx-auto p-8 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">
      <header className="lg:col-span-full">
        <StoreHeader />
      </header>
      <aside>
        <CategoryFilter />
      </aside>
      <main className="flex flex-col gap-6">
        <CatalogControls />
        <ProductsCatalog />
        <ProductsGrid />
      </main>
    </div>
  );
};
