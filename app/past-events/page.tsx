import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"

const pastEvents = [
  {
    id: 1,
    title: "Debt Relief & Medical Support",
    date: "2025",
    location: "Bauchi · Zaria · Lagos · Ilorin · Ibadan",
    beneficiaries: "10+ people and hospital patients",
    description:
      "Foodstuffs for elders, medical bills settled in Lagos University Teaching Hospital and Ilorin General Hospital, debts cleared for a late Muslim woman's family, and support for an elderly woman in Ibadan.",
    imageUrl: "/community-care-nigeria-health-support.jpg",
    impact: "Multi-city aid combining food security with critical healthcare",
  },
  {
    id: 2,
    title: "Ramadan Family Support",
    date: "2024",
    location: "Ilorin, Kwara State",
    beneficiaries: 20,
    description:
      "Foodstuffs and cash assistance delivered to less-privileged families in Ilorin to help them observe Ramadan with dignity.",
    imageUrl: "/ramadan-food-relief-ilorin-families.jpg",
    impact: "15–20 families equipped with food staples and stipends",
  },
  {
    id: 3,
    title: "Feed a Fasting Muslim",
    date: "2023",
    location: "Ibadan · Lagos · Ilorin",
    beneficiaries: "100+ fasting Muslims",
    description:
      "Purchased and distributed foodstuffs to fasting Muslims across three cities, ensuring they could break their fasts without hardship.",
    imageUrl: "/ramadan-iftar-multi-city-nigeria.jpg",
    impact: "Expanded reach beyond Kwara to Oyo and Lagos",
  },
  {
    id: 4,
    title: "Feed a Fasting Student & Orphans",
    date: "2022",
    location: "University of Ilorin · Ilorin Orphanage",
    beneficiaries: 150,
    description:
      "Provided iftar meals to fasting students at the University of Ilorin and delivered foodstuffs to an orphanage home in Ilorin.",
    imageUrl: "/ramadan-students-orphanage-support-ilorin.jpg",
    impact: "150+ students and orphans reached with Ramadan meals",
  },
  {
    id: 5,
    title: "Feed a Fasting Student",
    date: "2021",
    location: "University of Ilorin · Tanke, Ilorin",
    beneficiaries: 150,
    description:
      "Served iftar meals to fasting Muslim students and extended support to needy neighbors on the streets of Tanke, Ilorin.",
    imageUrl: "/ramadan-iftar-students-ilorin-street-relief.jpg",
    impact: "150+ students and community members supported",
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
            {pastEvents.map((event) => {
              const beneficiaryLabel =
                typeof event.beneficiaries === "number"
                  ? `${event.beneficiaries.toLocaleString()} beneficiaries`
                  : `${event.beneficiaries}`

              return (
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
                      <span>{beneficiaryLabel}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{event.description}</p>

                  <div className="bg-primary/5 rounded-lg p-3 border border-primary/10">
                    <p className="text-sm font-medium text-primary">Impact: {event.impact}</p>
                  </div>
                </div>
              </Card>
              )
            })}
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
