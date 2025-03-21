import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=800&width=1600')",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 md:py-48 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Find Your Dream Home
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Discover thousands of properties for sale and rent across the
            country. Our platform makes it easy to find your perfect home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/properties">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Browse Properties
              </Button>
            </Link>
            <Link href="/sell">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white/20"
              >
                List Your Property
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
