"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

const donationAmounts = [5000, 10000, 25000, 50000, 100000, 150000]

export function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [showBankDetails, setShowBankDetails] = useState(false)
  const [copiedAccount, setCopiedAccount] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedAccount(true)
    setTimeout(() => setCopiedAccount(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowBankDetails(true)
  }

  return (
    <Card className="p-6">
      {!showBankDetails ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <div className="filter blur-sm pointer-events-none select-none">
              <div>
                <Label className="text-base mb-3 block">Select an amount</Label>
                <div className="grid grid-cols-3 gap-3">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      className="p-3 rounded-lg border-2 text-sm font-medium border-border"
                    >
                      ₦{amount.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <Label htmlFor="custom-amount">Or enter custom amount (₦)</Label>
                <Input id="custom-amount" type="number" placeholder="Enter amount" disabled />
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-lg">
              <div className="text-center p-6 max-w-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Online Payment Coming Soon</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our online donation system is currently in development. Please use bank transfer below.
                </p>
                <Button type="button" onClick={() => setShowBankDetails(true)} className="w-full">
                  View Bank Details
                </Button>
              </div>
            </div>
          </div>

          <div className="opacity-50 pointer-events-none">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Your full name" disabled />
            </div>

            <div className="mt-4">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="your@email.com" disabled />
            </div>

            <div className="mt-4">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="+234 800 000 0000" disabled />
            </div>
          </div>
        </form>
      ) : (
        <div className="space-y-6">
          <div className="text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Bank Transfer Details</h3>
            <p className="text-sm text-muted-foreground">Please transfer your donation to the account below</p>
          </div>

          <div className="bg-muted/50 rounded-lg p-4 space-y-3">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Bank Name</p>
              <p className="font-semibold">Moniepoint</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Account Name</p>
              <p className="font-semibold">Haroon Nafeesah</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Account Number</p>
              <div className="flex items-center justify-between bg-background rounded-md p-3 border">
                <p className="font-semibold text-lg">8181429211</p>
                <Button size="sm" variant="ghost" onClick={() => copyToClipboard("8181429211")} className="h-8 w-8 p-0">
                  {copiedAccount ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              {copiedAccount && <p className="text-xs text-green-600 mt-1">Account number copied!</p>}
            </div>
          </div>

          <div className="bg-accent/50 rounded-lg p-4 text-sm text-muted-foreground">
            <p className="leading-relaxed">
              After completing your transfer, please send your payment confirmation to{" "}
              <span className="font-medium text-foreground">barakahoasis@gmail.com</span> or WhatsApp us at{" "}
              <span className="font-medium text-foreground">+234 903 550 1084</span>
            </p>
          </div>

          <Button onClick={() => setShowBankDetails(false)} variant="outline" className="w-full">
            Back
          </Button>
        </div>
      )}
    </Card>
  )
}
