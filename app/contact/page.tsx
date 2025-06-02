"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    // Show success message
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Header Section with Background Image */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/contact.jpg"
              alt="Contact us background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-orange-400 drop-shadow-lg">
                  Contact Us
                </h1>
                <p className="max-w-[700px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed drop-shadow-md">
                  Have questions or feedback? We'd love to hear from you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Content Section */}
        <section className="w-full py-12 md:py-16 bg-black">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Contact Form */}
              <Card className="bg-zinc-900 border-zinc-800 text-zinc-100">
                <CardHeader>
                  <CardTitle className="text-orange-400">Send Us a Message</CardTitle>
                  <CardDescription className="text-zinc-400">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-zinc-300">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-zinc-800 border-zinc-700 text-zinc-100"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-zinc-300">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-zinc-800 border-zinc-700 text-zinc-100"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-zinc-300">
                        Subject
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-zinc-800 border-zinc-700 text-zinc-100">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-800 border-zinc-700 text-zinc-100">
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="support">Support</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-zinc-300">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="min-h-[120px] bg-zinc-800 border-zinc-700 text-zinc-100"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-orange-400 text-black hover:bg-orange-300">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="bg-zinc-900 border-zinc-800 text-zinc-100">
                  <CardHeader>
                    <CardTitle className="text-orange-400">Contact Information</CardTitle>
                    <CardDescription className="text-zinc-400">Here's how you can reach us directly.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-orange-400 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-zinc-200">Email</h3>
                        <p className="text-zinc-400">info@finkids.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-orange-400 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-zinc-200">Phone</h3>
                        <p className="text-zinc-400">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-orange-400 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-zinc-200">Address</h3>
                        <p className="text-zinc-400">
                          123 Financial Education St.
                          <br />
                          Suite 456
                          <br />
                          New York, NY 10001
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-orange-400 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-zinc-200">Hours</h3>
                        <p className="text-zinc-400">
                          Monday - Friday: 9am - 5pm
                          <br />
                          Saturday: 10am - 2pm
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900 border-zinc-800 text-zinc-100">
                  <CardHeader>
                    <CardTitle className="text-orange-400">FAQ</CardTitle>
                    <CardDescription className="text-zinc-400">Common questions about our services.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-medium text-zinc-200">Is FinKids free to use?</h3>
                      <p className="text-zinc-400">
                        Yes, our basic educational resources and games are completely free. We also offer premium
                        content for schools and organizations.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium text-zinc-200">What age group is FinKids designed for?</h3>
                      <p className="text-zinc-400">
                        Our content is designed for children and teenagers under 17, with different resources tailored
                        to specific age groups.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-medium text-zinc-200">Do you offer resources for parents and teachers?</h3>
                      <p className="text-zinc-400">
                        Yes, we provide guides and materials to help parents and teachers support children's financial
                        education.
                      </p>
                    </div>
                    <Link href="/faq" className="text-orange-400 hover:text-orange-300 text-sm font-medium">
                      View all FAQs
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
