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
  status?: "active" | "completed" | "ongoing" | "future" // added "future" status to hide raised amounts
}

export function ProgramCard({
  icon,
  title,
  description,
  amount,
  impact,
  imageUrl,
  raised,
  target,
  status = "active",
}: ProgramCardProps) {
  const progressPercentage = (raised / target) * 100
  const isCompleted = status === "completed"
  const isOngoing = status === "ongoing" // identify ongoing projects
  const isFuture = status === "future" // identify future projects

  return (
    <Card
      className={`overflow-hidden hover:shadow-lg transition-shadow ${
        isCompleted ? "opacity-75" : ""
      } ${isOngoing ? "ring-2 ring-accent shadow-lg shadow-accent/20" : ""}`}
    >
      {imageUrl && (
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className={`w-full h-full object-cover ${isCompleted ? "grayscale" : ""}`}
          />
          <div
            className={`absolute inset-0 ${isOngoing ? "bg-gradient-to-t from-accent/30 to-transparent" : "bg-gradient-to-t from-black/60 to-transparent"}`}
          />
          <div
            className={`absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-lg ${
              isCompleted
                ? "bg-gray-400 text-gray-600"
                : isOngoing
                  ? "bg-accent text-accent-foreground"
                  : "bg-primary text-primary-foreground"
            }`}
          >
            {icon}
          </div>
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className={`text-xl font-semibold ${isOngoing ? "text-accent" : ""}`}>{title}</h3>
          {isCompleted && (
            <span className="text-xs font-bold text-gray-500 bg-gray-200 px-2 py-1 rounded">COMPLETED</span>
          )}
          {isOngoing && (
            <span className="text-xs font-bold text-white bg-accent px-3 py-1 rounded-full animate-pulse">
              ACTIVE NOW
            </span>
          )}
        </div>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{description}</p>

        <div className="mb-4 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Raised</span>
            <span className={`font-semibold ${isOngoing ? "text-accent" : ""}`}>
              {isFuture ? "₦₦₦" : `₦${raised.toLocaleString()}`}
            </span>
          </div>
          <Progress
            value={progressPercentage}
            className={`h-2 ${isCompleted ? "[&>div]:bg-gray-400" : isOngoing ? "[&>div]:bg-accent" : ""}`}
          />
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Target</span>
            <span className="font-semibold">₦{target.toLocaleString()}</span>
          </div>
          <p className="text-xs text-muted-foreground italic">Updated daily after 24 hours</p>
        </div>

        <div className={`mb-4 space-y-1 pt-4 border-t ${isOngoing ? "border-accent/30" : ""}`}>
          <p
            className={`text-2xl font-bold ${isCompleted ? "text-gray-400" : isOngoing ? "text-accent" : "text-primary"}`}
          >
            {amount}
          </p>
          <p className="text-xs text-muted-foreground">{impact}</p>
        </div>
        <Button className={`w-full ${isOngoing ? "bg-accent hover:bg-accent/90" : ""}`} asChild disabled={isCompleted}>
          <a href={isCompleted ? "#" : "#donate"}>{isCompleted ? "Project Completed" : "Donate to This Cause"}</a>
        </Button>
      </div>
    </Card>
  )
}
