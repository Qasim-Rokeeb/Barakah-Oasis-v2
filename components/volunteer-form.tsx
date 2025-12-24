"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { submitVolunteerData } from "@/app/actions/volunteer"

export function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    interests: "",
    availability: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await submitVolunteerData(formData)
      setSubmitted(true)
    } catch (error) {
      console.error("Error submitting volunteer form:", error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (submitted) {
    return (
      <Card className="p-8 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          We've received your volunteer application. Our team will review it and get back to you within 48 hours.
        </p>
        <Button
          onClick={() => {
            setSubmitted(false)
            setFormData({ name: "", email: "", phone: "", location: "", interests: "", availability: "" })
          }}
          variant="outline"
        >
          Submit Another Application
        </Button>
      </Card>
    )
  }

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="v-name">Full Name</Label>
          <Input
            id="v-name"
            name="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="v-email">Email Address</Label>
          <Input
            id="v-email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="v-phone">Phone Number</Label>
          <Input
            id="v-phone"
            name="phone"
            type="tel"
            placeholder="+234 800 000 0000"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="v-location">Location (City, State)</Label>
          <Input
            id="v-location"
            name="location"
            placeholder="e.g., Lagos, Lagos State"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="v-interests">Areas of Interest</Label>
          <Textarea
            id="v-interests"
            name="interests"
            placeholder="Tell us which programs you'd like to volunteer for (e.g., food distribution, mosque construction coordination, tech mentorship)"
            rows={4}
            value={formData.interests}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label htmlFor="v-availability">Availability</Label>
          <Textarea
            id="v-availability"
            name="availability"
            placeholder="Let us know when you're available (e.g., weekends, weekday evenings, full-time)"
            rows={3}
            value={formData.availability}
            onChange={handleChange}
            required
          />
        </div>

        <Button type="submit" className="w-full" size="lg">
          Submit Application
        </Button>
      </form>
    </Card>
  )
}
