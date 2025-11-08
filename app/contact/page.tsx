"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Contactanos</h1>
          <p className="text-xl text-foreground/80 max-w-2xl">
            Tenemos muchas formas para conectar contigo. Elige la que prefieras.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-primary mb-8">Información de Contacto</h2>

            <div className="space-y-6">
              <Card className="p-6 border-primary/20">
                <div className="flex gap-4 items-start">
                  <MapPin size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Ubicación</h3>
                    <p className="text-foreground/70">
                      Río Negro, Sector Llanos Grandes
                      <br />
                      Antioquia, Colombia
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-secondary/20">
                <div className="flex gap-4 items-start">
                  <Phone size={24} className="text-secondary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Teléfono</h3>
                    <p className="text-foreground/70">
                      <a href="tel:+573001234567" className="hover:text-primary transition">
                        +57 300 123 4567
                      </a>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-accent/20">
                <div className="flex gap-4 items-start">
                  <Mail size={24} className="text-accent mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-foreground/70">
                      <a href="mailto:info@manarionegro.com" className="hover:text-primary transition">
                        info@manarionegro.com
                      </a>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-primary/20">
                <div className="flex gap-4 items-start">
                  <MessageCircle size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">WhatsApp Business</h3>
                    <p className="text-foreground/70 mb-4">Escríbenos directamente en WhatsApp</p>
                    <Button asChild className="bg-green-600 hover:bg-green-700 w-full">
                      <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer">
                        Abrir WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-secondary/20">
                <div className="flex gap-4 items-start">
                  <Clock size={24} className="text-secondary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Horarios</h3>
                    <p className="text-foreground/70 text-sm">
                      Lunes - Viernes: 8:00 - 17:00
                      <br />
                      Sábados: 9:00 - 14:00
                      <br />
                      Domingos: Cerrado
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8">Escríbenos un Mensaje</h2>
            <Card className="p-8 border-border/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Nombre Completo</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Teléfono</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+57 300 123 4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Asunto</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="¿En qué podemos ayudarte?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Mensaje</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos tu mensaje..."
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Enviar Mensaje
                </Button>

                {submitted && (
                  <p className="text-green-600 text-center text-sm font-semibold">
                    ¡Mensaje enviado! Nos contactaremos pronto.
                  </p>
                )}
              </form>
            </Card>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-primary">Ubicación</h2>
          <div className="w-full h-96 bg-muted rounded-lg border border-border flex items-center justify-center">
            <p className="text-foreground/50">Mapa de ubicación - Río Negro, Antioquia</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
