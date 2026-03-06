 import { useState, useEffect } from "react";
 import { Button } from "@/components/ui/button";
 import { ChevronLeft, ChevronRight } from "lucide-react";
 import { cn } from "@/lib/utils";
 
const slides = [
   {
    url: "https://images.unsplash.com/photo-1608020932658-d0e19a69580b?fm=jpg&q=60&w=3000&auto=format&fit=crop",
    alt: "Faisal Mosque Islamabad Pakistan",
   },
   {
    url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop",
    alt: "Badshahi Mosque Lahore Pakistan",
   },
   {
    url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop",
    alt: "Taj Mahal India",
   },
   {
    url: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070&auto=format&fit=crop",
    alt: "Sydney Opera House Australia",
   },
   {
    url: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2099&auto=format&fit=crop",
    alt: "New York City skyline USA",
   },
 ];
 
 const HeroSlideshow = () => {
   const [currentSlide, setCurrentSlide] = useState(0);
 
   useEffect(() => {
     const interval = setInterval(() => {
       setCurrentSlide((prev) => (prev + 1) % slides.length);
     }, 5000);
     return () => clearInterval(interval);
   }, []);
 
   const goToSlide = (index: number) => {
     setCurrentSlide(index);
   };
 
   const goToPrevious = () => {
     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
   };
 
   const goToNext = () => {
     setCurrentSlide((prev) => (prev + 1) % slides.length);
   };
 
   return (
     <div className="absolute inset-0">
       {slides.map((slide, index) => (
         <div
           key={index}
           className={cn(
             "absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000",
             index === currentSlide ? "opacity-100" : "opacity-0"
           )}
           style={{ backgroundImage: `url('${slide.url}')` }}
           aria-hidden={index !== currentSlide}
         />
       ))}
       <div className="absolute inset-0 bg-hero-gradient" />
 
       {/* Navigation Arrows */}
       <Button
         variant="ghost"
         size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm transition-all"
         onClick={goToPrevious}
         aria-label="Previous slide"
       >
         <ChevronLeft className="h-6 w-6" />
       </Button>
       <Button
         variant="ghost"
         size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm transition-all"
         onClick={goToNext}
         aria-label="Next slide"
       >
         <ChevronRight className="h-6 w-6" />
       </Button>
 
       {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
         {slides.map((_, index) => (
           <button
             key={index}
             onClick={() => goToSlide(index)}
             className={cn(
              "w-2.5 h-2.5 rounded-full transition-all border-0 outline-none",
               index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
             )}
             aria-label={`Go to slide ${index + 1}`}
           />
         ))}
       </div>
     </div>
   );
 };
 
 export default HeroSlideshow;