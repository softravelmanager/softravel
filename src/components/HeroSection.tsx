 import { useState } from "react";
 import { Button } from "@/components/ui/button";
 import { Label } from "@/components/ui/label";
 import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
 import { Calendar } from "@/components/ui/calendar";
 import {
   Popover,
   PopoverContent,
   PopoverTrigger,
 } from "@/components/ui/popover";
 import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
 } from "@/components/ui/select";
 import { CalendarIcon, Search } from "lucide-react";
 import { format } from "date-fns";
 import { cn } from "@/lib/utils";
 import { useToast } from "@/hooks/use-toast";
 import CityCombobox from "@/components/hero/CityCombobox";
 import { AirportSearch, Airport } from "@/components/AirportSearch";
 import PassengerSelector, { PassengerCounts } from "@/components/hero/PassengerSelector";
 import HeroSlideshow from "@/components/hero/HeroSlideshow";
 
 const HeroSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    departure: null as Airport | null,
    destination: null as Airport | null,
    departureDate: undefined as Date | undefined,
    returnDate: undefined as Date | undefined,
   passengers: { adults: 1, children: 0, infants: 0 } as PassengerCounts,
   tripType: "roundtrip" as "oneway" | "roundtrip",
    class: "economy",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
   if (!formData.departure || !formData.destination || !formData.departureDate) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
 
   if (formData.tripType === "roundtrip" && !formData.returnDate) {
     toast({
       title: "Missing Return Date",
       description: "Please select a return date for round trip.",
       variant: "destructive",
     });
     return;
   }

    setIsSubmitting(true);
    
    // For now, show a success message. Email functionality will be added with Cloud.
    setTimeout(() => {
      toast({
        title: "Flight Inquiry Sent!",
        description: "We'll get back to you within 24 hours with the best options.",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
     {/* Background Slideshow */}
     <HeroSlideshow />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
           <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-4 animate-fade-in">
             Cheap Flights for India, Pakistan & Beyond
           </h1>
           <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
             Best deals to Karachi, Lahore, Islamabad, Delhi, Mumbai, Dhaka, Colombo, Sydney, New York & Toronto. IATA certified.
           </p>
        </div>

        {/* Search Form */}
        <div
          className="max-w-5xl mx-auto bg-card rounded-2xl shadow-2xl p-6 md:p-8 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <form onSubmit={handleSubmit}>
            {/* Trip Type Radio */}
            <div className="mb-4 md:mb-6 pt-2">
              <RadioGroup
                value={formData.tripType}
                onValueChange={(value: "oneway" | "roundtrip") =>
                  setFormData({ ...formData, tripType: value })
                }
                className="flex flex-wrap gap-4 md:gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="roundtrip" id="roundtrip" />
                  <Label htmlFor="roundtrip" className="cursor-pointer font-medium text-sm md:text-base">
                    Round Trip
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="oneway" id="oneway" />
                  <Label htmlFor="oneway" className="cursor-pointer font-medium text-sm md:text-base">
                    One Way
                  </Label>
                </div>
              </RadioGroup>
            </div>
 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {/* Departure */}
              <div className="space-y-2">
                <Label htmlFor="departure" className="text-foreground font-medium">
                  From
                </Label>
               <AirportSearch
                 selectedAirport={formData.departure}
                 onSelect={(airport) => setFormData({ ...formData, departure: airport })}
                 placeholder="Search departure city"
               />
              </div>

              {/* Destination */}
              <div className="space-y-2">
                <Label htmlFor="destination" className="text-foreground font-medium">
                  To
                </Label>
               <AirportSearch
                 selectedAirport={formData.destination}
                 onSelect={(airport) => setFormData({ ...formData, destination: airport })}
                 placeholder="Search destination"
               />
              </div>

              {/* Departure Date */}
              <div className="space-y-2">
                <Label className="text-foreground font-medium">Departure Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full h-12 justify-start text-left font-normal",
                        !formData.departureDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.departureDate
                        ? format(formData.departureDate, "PPP")
                        : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.departureDate}
                      onSelect={(date) =>
                        setFormData({ ...formData, departureDate: date })
                      }
                      disabled={(date) =>
                        date < new Date() ||
                        (formData.returnDate ? date > formData.returnDate : false)
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Return Date */}
              <div className="space-y-2">
               <Label className={cn("text-foreground font-medium", formData.tripType === "oneway" && "text-muted-foreground")}>
                 Return Date {formData.tripType === "oneway" && "(N/A)"}
               </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full h-12 justify-start text-left font-normal",
                        !formData.returnDate && "text-muted-foreground"
                      )}
                     disabled={formData.tripType === "oneway"}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.returnDate
                        ? format(formData.returnDate, "PPP")
                       : formData.tripType === "oneway" ? "Not applicable" : "Select return date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.returnDate}
                      onSelect={(date) =>
                        setFormData({ ...formData, returnDate: date })
                      }
                      disabled={(date) =>
                        date < new Date() ||
                        (formData.departureDate ? date < formData.departureDate : false)
                      }
                      initialFocus
                     className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Passengers */}
              <div className="space-y-2">
                <Label className="text-foreground font-medium">Passengers</Label>
               <PassengerSelector
                 value={formData.passengers}
                 onChange={(value) => setFormData({ ...formData, passengers: value })}
               />
              </div>

              {/* Class */}
              <div className="space-y-2">
                <Label className="text-foreground font-medium">Class</Label>
                <Select
                  value={formData.class}
                  onValueChange={(value) =>
                    setFormData({ ...formData, class: value })
                  }
                >
                  <SelectTrigger className="h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="economy">Economy</SelectItem>
                    <SelectItem value="premium">Premium Economy</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="first">First Class</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                type="submit"
                size="lg"
                className="w-full md:w-auto md:min-w-[200px] bg-accent hover:bg-accent/90 text-accent-foreground h-14 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Searching..."
                ) : (
                  <>
                    <Search className="mr-2 h-5 w-5" />
                    Search Flights
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
