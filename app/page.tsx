"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ArrowRight,
  Heart,
  MSquare as Mosque,
  Laptop,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Users,
  Target,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import { ProgramCard } from "@/components/program-card"
import { ImpactStats } from "@/components/impact-stats"
import { TestimonialCard } from "@/components/testimonial-card"
import { DonationForm } from "@/components/donation-form"
import { VolunteerForm } from "@/components/volunteer-form"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-w-full">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Removed logo, keeping just text branding */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground">Barakah Oasis</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {/* Added About link to navigation */}
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#programs"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Programs
            </Link>
            <Link
              href="#impact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Impact
            </Link>
            <Link
              href="#volunteer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Volunteer
            </Link>
            <Link
              href="/past-events"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Past Events
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Button asChild>
              <Link href="#donate">Donate Now</Link>
            </Button>
          </nav>
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {/* Added About to mobile menu */}
              <Link
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                About
              </Link>
              <Link
                href="#programs"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Programs
              </Link>
              <Link
                href="#impact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Impact
              </Link>
              <Link
                href="#volunteer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Volunteer
              </Link>
              <Link
                href="/past-events"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Past Events
              </Link>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Contact
              </Link>
              <Button asChild onClick={() => setMobileMenuOpen(false)}>
                <Link href="#donate">Donate Now</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/mosque-silhouette-nigeria-charity-community-helpin.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-balance md:text-6xl mb-6">
              Transforming Lives Through Barakah
            </h1>
            <p className="text-lg text-muted-foreground text-pretty mb-8 leading-relaxed">
              Join us in making a difference across Nigeria. From feeding fasting souls to building mosques and
              empowering Muslim tech professionals, your support brings blessings to our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="#donate">
                  Make a Donation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#programs">View Our Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <ImpactStats />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-balance">About Barakah Oasis</h2>
              <p className="text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
                A beacon of hope and compassion in the heart of Nigeria
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 mb-12">
              <Card className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-3">Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To uplift and empower Muslim communities across Nigeria through sustainable charitable programs
                      that address immediate needs while building long-term capacity for growth and self-sufficiency.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                    <TrendingUp className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-3">Our Vision</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      A Nigeria where every Muslim has access to spiritual spaces, nutritious food, and economic
                      opportunities - creating a thriving community rooted in faith, knowledge, and prosperity.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            <Card className="p-8 bg-accent/5 border-accent/20">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">Our Story</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Founded in 2020 in Lagos, Nigeria, Barakah Oasis began with a simple mission: to support our
                    brothers and sisters during Ramadan. What started as a small iftar distribution program has grown
                    into a comprehensive charitable organization serving thousands across Nigeria.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Today, we operate three flagship programs - Feed a Fasting Soul, Build a Mosque, and Empower Muslim
                    Techies - each designed to address critical needs in our community. Through the generosity of donors
                    and the dedication of volunteers, we've provided over 50,000 meals, contributed to 12 mosque
                    constructions, and equipped 85 aspiring tech professionals with the tools they need to succeed.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 scroll-mt-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">Our Programs</h2>
            <p className="text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              Every contribution makes a meaningful impact. Choose a program that resonates with your heart.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProgramCard
              icon={<Heart className="h-8 w-8" />}
              title="Feed a Fasting Soul"
              description="Provide iftar meals to those in need during Ramadan. A single meal can bring joy and nourishment to a fasting believer."
              amount="₦5,000"
              impact="Feeds 10 people"
              imageUrl="/ramadan-iftar-meal-food-distribution-charity-niger.jpg"
              raised={2850000}
              target={5000000}
            />
            <ProgramCard
              icon={<Mosque className="h-8 w-8" />}
              title="Build a Mosque"
              description="Contribute to the construction of mosques in underserved communities, creating lasting spaces for worship and community gathering."
              amount="₦500,000"
              impact="Supports construction"
              imageUrl="/mosque-construction-building-islamic-architecture-.jpg"
              raised={8500000}
              target={15000000}
            />
            <ProgramCard
              icon={<Laptop className="h-8 w-8" />}
              title="Empower a Muslim Techie"
              description="Provide laptops and tech resources to aspiring Muslim tech professionals, helping them build careers in the digital economy."
              amount="₦150,000"
              impact="1 complete laptop setup"
              imageUrl="/laptop-student-technology-education-programming-af.jpg"
              raised={1200000}
              target={3000000}
            />
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section id="impact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">Stories of Impact</h2>
            <p className="text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              Real stories from the lives we've touched together.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="Aisha Mohammed"
              location="Kano, Nigeria"
              story="Thanks to Barakah Oasis, I received a laptop that changed my life. I'm now a freelance web developer supporting my family."
              program="Empower a Muslim Techie"
            />
            <TestimonialCard
              name="Ibrahim Yusuf"
              location="Lagos, Nigeria"
              story="Our community now has a beautiful mosque where we gather for prayers. It has brought our neighborhood closer together."
              program="Build a Mosque"
            />
            <TestimonialCard
              name="Fatima Abdullahi"
              location="Abuja, Nigeria"
              story="During Ramadan, my family received iftar meals when we needed it most. The kindness and support meant everything to us."
              program="Feed a Fasting Soul"
            />
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-20 bg-muted/30 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-balance">Make Your Donation</h2>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                Your generosity brings barakah to our community. Every contribution counts.
              </p>
            </div>
            <DonationForm />
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-20 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-balance">Volunteer With Us</h2>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                Join our team of dedicated volunteers making a difference across Nigeria.
              </p>
            </div>
            <VolunteerForm />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">Get In Touch</h2>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              Have questions? We'd love to hear from you.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">info@barakahoasis.org</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground">+234 800 123 4567</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">Lagos, Nigeria</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Removed logo from footer, keeping just text */}
            <div>
              <span className="font-bold text-lg block mb-4">Barakah Oasis</span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Transforming lives through charitable works across Nigeria.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Programs</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Feed a Fasting Soul</li>
                <li>Build a Mosque</li>
                <li>Empower Muslim Techies</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#programs" className="hover:text-foreground transition-colors">
                    Our Programs
                  </Link>
                </li>
                <li>
                  <Link href="#impact" className="hover:text-foreground transition-colors">
                    Impact Stories
                  </Link>
                </li>
                <li>
                  <Link href="#volunteer" className="hover:text-foreground transition-colors">
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link href="#donate" className="hover:text-foreground transition-colors">
                    Donate
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Transparency Report</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Barakah Oasis. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
