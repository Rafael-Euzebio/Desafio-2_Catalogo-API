import { useState } from "react";
import { StoreHeader } from "./components/header/StoreHeader";
import { useGetProducts } from "./hooks/useGetProducts";

type SortOption = "asc" | "desc";

function StoreDashboard() {
    const {
        isPending,
        data: productsData,
    } = useGetProducts();
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState<SortOption>("asc");

    console.log({ productsData })
    if (isPending) return (<>CARREGANDO...</>)
    return (
        <>
            <StoreHeader
                storeName="FakeStore Shop"
                subtitle="Explore nossos produtos e encontre os melhores preços"
                searchValue={search}
                selectedSort={sort}
                favoritesCount={2}
                onSearchChange={setSearch}
                onSortChange={setSort}
                onFavoritesClick={() => {
                    console.log("FEATURE: EXIBIR LISTA APENAS COM FAVORITOS");
                }}
            />
            <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6 text-center">
                <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                    Agile RiseUp - Desafio 2: Catalogo com API
                </h1>
            </main>
        </>
    )
}

export default StoreDashboard
