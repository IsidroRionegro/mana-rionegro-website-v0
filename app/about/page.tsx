"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { MapPin, Award, Leaf, Users } from "lucide-react"

export default function AboutPage() {
  const team = [
    {
      name: "Isidro Rodríguez",
      role: "Fundador e Investigador",
      image: "/placeholder.svg?key=team1",
      bio: "Investigador PNUD con 20+ años en agroecología y conservación",
    },
    {
      name: "María Elena García",
      role: "Directora de Educación",
      image: "/placeholder.svg?key=team2",
      bio: "Especialista en educación rural y sostenibilidad",
    },
    {
      name: "Carlos Mendez",
      role: "Arqueólogo de Sitio",
      image: "/placeholder.svg?key=team3",
      bio: "Investigador de patrimonio cultural ancestral",
    },
  ]

  const impact = [
    { number: "1000+", label: "Personas Capacitadas", icon: Users },
    { number: "50+", label: "Hectáreas Restauradas", icon: Leaf },
    { number: "15+", label: "Años de Trayectoria", icon: Award },
    { number: "100%", label: "Productos Orgánicos", icon: MapPin },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Sobre MANA</h1>
          <p className="text-xl text-foreground/80 max-w-2xl">
            Una iniciativa integral que dignifica al campesino colombiano a través de agroecología, investigación
            ancestral y reconexión consciente con la tierra.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Image
              src="/placeholder.svg?key=isidro-founder"
              alt="Isidro Rodríguez"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary">La Visión de Isidro Rodríguez</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Isidro Rodríguez es un investigador, productor agrícola y visionario dedicado a revertir el éxodo rural
                y dignificar la vida campesina en Colombia.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Con formación del PNUD y décadas de experiencia, Isidro creó MANA como un espacio donde la investigación
                ancestral, la agroecología y la educación se entrelazan para demostrar que vivir del campo es vivir en
                armonía, abundancia y dignidad.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Su misión trasciende los campos: restaurar biodiversidad, conservar patrimonio cultural, repoblar
                regiones rurales y crear una alternativa real al modelo extractivista.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 w-fit">
                <Link href="/contact">Conocer Iniciativas</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Nuestro Impacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {impact.map((stat, i) => {
              const Icon = stat.icon
              return (
                <Card key={i} className="p-8 text-center hover:shadow-lg transition-shadow">
                  <Icon size={40} className="mx-auto mb-4 text-secondary" />
                  <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                  <p className="text-foreground/70">{stat.label}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64 bg-muted/50 overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-semibold text-foreground">{member.name}</h3>
                  <p className="text-secondary font-semibold">{member.role}</p>
                  <p className="text-foreground/70 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Nuestros Valores</h2>
          <div className="space-y-8">
            <Card className="p-8 border-primary/20">
              <h3 className="text-2xl font-semibold text-primary mb-3">Dignidad Rural</h3>
              <p className="text-foreground/80 leading-relaxed">
                Creemos que el campo merece respeto, reconocimiento y oportunidades de prosperidad. Dignificamos al
                campesino a través de educación, tecnología sostenible y mercados justos.
              </p>
            </Card>
            <Card className="p-8 border-secondary/20">
              <h3 className="text-2xl font-semibold text-secondary mb-3">Sostenibilidad Integral</h3>
              <p className="text-foreground/80 leading-relaxed">
                Practicamos agroecología no como moda, sino como filosofía. Restauramos ecosistemas, conservamos
                biodiversidad y demostramos que es posible producir sin destruir.
              </p>
            </Card>
            <Card className="p-8 border-accent/20">
              <h3 className="text-2xl font-semibold text-accent mb-3">Investigación Ancestral</h3>
              <p className="text-foreground/80 leading-relaxed">
                Honramos el conocimiento indígena y campesino. Investigamos, documentamos y transmitimos sabiduría que
                ha sostenido a nuestros pueblos por generaciones.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary-foreground">Únete a Nuestro Movimiento</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">Sé parte de la transformación rural en Colombia</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/mana">Ver Talleres</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Link href="/contact">Contactanos</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
