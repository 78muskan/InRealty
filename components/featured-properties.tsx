"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, MapPin, Bed, Bath, Square, ArrowRight } from "lucide-react"

// Sample property data
const properties = [
  {
    id: 1,
    title: "Modern Apartment in Downtown",
    price: 350000,
    location: "123 Main St, Downtown, City",
    type: "Apartment",
    status: "For Sale",
    beds: 2,
    baths: 2,
    area: 1200,
    image: "/placeholder.svg?height=300&width=500",
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
    image: "/placeholder.svg?height=300&width=500",
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
    image: "/placeholder.svg?height=300&width=500",
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
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
  },
]

export default function FeaturedProperties() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  const formatPrice = (price: number, status: string) => {
    return status === "For Rent" ? `$${price.toLocaleString()}/month` : `$${price.toLocaleString()}`
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {properties.map((property) => (
        <Card key={property.id} className="overflow-hidden group">
          <div className="relative">
            <img
              src={property.image || "/placeholder.svg"}
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
                className={`h-5 w-5 ${favorites.includes(property.id) ? "fill-red-500 text-red-500" : "text-gray-600"}`}
              />
            </Button>
            <Badge className="absolute top-2 left-2" variant={property.status === "For Rent" ? "secondary" : "default"}>
              {property.status}
            </Badge>
          </div>
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg mb-1 line-clamp-1">{property.title}</h3>
                <div className="flex items-center text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span className="text-sm line-clamp-1">{property.location}</span>
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
          </CardContent>
          <CardFooter className="p-4 pt-0 flex justify-between items-center border-t">
            <div className="font-bold text-lg">{formatPrice(property.price, property.status)}</div>
            <Link href={`/properties/${property.id}`}>
              <Button variant="ghost" size="sm" className="text-primary">
                Details <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

