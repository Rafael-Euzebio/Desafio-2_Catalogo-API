import { Card, CardContent } from "./ui/card";

export const ProductsCatalog = () => {
  return (
    <Card>
      <CardContent>
        <div className="space-y-2">
          <p className="text-blue-800 font-bold text-xs">CATALOG OVERVIEW</p>
          <h3 className="text-xl font-bold">
            Featured products for every catalog
          </h3>
          <p>
            Browse the full catalog and refine the view using category filters
            and price sorting.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
