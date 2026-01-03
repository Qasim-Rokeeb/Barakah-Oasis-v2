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
  Menu,
  X,
  Users,
  Target,
  TrendingUp,
  Baby,
  BookOpen,
  Shield,
  HandHeart,
  Smile,
  ArrowUp,
} from "lucide-react"
import Link from "next/link"
import { ProgramCard } from "@/components/program-card"
import { ImpactStats } from "@/components/impact-stats"
import { TestimonialCard } from "@/components/testimonial-card"
import { DonationForm } from "@/components/donation-form"
import { VolunteerForm } from "@/components/volunteer-form"
import { useState, useEffect, useRef } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view")
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    })

    const sections = document.querySelectorAll(".scroll-visible")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-w-full">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Removed logo, keeping just text branding */}
          <div className="flex items-center gap-2">
            <div>
              <span className="text-xl font-bold text-foreground">Barakah Oasis</span>
              <p className="text-xs text-muted-foreground">An oasis of dignity, compassion, and hope</p>
            </div>
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
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 md:py-32 scroll-visible">
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
              Bringing Relief, Hope, and Honor to Muslims in Need
            </h1>
            <p className="text-lg text-muted-foreground text-pretty mb-8 leading-relaxed">
              Severe hardship can rob people of their dignity. We restore hope and respect to Muslims enduring it,
              channeling donations from Muslims worldwide to the most vulnerable communities.
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
      <section className="py-16 bg-primary/5 scroll-visible">
        <div className="container mx-auto px-4">
          <ImpactStats />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 scroll-mt-16 scroll-visible">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-balance">Who Are We?</h2>
              <p className="text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
                An oasis of dignity, compassion, and hope
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
                      To empower the Muslim community with dignity and hope through faith-driven charitable programs.
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
                      A world where no Muslim is left behind, where compassion builds resilience, and faith inspires
                      action.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8 bg-accent/5 border-accent/20 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-3">Our Story</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Barakah Oasis Foundation began with a simple act of giving during Ramadan, and from that moment, we
                    knew this work had to continue. Year after year, we've been blessed to serve those in need—elders,
                    students, widows, and orphans—with the intention of building an ummah rooted in compassion and
                    faith.
                  </p>
                </div>
              </div>
            </Card>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Our Core Values</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">Dignity</h4>
                  <p className="text-sm text-muted-foreground">Preserving honor in every act of giving.</p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <HandHeart className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">Compassion</h4>
                  <p className="text-sm text-muted-foreground">Serving with empathy and understanding.</p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">Faith</h4>
                  <p className="text-sm text-muted-foreground">
                    Rooted in the mercy and generosity that Islam teaches.
                  </p>
                </Card>
                <Card className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">Empowerment</h4>
                  <p className="text-sm text-muted-foreground">Enabling independence and long-term growth.</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 scroll-mt-16 bg-muted/30 scroll-visible">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">Our Programs</h2>
            <p className="text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              Every contribution makes a meaningful impact. Choose a program that resonates with your heart.
            </p>
          </div>

          <div className="space-y-20">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Active Campaign</h3>
              <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join us in making an immediate impact right now.
              </p>
              <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1 max-w-2xl mx-auto">
                <ProgramCard
                  icon={<Heart className="h-8 w-8" />}
                  title="Feed a Fasting Soul - Ramadan 2025"
                  description="This Ramadan, we're calling on the ummah to answer the hunger of our brothers and sisters. Every ifṭār meal is an act of worship, every donation a seed of sadaqah jariyah. Join us in transforming moments of hunger into moments of gratitude."
                  amount="₦5,000"
                  impact="Feeds 10 people at ifṭār"
                  imageUrl="/ramadan-iftar-family-meal-muslim-africa-sharing.jpg"
                  raised={0}
                  target={10000000}
                  status="ongoing"
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Future Projects</h3>
              <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                Building lasting impact through programs designed to empower and uplift our community.
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ProgramCard
                  icon={<Laptop className="h-8 w-8" />}
                  title="Nurture A Muslim Techie/Entrepreneur"
                  description="We believe empowerment is the best charity. Through this program, we provide laptops, mentorship, and guidance for Muslims stepping into tech or launching startups—helping them turn their potential into purpose."
                  amount="₦150,000"
                  impact="1 complete laptop setup"
                  imageUrl="/techie-laptop-muslim-africa-entrepreneur-startup.jpg"
                  raised={1200000}
                  target={5000000}
                  status="future"
                />
                <ProgramCard
                  icon={<Smile className="h-8 w-8" />}
                  title="Empower A Widow"
                  description="Many widows carry both grief and responsibility. Our goal is to provide them with basic amenities and programs that help them rebuild their lives with confidence and not dependence."
                  amount="₦50,000"
                  impact="Monthly support package"
                  imageUrl="/widow-empowerment-muslim-africa-support-community.jpg"
                  raised={450000}
                  target={3000000}
                  status="future"
                />
                <ProgramCard
                  icon={<BookOpen className="h-8 w-8" />}
                  title="Educate An Orphan"
                  description="Every child deserves a chance to dream. We support orphans with school fees and hostel accommodations, nurturing their growth so they can become contributors to the ummah."
                  amount="₦100,000"
                  impact="One year tuition + hostel"
                  imageUrl="/orphan-education-muslim-africa-schooling.jpg"
                  raised={650000}
                  target={4000000}
                  status="future"
                />
                <ProgramCard
                  icon={<Mosque className="h-8 w-8" />}
                  title="Build a House in Jannah"
                  description="Every act of giving leaves a trace, not only in someone's life but also in our own story with Allah. Through this initiative, we invite Muslims to support ongoing, impact-driven projects that earn them lasting reward with Allah."
                  amount="₦500,000"
                  impact="Ongoing sadaqah jariyah"
                  imageUrl="/mosque-under-construction-africa-building-islamic.jpg"
                  raised={2500000}
                  target={10000000}
                  status="future"
                />
                <ProgramCard
                  icon={<Baby className="h-8 w-8" />}
                  title="Care for a Pregnant Woman"
                  description="Every child deserves a healthy beginning and every mother deserves care. Through this project, we support pregnant women by covering medical bills, delivery costs, and postnatal care."
                  amount="₦75,000"
                  impact="Full maternity support"
                  imageUrl="/pregnant-woman-healthcare-muslim-africa-maternity.jpg"
                  raised={320000}
                  target={2500000}
                  status="future"
                />
                <ProgramCard
                  icon={<Mosque className="h-8 w-8" />}
                  title="Barzakh Fund"
                  description="Even in death, dignity remains sacred. The Barzakh Fund helps families cover the costs of burial and final rites—ensuring every believer is laid to rest with honor, mercy, and community prayer."
                  amount="₦30,000"
                  impact="Dignified burial support"
                  imageUrl="/burial-dignity-muslim-africa-cemetery-funeral-respect.jpg"
                  raised={180000}
                  target={1500000}
                  status="future"
                />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Past Projects</h3>
              <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                These acts may seem small, but to hundreds of lives, they've meant the world—A meal, A smile, A renewed
                sense of dignity.
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ProgramCard
                  icon={<Users className="h-8 w-8" />}
                  title="iCare for Elderly"
                  description="We've seen how forgotten many of our elders feel. Through iCare, we provide food, basic needs, and loan offsets—a reminder that old age should be honored, not endured in silence."
                  amount="₦25,000"
                  impact="Support for one elder"
                  imageUrl="/elderly-care-muslim-africa-dignified-seniors.jpg"
                  raised={1850000}
                  target={3000000}
                  status="completed"
                />
                <ProgramCard
                  icon={<Heart className="h-8 w-8" />}
                  title="Feed a Fasting Muslim"
                  description="Each Ramadan, we share the gift of ifṭār with Muslims who otherwise go hungry, turning moments of hardship into moments of gratitude."
                  amount="₦5,000"
                  impact="Feeds 10 people"
                  imageUrl="/ramadan-iftar-family-meal-muslim-africa-sharing.jpg"
                  raised={2850000}
                  target={5000000}
                  status="completed"
                />
                <ProgramCard
                  icon={<BookOpen className="h-8 w-8" />}
                  title="Feed a Fasting Student"
                  description="We've stood with students balancing faith and study during Ramadan, ensuring that hunger never stands between them and their worship."
                  amount="₦3,000"
                  impact="One student meal"
                  imageUrl="/student-studying-ramadan-muslim-africa-education.jpg"
                  raised={950000}
                  target={2000000}
                  status="completed"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section id="impact" className="py-20 scroll-visible">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-balance">Why It Matters</h2>
            <p className="text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              Because behind every statistic is a story
            </p>
          </div>

          <Card className="p-8 mb-12 bg-accent/5 border-accent/20 max-w-3xl mx-auto">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>A grandmother waiting for companionship.</p>
              <p>A student fasting through lectures with no ifṭār.</p>
              <p>A widow wondering how to provide for her children.</p>
              <p className="font-semibold text-foreground pt-4">
                We've met them. We've prayed with them. And through your support, we've seen faith turn despair into
                gratitude.
              </p>
              <p className="font-semibold text-foreground">
                Barakah Oasis exists to close these gaps with dignity-centered, faith-inspired care.
              </p>
            </div>
          </Card>

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-balance">Stories of Impact</h3>
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
      <section id="donate" className="py-20 bg-muted/30 scroll-mt-16 scroll-visible">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-balance">Be a Part of the Oasis of Hope</h2>
              <p className="text-lg text-muted-foreground text-pretty mb-8 leading-relaxed">
                "And whatever you spend of good, it will be fully repaid to you, and you will not be wronged."
              </p>
              <p className="text-sm text-muted-foreground italic">— Surah Al-Baqarah (2:272)</p>
            </div>
            <DonationForm />
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-20 scroll-mt-16 scroll-visible">
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
      <section id="contact" className="py-20 bg-muted/30 scroll-mt-16 scroll-visible">
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
                  <Phone className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Tasleemah</h3>
              <p className="text-sm text-muted-foreground">+234 903 550 1084</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Nafeesah</h3>
              <p className="text-sm text-muted-foreground">+234 818 142 9211</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">barakahoasis@gmail.com</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <span className="font-bold text-lg block mb-2">Barakah Oasis</span>
              <p className="text-xs text-muted-foreground mb-4">An oasis of dignity, compassion, and hope</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Together, we can build an ummah that stands tall in mercy, dignity, and unity.
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
            <p>&copy; 2025 Barakah Oasis Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary hover:bg-primary/90 text-primary-foreground p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4 md:h-6 md:w-6" />
        </button>
      )}
    </div>
  )
}
