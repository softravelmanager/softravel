import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const allReviews = [
  {
    name: "Ahmed Khan",
    location: "Karachi, Pakistan",
    rating: 5,
    text: "Best flight booking experience I've ever had. Found amazing deals on Karachi to Rome flights. Highly recommended for all Pakistanis in Italy!",
    avatar: "AK",
  },
  {
    name: "Fatima Malik",
    location: "Lahore, Pakistan",
    rating: 5,
    text: "SOF TRAVEL always gets me the cheapest flights to Lahore. The owner Ghulam bhai is very helpful and always available on WhatsApp.",
    avatar: "FM",
  },
  {
    name: "Hassan Ali",
    location: "Islamabad, Pakistan",
    rating: 5,
    text: "Reliable service with transparent pricing. No hidden fees. I've been booking my Islamabad flights through SOF TRAVEL for 5 years.",
    avatar: "HA",
  },
  {
    name: "Omar Sheikh",
    location: "Peshawar, Pakistan",
    rating: 5,
    text: "Great platform with competitive prices. Booked emergency tickets to Peshawar and the team handled everything quickly.",
    avatar: "OS",
  },
  {
    name: "Ayesha Siddiqui",
    location: "Multan, Pakistan",
    rating: 4,
    text: "Very professional service. They found me connecting flights to Multan at a great price. Will use again for my next trip.",
    avatar: "AS",
  },
  {
    name: "Bilal Hussain",
    location: "Faisalabad, Pakistan",
    rating: 5,
    text: "I recommend SOF TRAVEL to every Pakistani living in Italy. Best prices and they understand our travel needs perfectly.",
    avatar: "BH",
  },
  {
    name: "Rajesh Sharma",
    location: "Delhi, India",
    rating: 5,
    text: "Excellent service! Found the perfect flight to Rome at an unbeatable price. The booking process was smooth and customer support was incredibly helpful.",
    avatar: "RS",
  },
  {
    name: "Priya Patel",
    location: "Mumbai, India",
    rating: 5,
    text: "I've been using SOF TRAVEL for all my business trips between Mumbai and Milan. Their attention to detail makes travel planning effortless.",
    avatar: "PP",
  },
  {
    name: "Mohammad Rahman",
    location: "Dhaka, Bangladesh",
    rating: 5,
    text: "Amazing experience booking my flights to Italy. The whole process was seamless and I got a great deal on my Dhaka–Rome tickets.",
    avatar: "MR",
  },
  {
    name: "Ayesha Begum",
    location: "Sylhet, Bangladesh",
    rating: 4,
    text: "Very helpful customer support team. They answered all my questions quickly and helped me find the perfect flight for my family trip.",
    avatar: "AB",
  },
  {
    name: "Nimal Perera",
    location: "Colombo, Sri Lanka",
    rating: 5,
    text: "Saved over €200 on my family vacation tickets to Milan! SOF TRAVEL offers the best deals for Sri Lankans travelling to Italy.",
    avatar: "NP",
  },
  {
    name: "Dilini Silva",
    location: "Kandy, Sri Lanka",
    rating: 5,
    text: "SOF TRAVEL made our dream vacation possible! Found affordable flights from Colombo and the whole experience was wonderful.",
    avatar: "DS",
  },
  {
    name: "Robert Brown",
    location: "Sydney, Australia",
    rating: 5,
    text: "Even for long-haul flights from Australia, SOF TRAVEL had the best deals. Excellent service from start to finish.",
    avatar: "RB",
  },
  {
    name: "James Wilson",
    location: "Toronto, Canada",
    rating: 5,
    text: "Fantastic experience! Got great deals on premium economy to Milan. Will definitely book again for my next trip.",
    avatar: "JW",
  },
  {
    name: "Michael Johnson",
    location: "New York, USA",
    rating: 5,
    text: "Found incredible deals on flights to Rome. The booking interface is intuitive and the prices were the best I found anywhere.",
    avatar: "MJ",
  },
  {
    name: "Sarah Williams",
    location: "Los Angeles, USA",
    rating: 5,
    text: "Outstanding service! Booked my flights through SOF TRAVEL and everything went perfectly. Customer support is top-notch.",
    avatar: "SW",
  },
  {
    name: "Usman Tariq",
    location: "Sialkot, Pakistan",
    rating: 5,
    text: "SOF TRAVEL is the go-to agency for Pakistanis in Italy. Best prices, great service, and always reachable on WhatsApp.",
    avatar: "UT",
  },
  {
    name: "Zainab Raza",
    location: "Rawalpindi, Pakistan",
    rating: 5,
    text: "Booked last-minute Eid tickets for my whole family. SOF TRAVEL managed everything perfectly and at a reasonable price.",
    avatar: "ZR",
  },
  {
    name: "Amit Verma",
    location: "Bangalore, India",
    rating: 5,
    text: "Booked my entire family's tickets to Rome through SOF TRAVEL. Saved a lot of money and the process was hassle-free.",
    avatar: "AV",
  },
  {
    name: "Kavitha Krishnan",
    location: "Chennai, India",
    rating: 5,
    text: "Very professional and efficient. The team helped me book last-minute tickets and everything went smoothly.",
    avatar: "KK",
  },
];

const getRandomReviews = (count: number) => {
  const shuffled = [...allReviews].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const ReviewsSection = () => {
  const [reviews, setReviews] = useState(() => getRandomReviews(6));

  useEffect(() => {
    setReviews(getRandomReviews(6));
  }, []);

  return (
    <section id="reviews" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Trusted by Thousands of Travellers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our customers across Pakistan, India, Bangladesh, Sri Lanka and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={`${review.name}-${index}`}
              className="hover:shadow-lg transition-all duration-300 border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{review.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {review.location}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? "fill-gold text-gold"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
