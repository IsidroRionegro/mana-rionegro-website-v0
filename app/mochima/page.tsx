"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Leaf, Droplets, Flower, Sprout } from "lucide-react"

export default function MoChiMAPage() {
  const categories = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Plantas Aromáticas",
      description: "Hierbas medicinales y aromáticas cultivadas con amor para tu bienestar.",
      link: "/shop?type=aromatic",
    },
    {
      icon: <Sprout className="w-8 h-8" />,
      title: "Árboles Frutales",
      description: "Árboles nativos y frutales para crear tu propio huerto sostenible.",
      link: "/shop?type=frutal",
    },
    {
      icon: <Flower className="w-8 h-8" />,
      title: "Plantas Ornamentales",
      description: "Plantas para embellecer tus espacios en armonía con la naturaleza.",
      link: "/shop?type=ornamental",
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Infusiones Orgánicas",
      description: "Bebidas para nutrir tu cuerpo con energía de la tierra.",
      link: "/shop?type=infusions",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-secondary font-semibold tracking-wide">MoChiMa Vivero Orgánico</p>
                <h1 className="text-5xl md:text-6xl font-bold text-primary">
                  Mo = Tierra
                  <br />
                  Chi = Energía
                  <br />
                  Ma = Manifestación
                </h1>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Plantas cultivadas con la energía de la tierra, manifestadas para traer vida y armonía a tu hogar.
              </p>
              <Button asChild className="bg-secondary hover:bg-secondary/90 w-fit text-foreground">
                <Link href="/shop">Explorar Vivero</Link>
              </Button>
            </div>
            <div>
              <Image
                src="/placeholder.svg?key=mochima-hero"
                alt="Vivero orgánico MoChiMA"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-primary">Nuestra Filosofía</h2>
          <Card className="border-secondary/30 p-8 md:p-12 space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              MoChiMA no es solo un vivero. Es la manifestación de la energía terrenal convertida en vida verde.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-secondary">Cultivo Sostenible</h3>
                <p className="text-foreground/70">
                  Cada planta crece respetando los ciclos naturales, sin químicos sintéticos, en armonía con los
                  ecosistemas locales.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-secondary">Energía Natural</h3>
                <p className="text-foreground/70">
                  Creemos que las plantas portadoras de la verdadera energía terrestre tienen mayor poder curativo y
                  regenerador.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-secondary">Impacto Ecológico</h3>
                <p className="text-foreground/70">
                  Al comprar de MoChiMA, contribuyes a la reforestación, la biodiversidad y la economía rural
                  colombiana.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Nuestros Productos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-shadow border-secondary/20 hover:border-secondary/50"
              >
                <div className="text-secondary mb-4">{category.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">{category.title}</h3>
                <p className="text-foreground/70 leading-relaxed mb-6">{category.description}</p>
                <Button asChild variant="ghost" className="text-secondary hover:text-secondary/80 p-0 h-auto">
                  <Link href={category.link}>Explorar →</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Growing Guide Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Guías de Cultivo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-secondary">Primeros Pasos</h3>
              <p className="text-foreground/70 mb-6">
                Guía para principiantes sobre cómo iniciar tu huerto urbano o rural.
              </p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/blog/primeros-pasos">Leer Guía</Link>
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-secondary">Propiedades Medicinales</h3>
              <p className="text-foreground/70 mb-6">Descubre los beneficios de plantas medicinales ancestrales.</p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/blog/medicinales">Leer Guía</Link>
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold mb-4 text-secondary">Cuidados Estacionales</h3>
              <p className="text-foreground/70 mb-6">Tips según la época del año para maximizar el crecimiento.</p>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/blog/estaciones">Leer Guía</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">Trae la Energía de la Tierra a Tu Hogar</h2>
          <p className="text-lg text-foreground/90 mb-8">
            Descubre nuestra colección completa de plantas y productos orgánicos
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/shop">Visitar Tienda</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
