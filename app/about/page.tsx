import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Building, TrendingUp, Clock, Shield, MapPin } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "With over 15 years of experience in real estate, Sarah founded RealEstate with a vision to transform the property market through technology.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Chen",
      role: "Chief Operations Officer",
      bio: "Michael oversees all operational aspects of RealEstate, ensuring smooth transactions and exceptional customer service.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Marketing",
      bio: "Emily leads our marketing initiatives, creating innovative campaigns that connect buyers with their dream properties.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "David Wilson",
      role: "Lead Developer",
      bio: "David is the technical genius behind our platform, constantly improving our website to provide the best user experience.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const stats = [
    { label: "Properties Listed", value: "10,000+" },
    { label: "Happy Customers", value: "25,000+" },
    { label: "Cities Covered", value: "100+" },
    { label: "Years in Business", value: "15+" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <Badge className="mb-4">About Us</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">We're on a Mission to Make Finding Your Dream Home Easy</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          RealEstate is a leading property marketplace dedicated to connecting buyers, sellers, and real estate
          professionals through innovative technology and exceptional service.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/properties">
            <Button size="lg">Browse Properties</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Founded in 2008, RealEstate began with a simple idea: make the process of buying and selling properties
            transparent, efficient, and stress-free. What started as a small startup has grown into one of the most
            trusted real estate marketplaces in the country.
          </p>
          <p className="text-muted-foreground mb-4">
            Our journey has been defined by innovation and a relentless focus on customer satisfaction. We've
            continuously evolved our platform to incorporate the latest technologies while maintaining the human touch
            that real estate transactions require.
          </p>
          <p className="text-muted-foreground">
            Today, we're proud to have helped thousands of families find their perfect homes and assisted countless
            property owners in selling their investments at the best possible value.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <img
            src="/placeholder.svg?height=400&width=600"
            alt="Our office building"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-muted rounded-xl p-8 mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Over the years, we've helped thousands of people find their perfect properties and created a marketplace
            that people trust.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-sm">
              <CardContent className="p-6 text-center">
                <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These core principles guide everything we do at RealEstate.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-muted-foreground">
                We prioritize our customers' needs and strive to exceed their expectations in every interaction.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity & Trust</h3>
              <p className="text-muted-foreground">
                We operate with honesty and transparency, building trust through every transaction.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously improve our platform and services to deliver the best possible experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The passionate professionals behind RealEstate who work tirelessly to help you find your perfect property.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-square relative">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose RealEstate</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive platform with features designed to make your property journey seamless.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <CheckCircle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Extensive Property Listings</h3>
              <p className="text-muted-foreground">
                Access thousands of verified property listings across the country, updated in real-time.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <Building className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Expert Real Estate Agents</h3>
              <p className="text-muted-foreground">
                Connect with experienced agents who can guide you through every step of your property journey.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <MapPin className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Advanced Search Tools</h3>
              <p className="text-muted-foreground">
                Find exactly what you're looking for with our powerful search filters and map-based property
                exploration.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Streamlined Process</h3>
              <p className="text-muted-foreground">
                Save time with our efficient property viewing scheduling and secure transaction system.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white rounded-xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who found their perfect property through our platform.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/properties">
            <Button variant="secondary" size="lg">
              Browse Properties
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

