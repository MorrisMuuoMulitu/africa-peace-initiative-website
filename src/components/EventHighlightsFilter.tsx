
import React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface FilterOption {
  value: string;
  label: string;
}

interface EventHighlightsFilterProps {
  options: FilterOption[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const EventHighlightsFilter: React.FC<EventHighlightsFilterProps> = ({
  options,
  selectedValue,
  onChange
}) => {
  const selectedOption = options.find(option => option.value === selectedValue);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={false}
          className="w-full md:w-[200px] justify-between border-api-cream hover:bg-api-cream/20 hover:text-api-midnight"
        >
          {selectedOption?.label || "Filter by topic"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full md:w-[200px] p-0">
        <div className="max-h-[300px] overflow-auto">
          {options.map((option) => (
            <Button
              key={option.value}
              className={cn(
                "relative flex w-full cursor-pointer select-none items-center rounded-none py-1.5 px-3 text-sm outline-none justify-start font-normal",
                selectedValue === option.value && "bg-api-cream/20 text-api-midnight"
              )}
              onClick={() => onChange(option.value)}
            >
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  selectedValue === option.value ? "opacity-100" : "opacity-0"
                )}
              />
              {option.label}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default EventHighlightsFilter;
