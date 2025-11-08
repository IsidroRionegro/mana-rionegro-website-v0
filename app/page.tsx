"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import SectionCard from "@/components/section-card"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* Main sections grid */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SectionCard
            title="MANA - Escuela Experimental Campesina"
            description="Espacio de aprendizaje ancestral sobre agroecología. Dignificamos al campesino a través de talleres, investigaciones arqueológicas y experiencias inmersivas."
            icon="🌾"
            href="/mana"
            color="primary"
          />

          <SectionCard
            title="MoChiMa - Vivero Orgánico"
            description="Mo=Tierra, Chi=Energía, Ma=Manifestación. Cultivamos y vendemos plantas aromáticas, árboles y productos sostenibles."
            icon="🌿"
            href="/mochima"
            color="secondary"
          />

          <SectionCard
            title="Tertuliadero El Jardín"
            description="Rincón de encuentro comunitario. Tertulias, bebidas orgánicas, postres caseros y eventos en armonía con la naturaleza."
            icon="🌺"
            href="/tertuliadero"
            color="accent"
          />
        </div>
      </section>

      {/* About founder section */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
            La Visión de Isidro Rodríguez
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/farmer-agroecology-colombia-research.jpg"
                alt="Isidro Rodríguez, investigador y fundador de MANA"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                Isidro Rodríguez es un investigador y productor agrícola con formación del PNUD, dedicado a revertir el
                éxodo rural y dignificar al campesino colombiano.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Creó MANA como un espacio integral donde la investigación ancestral, la agroecología y la educación se
                entrelazan. Su misión es demostrar que vivir del campo es vivir en armonía con la naturaleza.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                A través de la Casa del Campesino, restauramos la biodiversidad, conservamos el patrimonio arqueológico
                y repoblamos nuestros campos con dignidad.
              </p>
              <Button asChild className="mt-4 bg-primary hover:bg-primary/90">
                <Link href="/about">Conocer más</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">Únete a la Comunidad MANA</h2>
          <p className="text-primary-foreground/90 mb-8 text-lg">
            Recibe actualizaciones sobre eventos, talleres, nuevos productos y tips de sostenibilidad
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link href="/shop">Explorar Tienda</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <Link href="/events">Ver Eventos</Link>
            </Button>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  )
}
