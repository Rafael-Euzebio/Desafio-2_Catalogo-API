import { Card, CardContent } from "./ui/card";
import { Select, SelectTrigger, SelectValue } from "./ui/select";

export const CatalogControls = () => {
  return (
    <Card>
      <CardContent className="flex justify-between">
        <div className="space-y-2">
          <p className="text-blue-800 font-bold text-xs">REFINE THE CATALOG</p>
          <h3 className="text-xl font-bold">Sort the current selection</h3>
          <p>
            Use price sorting to change how products are presented without
            leaving the current category view.
          </p>
        </div>

        <div className="self-end">
          <span>Sort by price</span>
          <Select>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Featured" />
            </SelectTrigger>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};
