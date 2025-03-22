import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Download, FileText, Pencil } from "lucide-react"
import Navbar from "@/components/navbar"

export default function ContractGeneratorPage() {
  return (
    <div className="min-h-screen flex flex-col">

      <div className="flex-1 container mx-auto py-10 px-4 md:px-6 lg:px-8 max-w-6xl">
        <h1 className="text-3xl font-bold mb-8 text-slate-900">Contract Generator</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contract Form */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <FileText className="mr-2 h-5 w-5 text-blue-600" />
              Contract Details
            </h2>

            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="contract-type">Contract Type</Label>
                <Select>
                  <SelectTrigger id="contract-type">
                    <SelectValue placeholder="Select contract type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="service">Service Agreement</SelectItem>
                    <SelectItem value="rental">Property Rental Agreement</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="client-name">Client/Party Name</Label>
                <Input id="client-name" placeholder="Enter client or party name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="payment-terms">Payment Terms</Label>
                <Input id="payment-terms" placeholder="e.g., Net 30, Monthly, etc." />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline">Timeline/Duration</Label>
                <Input id="timeline" placeholder="e.g., 6 months, 1 year, etc." />
              </div>

              <div className="space-y-2">
                <Label htmlFor="special-clauses">Special Clauses (Optional)</Label>
                <Textarea
                  id="special-clauses"
                  placeholder="Enter any special terms or clauses you'd like to include"
                  rows={4}
                />
              </div>

              <Button type="button" className="w-full bg-blue-600 hover:bg-blue-700">
                Generate Contract
              </Button>
            </form>
          </Card>

          {/* Contract Preview */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center">
              <FileText className="mr-2 h-5 w-5 text-blue-600" />
              Contract Preview
            </h2>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 h-[400px] overflow-y-auto mb-6">
              <div className="text-center text-slate-500 h-full flex items-center justify-center">
                <p>Your contract preview will appear here after generation</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" className="flex-1" disabled>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
              <Button variant="outline" className="flex-1" disabled>
                <Download className="mr-2 h-4 w-4" />
                Download DOCX
              </Button>
              <Button variant="outline" className="flex-1" disabled>
                <Pencil className="mr-2 h-4 w-4" />
                Edit Contract
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

                                   