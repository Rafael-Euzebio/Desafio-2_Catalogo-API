import { Badge } from "@/components/ui/badge";

interface StoreBadgeProps {
  label: string;
  value: string | number; // Deixa de depender do domínio "ProductCategory"
}

export const StoreBadge = ({ label, value }: StoreBadgeProps) => {
  return (
    <Badge className="p-3 bg-sidebar-accent gap-1" variant="outline">
      <span className="text-xs font-light">{label}:</span>
      <span className="font-bold capitalize">{value}</span>
    </Badge>
  );
};
