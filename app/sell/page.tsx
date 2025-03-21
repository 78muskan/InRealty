"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, DollarSign, Home, MapPin, Info, Check } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function SellPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [propertyType, setPropertyType] = useState("")
  const [listingType, setListingType] = useState("sale")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Redirect after showing success message
      setTimeout(() => {
        router.push("/dashboard")
      }, 3000)
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">List Your Property</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Complete the form below to list your property on our marketplace. Our team will review your submission and
            get back to you within 24 hours.
          </p>
        </div>

        {isSuccess ? (
          <Alert className="bg-green-50 border-green-200 mb-8">
            <Check className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-600">Success!</AlertTitle>
            <AlertDescription>
              Your property has been submitted successfully. Our team will review your listing and contact you shortly.
              Redirecting to your dashboard...
            </AlertDescription>
          </Alert>
        ) : null}

        <form onSubmit={handleSubmit}>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Home className="mr-2 h-5 w-5 text-primary" />
                Property Information
              </CardTitle>
              <CardDescription>Provide basic information about your property</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Property Title</Label>
                  <Input id="title" placeholder="e.g. Modern Apartment in Downtown" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="property-type">Property Type</Label>
                  <Select onValueChange={setPropertyType} required>
                    <SelectTrigger id="property-type">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                      <SelectItem value="land">Land</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Listing Type</Label>
                <RadioGroup defaultValue="sale" onValueChange={setListingType} className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sale" id="sale" />
                    <Label htmlFor="sale">For Sale</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="rent" id="rent" />
                    <Label htmlFor="rent">For Rent</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="price">{listingType === "rent" ? "Monthly Rent" : "Price"}</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input id="price" type="number" className="pl-10" placeholder="0" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bedrooms">Bedrooms</Label>
                  <Select>
                    <SelectTrigger id="bedrooms">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">Studio</SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bathrooms">Bathrooms</Label>
                  <Select>
                    <SelectTrigger id="bathrooms">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="1.5">1.5</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="2.5">2.5</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="3.5">3.5</SelectItem>
                      <SelectItem value="4">4+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="size">Property Size (sq ft)</Label>
                  <Input id="size" type="number" placeholder="0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year-built">Year Built</Label>
                  <Input id="year-built" type="number" placeholder="e.g. 2010" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Property Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your property in detail..."
                  className="min-h-[150px]"
                  required
                />
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-primary" />
                Location
              </CardTitle>
              <CardDescription>Provide the location details of your property</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="address">Street Address</Label>
                <Input id="address" placeholder="e.g. 123 Main St" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="e.g. New York" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State/Province</Label>
                  <Input id="state" placeholder="e.g. NY" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">Zip/Postal Code</Label>
                  <Input id="zip" placeholder="e.g. 10001" required />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Info className="mr-2 h-5 w-5 text-primary" />
                Features & Amenities
              </CardTitle>
              <CardDescription>Select the features and amenities available in your property</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  "Air Conditioning",
                  "Heating",
                  "Balcony",
                  "Pool",
                  "Garden",
                  "Garage",
                  "Parking",
                  "Elevator",
                  "Fireplace",
                  "Gym",
                  "Security System",
                  "Washer/Dryer",
                  "Furnished",
                  "Pet Friendly",
                  "Wheelchair Access",
                ].map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <Checkbox id={`feature-${feature}`} />
                    <Label htmlFor={`feature-${feature}`}>{feature}</Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="mr-2 h-5 w-5 text-primary" />
                Photos & Media
              </CardTitle>
              <CardDescription>Upload photos and videos of your property (minimum 3 photos)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="border-2 border-dashed rounded-lg p-10 text-center">
                <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">Drag & drop your files here</h3>
                <p className="text-muted-foreground mb-4">or click to browse (max 10MB per file)</p>
                <Button type="button">Upload Files</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Terms & Conditions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" required />
                <div>
                  <Label htmlFor="terms" className="font-medium">
                    I agree to the terms and conditions
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    By submitting this form, I confirm that all information provided is accurate and I have the legal
                    right to list this property.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox id="contact" defaultChecked />
                <div>
                  <Label htmlFor="contact" className="font-medium">
                    I agree to be contacted by potential buyers
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    I consent to receive inquiries from interested parties via email, phone, or messaging.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Property"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

