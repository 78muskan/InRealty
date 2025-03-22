"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Heart,
  MapPin,
  Bed,
  Bath,
  Square,
  Search,
  Filter,
  Grid,
  List,
  X,
} from "lucide-react";

// Sample property data
const properties = [
  {
    id: 1,
    title: "Modern Apartment in Dehradun",
    price: 350000,
    location: "123 Main St, Dehradun, City",
    type: "Apartment",
    status: "For Sale",
    beds: 2,
    baths: 2,
    area: 1200,
    image: "/pexels-binyaminmellish-186077.jpg?height=300&width=500",
    featured: true,
  },
  {
    id: 2,
    title: "Luxury Villa with Pool",
    price: 1250000,
    location: "456 Ocean Ave, Beachside, City",
    type: "Villa",
    status: "For Sale",
    beds: 5,
    baths: 4,
    area: 3500,
    image: "/pexels-binyaminmellish-186077.jpg?height=300&width=500",
    featured: true,
  },
  {
    id: 3,
    title: "Cozy Studio in Arts District",
    price: 1800,
    location: "789 Arts Blvd, Arts District, City",
    type: "Studio",
    status: "For Rent",
    beds: 1,
    baths: 1,
    area: 650,
    image: "/pexels-binyaminmellish-186077.jpg?height=300&width=500",
    featured: true,
  },
  {
    id: 4,
    title: "Family Home with Garden",
    price: 550000,
    location: "101 Family Lane, Suburbs, City",
    type: "House",
    status: "For Sale",
    beds: 4,
    baths: 3,
    area: 2200,
    image: "/pexels-binyaminmellish-186077.jpg?height=300&width=500",
    featured: true,
  },
  {
    id: 5,
    title: "Penthouse with City Views",
    price: 850000,
    location: "202 Skyline Blvd, Dehradun, City",
    type: "Penthouse",
    status: "For Sale",
    beds: 3,
    baths: 3,
    area: 1800,
    image: "/pexels-binyaminmellish-186077.jpg?height=300&width=500",
    featured: false,
  },
  {
    id: 6,
    title: "Renovated Loft in Historic Building",
    price: 425000,
    location: "303 Heritage St, Dehradun, City",
    type: "Loft",
    status: "For Sale",
    beds: 1,
    baths: 2,
    area: 1100,
    image: "/pexels-binyaminmellish-186077.jpg?height=300&width=500",
    featured: false,
  },
  {
    id: 7,
    title: "Waterfront Condo with Marina Access",
    price: 2500,
    location: "404 Harbor Dr, Marina District, City",
    type: "Condo",
    status: "For Rent",
    beds: 2,
    baths: 2,
    area: 1300,
    image: "/pexels-binyaminmellish-186077.jpg?height=300&width=500",
    featured: false,
  },
  {
    id: 8,
    title: "Mountain View Cabin",
    price: 320000,
    location: "505 Mountain Rd, Highland, City",
    type: "Cabin",
    status: "For Sale",
    beds: 3,
    baths: 1,
    area: 1000,
    image: "/pexels-binyaminmellish-186077.jpg?height=300&width=500",
    featured: false,
  },
];

