import { Button } from "./ui/button";

interface FilterItemProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const FilterItem = ({ label, isActive, onClick }: FilterItemProps) => {
  return (
    <li className="list-none">
      <Button
        onClick={onClick}
        className={`w-full flex items-center justify-between text-sm transition-colors rounded-2xl p-5  ${
          isActive
            ? "font-medium bg-amber-100 text-foreground"
            : "bg-transparent text-muted-foreground hover:bg-gray-100"
        }`}
      >
        <span className="capitalize">{label}</span>
        <span
          className={`w-2 h-2 rounded-full ${
            isActive ? "bg-amber-500" : "bg-gray-300"
          }`}
        ></span>
      </Button>
    </li>
  );
};
