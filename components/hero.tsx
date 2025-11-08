"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Play } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] overflow-hidden">
      {/* Background with pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-32 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="flex-1 flex justify-center md:justify-start">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MANALOGO-YIHWGzqm5x1mjpgNJkNoxEjBfDotMe.jpg"
            alt="MANA Escuela Experimental Campesina Logo"
            width={320}
            height={320}
            className="rounded-lg shadow-2xl"
          />
        </div>

        {/* Left content */}
        <div className="flex-1 space-y-6 z-10">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
              <span className="text-primary">MANA</span>
              <br />
              Escuela Experimental
              <br />
              <span className="text-secondary">Campesina</span>
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed max-w-lg">
              Agroecología, investigación ancestral y conexión con la naturaleza en el corazón de Río Negro, Colombia.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/shop">Explorar Tienda</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              <Link href="/events">Ver Eventos</Link>
            </Button>
          </div>

          <div className="pt-8 flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-secondary/20 flex items-center justify-center">
              <Play size={24} className="text-secondary fill-secondary" />
            </div>
            <p className="text-foreground/60">Ver video de bienvenida</p>
          </div>
        </div>
      </div>
    </section>
  )
}
