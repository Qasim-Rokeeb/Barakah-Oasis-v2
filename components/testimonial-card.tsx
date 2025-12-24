import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  name: string
  location: string
  story: string
  program: string
}

export function TestimonialCard({ name, location, story, program }: TestimonialCardProps) {
  return (
    <Card className="p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
        <Quote className="h-5 w-5" />
      </div>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed italic">"{story}"</p>
      <div className="border-t pt-4">
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-xs text-muted-foreground mb-2">{location}</p>
        <span className="inline-block text-xs bg-primary/10 text-primary px-2 py-1 rounded">{program}</span>
      </div>
    </Card>
  )
}
