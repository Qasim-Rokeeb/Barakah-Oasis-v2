"use client"

import { Trophy } from "lucide-react"
import { useState, useEffect } from "react"

export function ImpactStats() {
  const [meals, setMeals] = useState(0)
  const [projects, setProjects] = useState(0)
  const [funds, setFunds] = useState(0)
  const [years, setYears] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds animation
    const frameDuration = 1000 / 60 // 60fps
    const totalFrames = Math.round(duration / frameDuration)

    let currentFrame = 0

    const timer = setInterval(() => {
      currentFrame++
      const progress = currentFrame / totalFrames

      setMeals(Math.floor(1000 * progress))
      setProjects(Math.floor(3 * progress))
      setFunds(Math.floor(1 * progress))
      setYears(Math.floor(5 * progress))

      if (currentFrame === totalFrames) {
        clearInterval(timer)
        setMeals(1000)
        setProjects(3)
        setFunds(1)
        setYears(5)
      }
    }, frameDuration)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-8">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="text-center">
          <p className="text-4xl font-bold text-primary mb-2">{meals.toLocaleString()}+</p>
          <p className="text-sm text-muted-foreground">Meals Provided</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-primary mb-2">{projects}+</p>
          <p className="text-sm text-muted-foreground">Completed Projects</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-primary mb-2">₦{funds}M</p>
          <p className="text-sm text-muted-foreground">Funds Distributed</p>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-amber-50 to-amber-100/50 rounded-lg p-6 flex flex-col items-center justify-center border border-amber-200">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Trophy className="h-10 w-10 text-amber-600" />
          <p className="text-5xl font-bold text-amber-700">{years}</p>
        </div>
        <p className="text-lg font-semibold text-amber-900">Years of Excellence & Impact</p>
      </div>
    </div>
  )
}
