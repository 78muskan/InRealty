import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Building, DollarSign } from "lucide-react";
import FeaturedProperties from "@/components/featured-properties";
import HeroSection from "@/components/hero-section";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Quick Search */}
      <div className="container mx-auto px-4 py-8 -mt-16 relative z-10">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Location" className="pl-10 bg-background" />
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <Building className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <select className="w-full h-10 pl-10 pr-4 rounded-md border border-input bg-background">
                  <option value="">Property Type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="land">Land</option>
                  <option value="land">Rent</option>
                </select>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <select className="w-full h-10 pl-10 pr-4 rounded-md border border-input bg-background">
                  <option value="">Price Range</option>
                  <option value="0-100000">$0 - $100,000</option>
                  <option value="100000-300000">$100,000 - $300,000</option>
                  <option value="300000-500000">$300,000 - $500,000</option>
                  <option value="500000+">$500,000+</option>
                </select>
              </div>
            </div>
            <Button className="bg-primary text-white">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Properties</h2>
          <Link href="/properties">
            <Button variant="outline">View All</Button>
          </Link>
        </div>
        <FeaturedProperties />
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their perfect
            property through our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/properties">
              <Button variant="secondary" size="lg">
                Browse Properties
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border-white"
              >
                Sign Up Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
