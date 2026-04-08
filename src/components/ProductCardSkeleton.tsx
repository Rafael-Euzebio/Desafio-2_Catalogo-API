import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const ProductCardSkeleton = () => {
  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <div className="w-full h-56 p-4">
        <Skeleton className="w-full h-full rounded-md" />
      </div>
      <CardHeader className="flex flex-col p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-6 w-16 shrink-0" />
        </div>

        <div className="space-y-2 mt-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[90%]" />
          <Skeleton className="h-4 w-[75%]" />
        </div>
      </CardHeader>
      <CardFooter className="flex justify-between mt-auto text-sm">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-24" />
      </CardFooter>
    </Card>
  );
};
