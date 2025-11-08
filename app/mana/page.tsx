"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { BookOpen, Users, Leaf, Compass } from "lucide-react"

export default function MANAPage() {
  const programs = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Talleres de Agroecología",
      description: "Aprende técnicas sostenibles de cultivo, manejo de plagas natural y biodiversidad en el campo.",
    },
    {
      icon: <Compass className="w-8 h-8" />,
      title: "Investigaciones Arqueológicas",
      description: "Descubre la sabiduría ancestral y los secretos del patrimonio cultural de nuestra región.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Tertulias y Encuentros",
      description: "Espacios de diálogo comunitario donde compartimos conocimiento y experiencias.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Centro de Investigación",
      description: "Investigación académica rigurosa en relación hombre-naturaleza y conservación.",
    },
  ]

  const testimonials = [
    {
      name: "María González",
      role: "Agricultor local",
      content: "MANA cambió mi perspectiva sobre el campo. Ahora cultivo con dignidad y respeto por la tierra.",
      image: "/placeholder.svg?key=test1",
    },
    {
      name: "Carlos Mendez",
      role: "Investigador",
      content: "El centro de investigación es un espacio único donde convergen ciencia y sabiduría ancestral.",
      image: "/placeholder.svg?key=test2",
    },
    {
      name: "Ana Rivera",
      role: "Turista / Estudiante",
      content: "La experiencia en MANA fue transformadora. Me reconecté con la naturaleza y conmigo misma.",
      image: "/placeholder.svg?key=test3",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-primary">
                MANA
                <br />
                Escuela Experimental
                <br />
                Campesina
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Un espacio integral de aprendizaje ancestral donde rionegreros y visitantes descubren la relación
                armónica entre el hombre y la naturaleza.
              </p>
              <div className="flex gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/events">Ver Talleres</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Solicitar Información</Link>
                </Button>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?key=mana-hero"
                alt="Escena educativa en MANA"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-primary">Nuestra Misión</h2>
          <Card className="bg-muted/50 border-secondary/30 p-8 space-y-4">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Dignificar al campesino colombiano a través de la educación en agroecología, investigación ancestral y
              conexión consciente con la naturaleza.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="space-y-2">
                <h3 className="font-semibold text-primary text-lg">Revertir el Éxodo Rural</h3>
                <p className="text-foreground/70">Demostramos que vivir del campo es vivir en armonía y prosperidad.</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-secondary text-lg">Conservar Biodiversidad</h3>
                <p className="text-foreground/70">Protegemos y restauramos los ecosistemas locales y regionales.</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-accent text-lg">Recuperar Memoria</h3>
                <p className="text-foreground/70">Investigamos y transmitimos el patrimonio cultural ancestral.</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Nuestros Programas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <div className="text-primary mb-4">{program.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-foreground">{program.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{program.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Experiencias Inmersivas</h2>
          <div className="space-y-8">
            <Card className="border-primary/30 p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <Image
                src="/placeholder.svg?key=exp1"
                alt="Cultivos agroecológicos"
                width={400}
                height={300}
                className="rounded-lg"
              />
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-primary">Visitas a Cultivos</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Camina por nuestros campos orgánicos, aprende sobre rotación de cultivos, control de plagas natural y
                  biodiversidad. Una experiencia sensorial completa en contacto directo con la tierra.
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90 w-fit">
                  <Link href="/events">Agendar Visita</Link>
                </Button>
              </div>
            </Card>

            <Card className="border-secondary/30 p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:grid-flow-dense">
              <div className="space-y-4 md:order-2">
                <h3 className="text-3xl font-bold text-secondary">Meditación y Reconexión</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Prácticas de meditación guiada en la naturaleza, yoga ancestral y rituales de conexión con la tierra.
                  Un espacio para sanar y reconectarte con tu esencia.
                </p>
                <Button asChild className="bg-secondary hover:bg-secondary/90 w-fit text-foreground">
                  <Link href="/events">Conocer Sesiones</Link>
                </Button>
              </div>
              <Image
                src="/placeholder.svg?key=exp2"
                alt="Meditación en la naturaleza"
                width={400}
                height={300}
                className="rounded-lg md:order-1"
              />
            </Card>

            <Card className="border-accent/30 p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <Image
                src="/placeholder.svg?key=exp3"
                alt="Investigación arqueológica"
                width={400}
                height={300}
                className="rounded-lg"
              />
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-accent">Investigaciones Arqueológicas</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Explora hallazgos arqueológicos locales y aprende sobre culturas ancestrales. Nuestro centro de
                  investigación revela los secretos del patrimonio que nos rodea.
                </p>
                <Button asChild className="bg-accent hover:bg-accent/90 w-fit text-accent-foreground">
                  <Link href="/blog">Leer Investigaciones</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Testimonios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-foreground/70">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-foreground/80 italic leading-relaxed">"{testimonial.content}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary-foreground">Comienza Tu Viaje de Aprendizaje</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Únete a nuestra comunidad de aprendices, investigadores y amantes de la agroecología
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/events">Ver Calendario de Eventos</Link>
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
