"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Heart, Share, MapPin, Bed, Bath, Square, Car, CalendarIcon, Phone, Mail, MessageSquare } from "lucide-react"

// Sample property data
const property = {
  id: 1,
  title: "Modern Apartment in Downtown",
  price: 350000,
  location: "123 Main St, Downtown, City",
  type: "Apartment",
  status: "For Sale",
  beds: 2,
  baths: 2,
  area: 1200,
  garage: 1,
  yearBuilt: 2018,
  description:
    "This beautiful modern apartment is located in the heart of downtown. It features an open floor plan with high ceilings, large windows that provide plenty of natural light, and premium finishes throughout. The kitchen is equipped with stainless steel appliances, quartz countertops, and custom cabinetry. The primary bedroom has a walk-in closet and an en-suite bathroom with a double vanity and a walk-in shower. The second bedroom is spacious and can also be used as a home office. The building offers amenities such as a fitness center, rooftop terrace, and 24-hour concierge service. Conveniently located near restaurants, shops, and public transportation.",
  features: [
    "Central Air Conditioning",
    "Hardwood Floors",
    "Walk-in Closet",
    "Stainless Steel Appliances",
    "Quartz Countertops",
    "In-unit Laundry",
    "Balcony",
    "Fitness Center",
    "Rooftop Terrace",
    "24-hour Concierge",
    "Pet Friendly",
    "Elevator",
  ],
  images: [
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ],
  agent: {
    name: "John Smith",
    phone: "(555) 123-4567",
    email: "john@realestate.com",
    image: "/placeholder.svg?height=100&width=100",
  },
}

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [date, setDate] = useState<Date | undefined>(undefined)

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-2 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Link href="/properties" className="text-primary hover:underline">
              Properties
            </Link>
            <span>/</span>
            <span className="text-muted-foreground">{property.type}</span>
          </div>
          <h1 className="text-3xl font-bold">{property.title}</h1>
          <div className="flex items-center text-muted-foreground mt-1">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{property.location}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <Button variant="outline" size="icon" onClick={toggleFavorite} className={isFavorite ? "text-red-500" : ""}>
            <Heart className={isFavorite ? "fill-red-500" : ""} />
          </Button>
          <Button variant="outline" size="icon">
            <Share />
          </Button>
          <Button>Contact Agent</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <Carousel className="w-full">
              <CarouselContent>
                {property.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative h-[300px] md:h-[500px] w-full">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Property image ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <Badge
                        className="absolute top-4 left-4"
                        variant={property.status === "For Rent" ? "secondary" : "default"}
                      >
                        {property.status}
                      </Badge>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-muted rounded-lg p-4 flex flex-col items-center">
              <Bed className="h-6 w-6 mb-2 text-primary" />
              <span className="text-lg font-semibold">{property.beds}</span>
              <span className="text-sm text-muted-foreground">Bedrooms</span>
            </div>
            <div className="bg-muted rounded-lg p-4 flex flex-col items-center">
              <Bath className="h-6 w-6 mb-2 text-primary" />
              <span className="text-lg font-semibold">{property.baths}</span>
              <span className="text-sm text-muted-foreground">Bathrooms</span>
            </div>
            <div className="bg-muted rounded-lg p-4 flex flex-col items-center">
              <Square className="h-6 w-6 mb-2 text-primary" />
              <span className="text-lg font-semibold">{property.area}</span>
              <span className="text-sm text-muted-foreground">Sq Ft</span>
            </div>
            <div className="bg-muted rounded-lg p-4 flex flex-col items-center">
              <Car className="h-6 w-6 mb-2 text-primary" />
              <span className="text-lg font-semibold">{property.garage}</span>
              <span className="text-sm text-muted-foreground">Garage</span>
            </div>
          </div>

          <Tabs defaultValue="details">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="map">Map</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Property Details</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    <div>
                      <p className="text-muted-foreground">Property Type</p>
                      <p className="font-medium">{property.type}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Status</p>
                      <p className="font-medium">{property.status}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Year Built</p>
                      <p className="font-medium">{property.yearBuilt}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Description</h3>
                  <p className="text-muted-foreground whitespace-pre-line">{property.description}</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="features" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Property Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-primary mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="map" className="mt-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Location</h3>
                  <div className="bg-muted h-[400px] rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-lg font-medium">Map View</p>
                      <p className="text-muted-foreground">Interactive map would be displayed here.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">
                  {property.status === "For Rent"
                    ? `$${property.price.toLocaleString()}/month`
                    : `$${property.price.toLocaleString()}`}
                </h3>
                <Badge variant={property.status === "For Rent" ? "secondary" : "default"}>{property.status}</Badge>
              </div>
              <div className="space-y-4">
                <div className="relative">
                  <div className="flex items-center">
                    <CalendarIcon className="h-5 w-5 text-muted-foreground mr-2" />
                    <span className="font-medium">Schedule a Tour</span>
                  </div>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="mt-2 border rounded-md"
                    disabled={(date) => date < new Date()}
                  />
                </div>
                <Button className="w-full">Schedule Viewing</Button>
                <Button variant="outline" className="w-full">
                  Request Info
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Listing Agent</h3>
              <div className="flex items-center mb-4">
                <img
                  src={property.agent.image || "/placeholder.svg"}
                  alt={property.agent.name}
                  className="h-16 w-16 rounded-full mr-4"
                />
                <div>
                  <p className="font-medium">{property.agent.name}</p>
                  <p className="text-muted-foreground text-sm">Real Estate Agent</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-muted-foreground mr-2" />
                  <span>{property.agent.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-muted-foreground mr-2" />
                  <span>{property.agent.email}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <Button className="w-full flex items-center justify-center">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Contact Agent
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Similar Properties</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex gap-3">
                    <img
                      src="/placeholder.svg?height=80&width=120"
                      alt="Property"
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div>
                      <p className="font-medium text-sm line-clamp-1">Similar Property {item}</p>
                      <p className="text-muted-foreground text-xs">{property.location}</p>
                      <p className="text-primary text-sm font-medium mt-1">$325,000</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

