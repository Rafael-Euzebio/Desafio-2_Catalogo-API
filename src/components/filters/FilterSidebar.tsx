import { useCallback, useState } from "react";
import type { Category } from "../../models/Category";

type Props = {
    categories: Category[];
    selectedCategory: string;
    onFilter: (category: string) => void;
    onSearch: (term: string) => void;
};

export default function FilterSidebar({
    categories = [],
    selectedCategory,
    onFilter,
    onSearch,
}: Props) {
    const [search, setSearch] = useState("");

    const handleSearch = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            setSearch(value);
            onSearch(value);
        },
        [onSearch]
    );

    const buttonClass = (active: boolean) =>
        `text-left text-sm px-3 py-2 rounded-lg transition-colors capitalize ${
            active
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`;

    return (
        <div className="h-full flex flex-col p-4 ">
            <h2 className="font-semibold text-base mb-4 text-gray-900">Filtros</h2>

            <input
                type="text"
                placeholder="Buscar produto..."
                value={search}
                onChange={handleSearch}
                className="w-full mb-4 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
            />

            <div className="flex-1 overflow-y-auto flex flex-col gap-1.5 pr-1 no-scrollbar ">
                <button
                    type="button"
                    onClick={() => onFilter("")}
                    className={buttonClass(selectedCategory === "")}
                >
                    Todos
                </button>

                {categories.length === 0 ? (
                    <p className="text-sm text-gray-400 text-center mt-4">
                        Nenhuma categoria disponível
                    </p>
                ) : (
                    categories.map((cat) => (
                        <button
                            key={cat.slug}
                            type="button"
                            onClick={() => onFilter(cat.slug)}
                            className={buttonClass(selectedCategory === cat.slug)}
                        >
                            {cat.name}
                        </button>
                    ))
                )}
            </div>
        </div>
    );
}