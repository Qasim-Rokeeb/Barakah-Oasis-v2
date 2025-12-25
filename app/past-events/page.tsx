import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"

const pastEvents = [
  {
    id: 1,
    title: "Ramadan Iftar Distribution 2024",
    date: "March 2024",
    location: "Lagos, Nigeria",
    beneficiaries: 1500,
    description:
      "Successfully distributed iftar meals to over 1,500 fasting individuals across 5 communities in Lagos during the holy month of Ramadan.",
    imageUrl: "/ramadan-iftar-food-distribution-community-gatherin.jpg",
    impact: "15,000 meals served, 30 volunteers participated",
  },
  {
    id: 2,
    title: "iCare for Elderly Program Launch",
    date: "January 2024",
    location: "Kano, Nigeria",
    beneficiaries: 150,
    description:
      "Launched our iCare initiative providing food, basic needs, and loan offsets to elderly community members who felt forgotten and alone.",
    imageUrl: "/ramadan-iftar-food-distribution-community-gatherin.jpg",
    impact: "150 elders supported monthly, dignity restored",
  },
  {
    id: 3,
    title: "Feed a Fasting Student Initiative",
    date: "March 2023",
    location: "Abuja, Nigeria",
    beneficiaries: 300,
    description:
      "Stood with students balancing faith and study during Ramadan, ensuring that hunger never stood between them and their worship.",
    imageUrl: "/laptop-student-technology-education-programming-af.jpg",
    impact: "300 students supported throughout Ramadan",
  },
  {
    id: 4,
    title: "Community Iftar Gathering",
    date: "April 2023",
    location: "Port Harcourt, Nigeria",
    beneficiaries: 500,
    description:
      "Organized a special community iftar bringing together Muslims from different backgrounds to break fast together in unity.",
    imageUrl: "/ramadan-iftar-meal-food-distribution-charity-niger.jpg",
    impact: "500 meals served, community bonds strengthened",
  },
  {
    id: 5,
    title: "Emergency Relief Distribution",
    date: "June 2023",
    location: "Kaduna, Nigeria",
    beneficiaries: 200,
    description:
      "Provided emergency food packages and basic necessities to families affected by economic hardship in Kaduna communities.",
    imageUrl: "/ramadan-iftar-food-distribution-community-gatherin.jpg",
    impact: "200 families supported with essential supplies",
  },
  {
    id: 6,
    title: "Ramadan Food Package Distribution",
    date: "March 2022",
    location: "Multiple Cities",
    beneficiaries: 400,
    description:
      "Distributed comprehensive food packages to families across Nigeria to support them throughout the blessed month of Ramadan.",
    imageUrl: "/food-package-distribution-charity-ramadan-bags-gro.jpg",
    impact: "400 families supported, food packages lasted entire month",
  },
]

export default function PastEventsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Button variant="ghost" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Our Past Events</h1>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              A testament to the impact we've made together. Every event represents lives changed, communities
              strengthened, and blessings multiplied.
            </p>
          </div>
        </div>
      </section>

      {/* Past Events Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
            {pastEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={event.imageUrl || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-balance">{event.title}</h3>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{event.beneficiaries.toLocaleString()} beneficiaries</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{event.description}</p>

                  <div className="bg-primary/5 rounded-lg p-3 border border-primary/10">
                    <p className="text-sm font-medium text-primary">Impact: {event.impact}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-balance">Be Part of Our Next Success Story</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
            Your contribution today creates the impact stories of tomorrow. Join us in transforming more lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/#donate">Donate Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/#volunteer">Volunteer With Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
