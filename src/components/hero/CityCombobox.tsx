 import { useState, useRef, useEffect } from "react";
 import { Input } from "@/components/ui/input";
 import { Plane } from "lucide-react";
 import { cn } from "@/lib/utils";
 
 interface CityComboboxProps {
   value: string;
   onChange: (value: string) => void;
   placeholder: string;
   cities: string[];
   icon?: "departure" | "arrival";
 }
 
 const CityCombobox = ({ value, onChange, placeholder, cities, icon = "departure" }: CityComboboxProps) => {
   const [isOpen, setIsOpen] = useState(false);
   const [searchTerm, setSearchTerm] = useState(value);
   const containerRef = useRef<HTMLDivElement>(null);
 
   const filteredCities = cities.filter((city) =>
     city.toLowerCase().includes(searchTerm.toLowerCase())
   );
 
   useEffect(() => {
     setSearchTerm(value);
   }, [value]);
 
   useEffect(() => {
     const handleClickOutside = (event: MouseEvent) => {
       if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
         setIsOpen(false);
       }
     };
     document.addEventListener("mousedown", handleClickOutside);
     return () => document.removeEventListener("mousedown", handleClickOutside);
   }, []);
 
   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     setSearchTerm(e.target.value);
     setIsOpen(true);
   };
 
   const handleSelect = (city: string) => {
     onChange(city);
     setSearchTerm(city);
     setIsOpen(false);
   };
 
   return (
     <div ref={containerRef} className="relative">
       <div className="relative">
         <Plane
           className={cn(
             "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground",
             icon === "arrival" && "rotate-90"
           )}
         />
         <Input
           value={searchTerm}
           onChange={handleInputChange}
           onFocus={() => setIsOpen(true)}
           placeholder={placeholder}
           className="h-12 pl-10"
         />
       </div>
       {isOpen && filteredCities.length > 0 && (
         <div className="absolute z-50 w-full mt-1 bg-popover border border-border rounded-md shadow-lg max-h-60 overflow-auto">
           {filteredCities.map((city) => (
             <button
               key={city}
               type="button"
               onClick={() => handleSelect(city)}
               className="w-full px-4 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
             >
               {city}
             </button>
           ))}
         </div>
       )}
       {isOpen && filteredCities.length === 0 && searchTerm && (
         <div className="absolute z-50 w-full mt-1 bg-popover border border-border rounded-md shadow-lg p-4 text-sm text-muted-foreground">
           No cities found
         </div>
       )}
     </div>
   );
 };
 
 export default CityCombobox;