export default function PropertiesPage() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000000]);
  const [filterOpen, setFilterOpen] = useState(false);

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const formatPrice = (price: number, status: string) => {
    return status === "For Rent"
      ? `₹${price.toLocaleString()}/month`
      : `₹${price.toLocaleString()}`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Filters Sidebar */}
        <div
          className={`w-full md:w-1/4 bg-background rounded-lg border p-4 ${
            filterOpen ? "block" : "hidden md:block"
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Filters</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setFilterOpen(false)}
              className="md:hidden"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Property Type</h3>
              <div className="space-y-2">
                {["House", "Apartment", "Condo", "Villa", "Studio", "Land"].map(
                  (type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox id={`type-${type}`} />
                      <Label htmlFor={`type-${type}`}>{type}</Label>
                    </div>
                  )
                )}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Price Range</h3>
              <div className="space-y-4">
                <Slider
                  defaultValue={[0, 2000000]}
                  max={2000000}
                  step={10000}
                  value={priceRange}
                  onValueChange={(value) =>
                    setPriceRange(value as [number, number])
                  }
                />
                <div className="flex justify-between">
                  <span>${priceRange[0].toLocaleString()}</span>
                  <span>${priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Bedrooms</h3>
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, "5+"].map((num) => (
                  <Button
                    key={num}
                    variant="outline"
                    size="sm"
                    className="rounded-full"
                  >
                    {num}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Bathrooms</h3>
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, "4+"].map((num) => (
                  <Button
                    key={num}
                    variant="outline"
                    size="sm"
                    className="rounded-full"
                  >
                    {num}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Features</h3>
              <div className="space-y-2">
                {[
                  "Garage",
                  "Pool",
                  "Garden",
                  "Balcony",
                  "Fireplace",
                  "Air Conditioning",
                ].map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <Checkbox id={`feature-${feature}`} />
                    <Label htmlFor={`feature-${feature}`}>{feature}</Label>
                  </div>
                ))}
              </div>
            </div>

            <Button className="w-full">Apply Filters</Button>
          </div>
        </div>

        {/* Properties List */}
        <div className="w-full md:w-3/4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <div className="w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search properties..." className="pl-10" />
              </div>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto">
              <Button
                variant="outline"
                size="sm"
                className="md:hidden flex items-center gap-2"
                onClick={() => setFilterOpen(true)}
              >
                <Filter className="h-4 w-4" />
                Filters
              </Button>

              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex border rounded-md">
                <Button
                  variant="ghost"
                  size="icon"
                  className={viewMode === "grid" ? "bg-muted" : ""}
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className={viewMode === "list" ? "bg-muted" : ""}
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <Card key={property.id} className="overflow-hidden group">
                  <div className="relative">
                    <img
                      src={property.image || "/pexels-binyaminmellish-186077.jpg"}
                      alt={property.title}
                      className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
                      onClick={() => toggleFavorite(property.id)}
                    >
                      <Heart
                        className={`h-5 w-5 ${
                          favorites.includes(property.id)
                            ? "fill-red-500 text-red-500"
                            : "text-gray-600"
                        }`}
                      />
                    </Button>
                    <Badge
                      className="absolute top-2 left-2"
                      variant={
                        property.status === "For Rent" ? "secondary" : "default"
                      }
                    >
                      {property.status}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg mb-1 line-clamp-1">
                          {property.title}
                        </h3>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                          <span className="text-sm line-clamp-1">
                            {property.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-4 text-sm">
                      <div className="flex items-center">
                        <Bed className="h-4 w-4 mr-1" />
                        <span>{property.beds} Beds</span>
                      </div>
                      <div className="flex items-center">
                        <Bath className="h-4 w-4 mr-1" />
                        <span>{property.baths} Baths</span>
                      </div>
                      <div className="flex items-center">
                        <Square className="h-4 w-4 mr-1" />
                        <span>{property.area} sqft</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t flex justify-between items-center">
                      <div className="font-bold text-lg">
                        {formatPrice(property.price, property.status)}
                      </div>
                      <Button size="sm">View Details</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {properties.map((property) => (
                <Card key={property.id} className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative md:w-1/3">
                      <img
                        src={property.image || "/pexels-binyaminmellish-186077.jpg"}
                        alt={property.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
                        onClick={() => toggleFavorite(property.id)}
                      >
                        <Heart
                          className={`h-5 w-5 ${
                            favorites.includes(property.id)
                              ? "fill-red-500 text-red-500"
                              : "text-gray-600"
                          }`}
                        />
                      </Button>
                      <Badge
                        className="absolute top-2 left-2"
                        variant={
                          property.status === "For Rent"
                            ? "secondary"
                            : "default"
                        }
                      >
                        {property.status}
                      </Badge>
                    </div>
                    <CardContent className="p-4 md:w-2/3 flex flex-col">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">
                          {property.title}
                        </h3>
                        <div className="flex items-center text-muted-foreground mb-4">
                          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                          <span className="text-sm">{property.location}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center">
                          <Bed className="h-4 w-4 mr-1" />
                          <span>{property.beds} Beds</span>
                        </div>
                        <div className="flex items-center">
                          <Bath className="h-4 w-4 mr-1" />
                          <span>{property.baths} Baths</span>
                        </div>
                        <div className="flex items-center">
                          <Square className="h-4 w-4 mr-1" />
                          <span>{property.area} sqft</span>
                        </div>
                      </div>
                      <div className="mt-auto pt-4 border-t flex justify-between items-center">
                        <div className="font-bold text-lg">
                          {formatPrice(property.price, property.status)}
                        </div>
                        <Button>View Details</Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          )}

          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
