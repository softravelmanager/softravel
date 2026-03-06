import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { airports } from "airport-iata-codes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export interface Airport {
  name: string;
  city: string;
  country:string;
  iata: string;
}

interface AirportSearchProps {
  onSelect: (airport: Airport | null) => void;
  selectedAirport: Airport | null;
  placeholder?: string;
}

export function AirportSearch({ onSelect, selectedAirport, placeholder = "Select airport..." }: AirportSearchProps) {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const filteredAirports = React.useMemo(() => {
    if (!search) return [];
    const lowerQuery = search.toLowerCase();
    /* eslint-disable @typescript-eslint/no-explicit-any */
    return airports.filter(
      (a: any) =>
        (a.name && a.name.toLowerCase().includes(lowerQuery)) ||
        (a.iata && a.iata.toLowerCase().includes(lowerQuery)) ||
        (a.city && a.city.toLowerCase().includes(lowerQuery))
    ).slice(0, 10);
    /* eslint-enable @typescript-eslint/no-explicit-any */
  }, [search]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full h-12 justify-between text-left font-normal"
        >
          <div className="truncate">
            {selectedAirport
              ? `${selectedAirport.name} (${selectedAirport.iata})`
              : placeholder}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" style={{ width: 'var(--radix-popover-trigger-width)' }}>
        <Command shouldFilter={false}>
          <CommandInput
            value={search}
            onValueChange={setSearch}
            placeholder="Search airport by name, city, or code..."
          />
          <CommandList>
            <CommandEmpty>No airport found.</CommandEmpty>
            <CommandGroup>
              {
              /* eslint-disable @typescript-eslint/no-explicit-any */
              filteredAirports.map((airport: any) => (
                <CommandItem
                  key={airport.iata}
                  value={`${airport.name} ${airport.city} ${airport.iata}`}
                  onSelect={() => {
                    onSelect(airport.iata === selectedAirport?.iata ? null : airport);
                    setOpen(false);
                    setSearch("");
                  }
                /* eslint-enable @typescript-eslint/no-explicit-any */
                }
                >
                  <Check
                    className={cn("mr-2 h-4 w-4", selectedAirport?.iata === airport.iata ? "opacity-100" : "opacity-0")}
                  />
                  <div className="flex flex-col">
                    <span className="font-medium">{airport.name}</span>
                    <span className="text-xs text-muted-foreground">{airport.city}, {airport.country} ({airport.iata})</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}