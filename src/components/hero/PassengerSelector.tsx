 import { useState, useRef, useEffect } from "react";
 import { Button } from "@/components/ui/button";
 import { Users, Plus, Minus } from "lucide-react";
 
 export interface PassengerCounts {
   adults: number;
   children: number;
   infants: number;
 }
 
 interface PassengerSelectorProps {
   value: PassengerCounts;
   onChange: (value: PassengerCounts) => void;
 }
 
 const PassengerSelector = ({ value, onChange }: PassengerSelectorProps) => {
   const [isOpen, setIsOpen] = useState(false);
   const containerRef = useRef<HTMLDivElement>(null);
 
   const totalPassengers = value.adults + value.children + value.infants;
 
   useEffect(() => {
     const handleClickOutside = (event: MouseEvent) => {
       if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
         setIsOpen(false);
       }
     };
     document.addEventListener("mousedown", handleClickOutside);
     return () => document.removeEventListener("mousedown", handleClickOutside);
   }, []);
 
   const updateCount = (type: keyof PassengerCounts, increment: boolean) => {
     const newValue = { ...value };
     if (increment) {
       newValue[type] = Math.min(newValue[type] + 1, 9);
     } else {
       if (type === "adults") {
         newValue[type] = Math.max(newValue[type] - 1, 1);
       } else {
         newValue[type] = Math.max(newValue[type] - 1, 0);
       }
     }
     onChange(newValue);
   };
 
   const PassengerRow = ({
     label,
     subtitle,
     type,
     count,
   }: {
     label: string;
     subtitle: string;
     type: keyof PassengerCounts;
     count: number;
   }) => (
     <div className="flex items-center justify-between py-3">
       <div>
         <p className="font-medium text-foreground">{label}</p>
         <p className="text-xs text-muted-foreground">{subtitle}</p>
       </div>
       <div className="flex items-center gap-3">
         <Button
           type="button"
           variant="outline"
           size="icon"
           className="h-8 w-8"
           onClick={() => updateCount(type, false)}
           disabled={type === "adults" ? count <= 1 : count <= 0}
         >
           <Minus className="h-4 w-4" />
         </Button>
         <span className="w-6 text-center font-medium">{count}</span>
         <Button
           type="button"
           variant="outline"
           size="icon"
           className="h-8 w-8"
           onClick={() => updateCount(type, true)}
           disabled={count >= 9}
         >
           <Plus className="h-4 w-4" />
         </Button>
       </div>
     </div>
   );
 
   return (
     <div ref={containerRef} className="relative">
       <Button
         type="button"
         variant="outline"
         onClick={() => setIsOpen(!isOpen)}
         className="w-full h-12 justify-start font-normal"
       >
         <Users className="h-4 w-4 mr-2 text-muted-foreground" />
         <span>
           {totalPassengers} {totalPassengers === 1 ? "Passenger" : "Passengers"}
         </span>
       </Button>
       {isOpen && (
         <div className="absolute z-50 w-full mt-1 bg-popover border border-border rounded-md shadow-lg p-4 min-w-[280px]">
           <PassengerRow
             label="Adults"
             subtitle="12+ years"
             type="adults"
             count={value.adults}
           />
           <PassengerRow
             label="Children"
             subtitle="2-11 years"
             type="children"
             count={value.children}
           />
           <PassengerRow
             label="Infants"
             subtitle="Under 2 years"
             type="infants"
             count={value.infants}
           />
           <Button
             type="button"
             className="w-full mt-3"
             onClick={() => setIsOpen(false)}
           >
             Done
           </Button>
         </div>
       )}
     </div>
   );
 };
 
 export default PassengerSelector;