"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  BarChart,
  Building,
  DollarSign,
  Home,
  Search,
  Users,
  MessageSquare,
  AlertCircle,
  CheckCircle,
  Clock,
  X,
} from "lucide-react"
import AdminSidebar from "@/components/admin-sidebar"

// Sample data
const properties = [
  {
    id: 1,
    title: "Modern Apartment in Downtown",
    price: 350000,
    location: "Downtown, City",
    type: "Apartment",
    status: "Active",
    date: "2023-05-15",
    owner: "John Smith",
  },
  {
    id: 2,
    title: "Luxury Villa with Pool",
    price: 1250000,
    location: "Beachside, City",
    type: "Villa",
    status: "Pending",
    date: "2023-05-10",
    owner: "Sarah Johnson",
  },
  {
    id: 3,
    title: "Cozy Studio in Arts District",
    price: 1800,
    location: "Arts District, City",
    type: "Studio",
    status: "Inactive",
    date: "2023-05-05",
    owner: "Michael Chen",
  },
  {
    id: 4,
    title: "Family Home with Garden",
    price: 550000,
    location: "Suburbs, City",
    type: "House",
    status: "Active",
    date: "2023-05-01",
    owner: "Emily Rodriguez",
  },
  {
    id: 5,
    title: "Penthouse with City Views",
    price: 850000,
    location: "Downtown, City",
    type: "Penthouse",
    status: "Active",
    date: "2023-04-28",
    owner: "David Wilson",
  },
]

const users = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    role: "Buyer",
    status: "Active",
    joined: "2023-01-15",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "Seller",
    status: "Active",
    joined: "2023-02-20",
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "michael@example.com",
    role: "Agent",
    status: "Active",
    joined: "2023-03-10",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    email: "emily@example.com",
    role: "Buyer",
    status: "Inactive",
    joined: "2023-04-05",
  },
  {
    id: 5,
    name: "David Wilson",
    email: "david@example.com",
    role: "Seller",
    status: "Active",
    joined: "2023-05-01",
  },
]

const inquiries = [
  {
    id: 1,
    property: "Modern Apartment in Downtown",
    user: "John Smith",
    date: "2023-05-15",
    status: "New",
    message: "I'm interested in scheduling a viewing for this property.",
  },
  {
    id: 2,
    property: "Luxury Villa with Pool",
    user: "Sarah Johnson",
    date: "2023-05-14",
    status: "Responded",
    message: "What are the HOA fees for this property?",
  },
  {
    id: 3,
    property: "Cozy Studio in Arts District",
    user: "Michael Chen",
    date: "2023-05-13",
    status: "Closed",
    message: "Is the rent negotiable for a longer lease term?",
  },
  {
    id: 4,
    property: "Family Home with Garden",
    user: "Emily Rodriguez",
    date: "2023-05-12",
    status: "New",
    message: "Are pets allowed in this property?",
  },
  {
    id: 5,
    property: "Penthouse with City Views",
    user: "David Wilson",
    date: "2023-05-11",
    status: "Responded",
    message: "Is parking included with this property?",
  },
]

export default function AdminDashboard() {
  const [isClient, setIsClient] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsClient(true)
    // Check if user is admin
    const user = localStorage.getItem("user")
    if (!user) {
      router.push("/auth/login")
      return
    }

    const userData = JSON.parse(user)
    if (userData.role !== "admin") {
      router.push("/")
    }
  }, [router])

  if (!isClient) {
    return null
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
            <CheckCircle className="h-3 w-3 mr-1" /> {status}
          </Badge>
        )
      case "Pending":
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-600 border-yellow-200">
            <Clock className="h-3 w-3 mr-1" /> {status}
          </Badge>
        )
      case "Inactive":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200">
            <X className="h-3 w-3 mr-1" /> {status}
          </Badge>
        )
      case "New":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
            <AlertCircle className="h-3 w-3 mr-1" /> {status}
          </Badge>
        )
      case "Responded":
        return (
          <Badge variant="outline" className="bg-purple-50 text-purple-600 border-purple-200">
            <MessageSquare className="h-3 w-3 mr-1" /> {status}
          </Badge>
        )
      case "Closed":
        return (
          <Badge variant="outline" className="bg-gray-50 text-gray-600 border-gray-200">
            <CheckCircle className="h-3 w-3 mr-1" /> {status}
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="flex min-h-screen bg-muted/40">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, Admin. Here's what's happening with your platform today.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-10 w-64" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Properties</p>
                <h3 className="text-3xl font-bold">156</h3>
                <p className="text-green-600 text-sm">+12% from last month</p>
              </div>
              <div className="bg-primary/10 p-3 rounded-full">
                <Building className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Users</p>
                <h3 className="text-3xl font-bold">2,845</h3>
                <p className="text-green-600 text-sm">+5% from last month</p>
              </div>
              <div className="bg-primary/10 p-3 rounded-full">
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Total Revenue</p>
                <h3 className="text-3xl font-bold">$125,430</h3>
                <p className="text-green-600 text-sm">+18% from last month</p>
              </div>
              <div className="bg-primary/10 p-3 rounded-full">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm">Active Listings</p>
                <h3 className="text-3xl font-bold">98</h3>
                <p className="text-red-600 text-sm">-3% from last month</p>
              </div>
              <div className="bg-primary/10 p-3 rounded-full">
                <Home className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="properties" className="space-y-4">
          <TabsList>
            <TabsTrigger value="properties">Properties</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="properties" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Properties</CardTitle>
                <Button>Add Property</Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Owner</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {properties.map((property) => (
                      <TableRow key={property.id}>
                        <TableCell>{property.id}</TableCell>
                        <TableCell className="font-medium">{property.title}</TableCell>
                        <TableCell>${property.price.toLocaleString()}</TableCell>
                        <TableCell>{property.location}</TableCell>
                        <TableCell>{property.type}</TableCell>
                        <TableCell>{getStatusBadge(property.status)}</TableCell>
                        <TableCell>{property.owner}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-500">
                              Delete
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Users</CardTitle>
                <Button>Add User</Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Joined</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>{getStatusBadge(user.status)}</TableCell>
                        <TableCell>{user.joined}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-500">
                              Delete
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inquiries" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Inquiries</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Property</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {inquiries.map((inquiry) => (
                      <TableRow key={inquiry.id}>
                        <TableCell>{inquiry.id}</TableCell>
                        <TableCell className="font-medium">{inquiry.property}</TableCell>
                        <TableCell>{inquiry.user}</TableCell>
                        <TableCell>{inquiry.date}</TableCell>
                        <TableCell>{getStatusBadge(inquiry.status)}</TableCell>
                        <TableCell className="max-w-xs truncate">{inquiry.message}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              Reply
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-500">
                              Delete
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
              </CardHeader>
              <CardContent className="h-96 flex items-center justify-center">
                <div className="text-center">
                  <BarChart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-medium mb-2">Analytics Dashboard</h3>
                  <p className="text-muted-foreground">Detailed analytics and reporting would be displayed here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

