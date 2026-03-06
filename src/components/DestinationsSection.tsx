import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { useMemo } from "react";

const allDestinations = [
  {
    city: "Karachi",
    country: "Pakistan",
    price: 399,
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    city: "Lahore",
    country: "Pakistan",
    price: 409,
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop",
  },
  {
    city: "Islamabad",
    country: "Pakistan",
    price: 419,
    image: "https://images.unsplash.com/photo-1608020932658-d0e19a69580b?fm=jpg&q=60&w=3000&auto=format&fit=crop",
  },
  {
    city: "Delhi",
    country: "India",
    price: 449,
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    city: "Mumbai",
    country: "India",
    price: 479,
    image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=2070&auto=format&fit=crop",
  },
  {
    city: "Dhaka",
    country: "Bangladesh",
    price: 459,
    image: "https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=2070&auto=format&fit=crop",
  },
  {
    city: "Colombo",
    country: "Sri Lanka",
    price: 429,
    image: "https://images.unsplash.com/photo-1653151106233-8e928c21bc1a?fm=jpg&q=60&w=3000&auto=format&fit=crop",
  },
  {
    city: "Sydney",
    country: "Australia",
    price: 899,
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070&auto=format&fit=crop",
  },
  {
    city: "New York",
    country: "USA",
    price: 549,
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2099&auto=format&fit=crop",
  },
  {
    city: "Toronto",
    country: "Canada",
    price: 599,
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2065&auto=format&fit=crop",
  },
];

const getRandomDestinations = () => {
  const shuffled = [...allDestinations].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 8);
};

const DestinationsSection = () => {
  const destinations = useMemo(() => getRandomDestinations(), []);

  return (
    <section id="destinations" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Popular Destinations from Italy
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fly from Italy to Pakistan, India, Bangladesh, Sri Lanka, Australia, USA & Canada at unbeatable prices.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <Card
              key={destination.city}
              className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={`Cheap flights from Italy to ${destination.city}, ${destination.country}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-primary-foreground">
                  <div className="flex items-center gap-1 mb-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{destination.country}</span>
                  </div>
                  <h3 className="text-xl font-bold">{destination.city}</h3>
                </div>
              </div>
              <CardContent className="p-4 bg-card">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">Starting from</span>
                  <span className="text-2xl font-bold text-primary">
                    €{destination.price}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
