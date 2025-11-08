"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Newsletter signup logic would go here
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="bg-muted/50 py-16 md:py-24 border-t border-border">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Suscríbete a Nuestro Newsletter</h2>
          <p className="text-foreground/70 text-lg">
            Recibe actualizaciones sobre eventos, productos y tips de sostenibilidad
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            required
          />
          <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            Suscribirse
          </Button>
        </form>

        {submitted && (
          <p className="text-center mt-4 text-green-600">
            ¡Gracias por suscribirte! Pronto recibirás nuestras actualizaciones.
          </p>
        )}
      </div>
    </section>
  )
}
