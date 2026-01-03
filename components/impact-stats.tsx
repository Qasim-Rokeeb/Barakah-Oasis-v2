"use client"

import { Trophy } from "lucide-react"

export function ImpactStats() {
  const stats = [
    { value: "1,000+", label: "Meals Provided" },
    { value: "3+", label: "Completed Projects" },
    { value: "₦1M", label: "Funds Distributed" },
  ]

  return (
    <div className="space-y-8">
      <div className="grid gap-8 md:grid-cols-3">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="w-full bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-lg p-6 flex flex-col items-center justify-center border border-amber-200">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Trophy className="h-10 w-10 text-amber-600" />
          <p className="text-5xl font-bold text-amber-700">5</p>
        </div>
        <p className="text-lg font-semibold text-amber-900">Years of Excellence & Impact</p>
      </div>
    </div>
  )
}
