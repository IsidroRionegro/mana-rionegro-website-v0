"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Coffee, Utensils, Users, Calendar } from "lucide-react"

export default function TertuliaderoPage() {
  const beverages = [
    { name: "Aromáticas Frías", description: "Infusiones refrescantes de hierbas locales" },
    { name: "Aromáticas Calientes", description: "Bebidas reconfortantes para la tarde" },
    { name: "Tinto", description: "Café tradicional de la región" },
    { name: "Café Aromatizado", description: "Café con sabores locales únicos" },
    { name: "Té Matcha", description: "Energía oriental con toque local" },
    { name: "Chocolate Caliente", description: "Chocolate ancestral artesanal" },
  ]

  const snacks = [
    { name: "Tortas Caseras", description: "Recetas tradicionales de la región" },
    { name: "Gofres", description: "Hechos al momento con ingredientes orgánicos" },
    { name: "Cremana", description: "Salsa especial de la casa" },
    { name: "Melijea", description: "Conserva tradicional" },
    { name: "Kersy-Chimichurico", description: "Salsa picante ancestral" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-accent/10 via-secondary/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-accent font-semibold tracking-wide">Espacio Comunitario</p>
                <h1 className="text-5xl md:text-6xl font-bold text-primary">
                  Tertuliadero
                  <br />
                  El Jardín
                </h1>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Rincón acogedor inspirado en jardines ancestrales. Un espacio para encuentros comunitarios, conexión y
                relax en la naturaleza.
              </p>
              <div className="flex gap-4">
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/contact">Hacer Reserva</Link>
                </Button>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?key=tertuliadero-hero"
                alt="Tertuliadero El Jardín"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-primary">Un Espacio de Encuentro</h2>
          <Card className="border-accent/30 p-8 md:p-12">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Tertuliadero El Jardín es más que un café. Es un retorno a la intimidad comunitaria, a las conversaciones
              que tejen comunidad, a la pausa consciente en medio de la vida moderna.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Bajo la sombra de un choza ancestral, en medio del jardín de MANA, nos reúnimos para compartir historias,
              ideas y conexión auténtica. Cada bebida, cada postre, es hecho con amor y productos de nuestra tierra.
            </p>
          </Card>
        </div>
      </section>

      {/* Beverages Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary flex items-center justify-center gap-3">
            <Coffee size={40} className="text-secondary" />
            Bebidas Orgánicas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beverages.map((beverage, index) => (
              <Card
                key={index}
                className="p-6 border-secondary/20 hover:border-secondary/50 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold text-secondary mb-2">{beverage.name}</h3>
                <p className="text-foreground/70">{beverage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Snacks Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary flex items-center justify-center gap-3">
            <Utensils size={40} className="text-accent" />
            Postres y Especiales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {snacks.map((snack, index) => (
              <Card key={index} className="p-6 border-accent/20 hover:border-accent/50 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-accent mb-2">{snack.name}</h3>
                <p className="text-foreground/70">{snack.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary flex items-center justify-center gap-3">
            <Calendar size={40} className="text-primary" />
            Eventos y Tertulias
          </h2>
          <p className="text-center text-lg text-foreground/80 mb-12">
            Nos reunimos regularmente para compartir, dialogar y conectar. Eventos mensuales tanto presenciales como
            virtuales.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 border-primary/30 hover:shadow-lg transition-shadow">
              <Users size={32} className="text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-primary">Tertulias Presenciales</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Encuentros en vivo en El Jardín. Conversaciones sobre agroecología, sostenibilidad, arqueología y vida
                comunitaria.
              </p>
              <Button asChild variant="outline">
                <Link href="/events">Ver Calendario</Link>
              </Button>
            </Card>

            <Card className="p-8 border-accent/30 hover:shadow-lg transition-shadow">
              <Calendar size={32} className="text-accent mb-4" />
              <h3 className="text-2xl font-semibold mb-3 text-accent">Webinars Virtuales</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Para audiencias urbanas que desean conectar con MANA desde sus hogares. Sesiones educativas en vivo.
              </p>
              <Button asChild variant="outline">
                <Link href="/events">Inscribirse</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Galería de Momentos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative overflow-hidden rounded-lg h-64 hover:shadow-lg transition-shadow">
                <Image
                  src={`/ceholder-svg-key-tertuliadero-.jpg?key=tertuliadero-${i}`}
                  alt={`Momento en Tertuliadero ${i}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-accent-foreground">Visítanos en El Jardín</h2>
          <p className="text-lg text-accent-foreground/90 mb-8">
            Vive la experiencia de tertulias comunitarias, café orgánico y conexión auténtica
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Hacer Reserva</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10 bg-transparent"
            >
              <Link href="/events">Ver Eventos</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
