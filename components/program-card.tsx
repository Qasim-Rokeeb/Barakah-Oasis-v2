"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import type { ReactNode } from "react"

interface ProgramCardProps {
  icon: ReactNode
  title: string
  description: string
  amount: string
  impact: string
  imageUrl?: string
  raised: number
  target: number
}

export function ProgramCard({ icon, title, description, amount, impact, imageUrl, raised, target }: ProgramCardProps) {
  const progressPercentage = (raised / target) * 100

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      {imageUrl && (
        <div className="relative h-48 w-full overflow-hidden">
          <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            {icon}
          </div>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{description}</p>

        <div className="mb-4 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Raised</span>
            <span className="font-semibold">₦{raised.toLocaleString()}</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Target</span>
            <span className="font-semibold">₦{target.toLocaleString()}</span>
          </div>
          <p className="text-xs text-muted-foreground italic">Updated daily after 24 hours</p>
        </div>

        <div className="mb-4 space-y-1 pt-4 border-t">
          <p className="text-2xl font-bold text-primary">{amount}</p>
          <p className="text-xs text-muted-foreground">{impact}</p>
        </div>
        <Button className="w-full" asChild>
          <a href="#donate">Donate to This Cause</a>
        </Button>
      </div>
    </Card>
  )
}
