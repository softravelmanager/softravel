import { Shield, Headphones, BadgeCheck, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: BadgeCheck,
    title: "Best Price Guarantee",
    description:
      "We compare thousands of flights to find you the best deals. If you find a lower price elsewhere, we'll match it.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description:
      "Our dedicated team is available around the clock to assist you with any questions or concerns during your journey.",
  },
  {
    icon: Shield,
    title: "Secure Booking",
    description:
      "Your personal and payment information is protected with industry-leading security measures and encryption.",
  },
  {
    icon: MapPin,
    title: "South Asia Specialists",
    description:
      "We specialise in flights to Pakistan, India, Bangladesh & Sri Lanka. Our deep connections ensure you get the best routes and fares.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Why Choose SOF TRAVEL?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Italy's trusted travel agency for flights to Pakistan, India, Bangladesh, Sri Lanka & beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="text-center p-6 hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6 group-hover:bg-primary/10 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
