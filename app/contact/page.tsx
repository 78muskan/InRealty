"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: "general",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    }, 1500)
  }

  const officeLocations = [
    {
      name: "Headquarters",
      address: "123 Real Estate Ave, Property City, 12345",
      phone: "+1 (555) 123-4567",
      email: "info@realestate.com",
      hours: "Monday - Friday: 9AM - 6PM\nSaturday: 10AM - 4PM\nSunday: Closed",
    },
    {
      name: "Downtown Office",
      address: "456 Main Street, Downtown, 67890",
      phone: "+1 (555) 987-6543",
      email: "downtown@realestate.com",
      hours: "Monday - Friday: 9AM - 6PM\nSaturday: 10AM - 4PM\nSunday: Closed",
    },
    {
      name: "Suburban Branch",
      address: "789 Suburb Lane, Suburbia, 54321",
      phone: "+1 (555) 456-7890",
      email: "suburban@realestate.com",
      hours: "Monday - Friday: 9AM - 6PM\nSaturday: 10AM - 4PM\nSunday: Closed",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have questions about a property or need assistance? Our team is here to help. Reach out to us using the form
          below or visit one of our offices.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {officeLocations.map((office, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">{office.name}</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <span>{office.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <span>{office.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <span>{office.email}</span>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div className="whitespace-pre-line">{office.hours}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

          {isSuccess && (
            <Alert className="mb-6 bg-green-50 border-green-200">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-600">Message Sent!</AlertTitle>
              <AlertDescription>
                Thank you for contacting us. We've received your message and will get back to you shortly.
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="inquiryType">Inquiry Type</Label>
              <RadioGroup
                value={formData.inquiryType}
                onValueChange={(value) => handleSelectChange("inquiryType", value)}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="general" id="general" />
                  <Label htmlFor="general">General Inquiry</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="property" id="property" />
                  <Label htmlFor="property">Property Specific</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="agent" id="agent" />
                  <Label htmlFor="agent">Speak with an Agent</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="support" id="support" />
                  <Label htmlFor="support">Technical Support</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="How can we help you?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Please provide details about your inquiry..."
                className="min-h-[150px]"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <span className="flex items-center">
                  <span className="mr-2">Sending...</span>
                </span>
              ) : (
                <span className="flex items-center">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </span>
              )}
            </Button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">How do I schedule a property viewing?</h3>
              <p className="text-muted-foreground">
                You can schedule a viewing directly through our website by clicking the "Schedule Viewing" button on any
                property listing. Alternatively, you can contact our agents directly using the contact form.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What documents do I need to sell my property?</h3>
              <p className="text-muted-foreground">
                To list your property, you'll need proof of ownership, property tax records, floor plans (if available),
                and high-quality photos. Our agents can help you gather all necessary documentation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">How long does the buying process take?</h3>
              <p className="text-muted-foreground">
                The timeline varies depending on various factors, but typically the process takes 30-60 days from offer
                acceptance to closing. Our agents will guide you through each step to ensure a smooth transaction.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Do you offer virtual tours?</h3>
              <p className="text-muted-foreground">
                Yes, many of our listings include virtual tours. Look for the "Virtual Tour" badge on property listings
                or contact an agent to request a virtual showing for any property.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">What are the fees for selling a property?</h3>
              <p className="text-muted-foreground">
                Our standard commission is competitive with market rates. Please contact us directly for a detailed
                breakdown of fees, as they may vary based on property type and location.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-muted rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Need Immediate Assistance?</h3>
            <p className="text-muted-foreground mb-4">
              Our customer support team is available during business hours to assist you with any urgent inquiries.
            </p>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-primary mr-3" />
              <span className="font-medium">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Find Us</h2>
        <div className="bg-muted h-[400px] rounded-lg flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-lg font-medium">Interactive Map</p>
            <p className="text-muted-foreground">
              An interactive map showing our office locations would be displayed here.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

