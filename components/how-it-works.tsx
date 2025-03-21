import { Search, Home, Key, CheckCircle } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Search Properties",
      description: "Browse thousands of properties using our advanced search filters.",
    },
    {
      icon: Home,
      title: "Find Your Match",
      description: "Discover properties that match your criteria and schedule viewings.",
    },
    {
      icon: CheckCircle,
      title: "Make an Offer",
      description: "Work with agents to make competitive offers on your favorite properties.",
    },
    {
      icon: Key,
      title: "Close the Deal",
      description: "Complete the transaction securely and move into your new home.",
    },
  ]

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes finding and purchasing your dream home simple and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

