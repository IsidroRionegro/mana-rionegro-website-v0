"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Calendar, Clock, MapPin } from "lucide-react"
import { useState } from "react"

const EVENTS = [
  {
    id: 1,
    title: "Taller de Agroecología Básica",
    date: "2025-11-15",
    time: "09:00 - 12:00",
    location: "MANA, Río Negro",
    type: "Presencial",
    capacity: 20,
    description: "Introducción a principios de agroecología, diseño de sistemas sostenibles.",
    price: 50000,
  },
  {
    id: 2,
    title: "Webinar: Plantas Medicinales",
    date: "2025-11-18",
    time: "18:00 - 19:30",
    location: "En línea",
    type: "Virtual",
    capacity: 100,
    description: "Descubre propiedades curativas de plantas del trópico colombiano.",
    price: 0,
  },
  {
    id: 3,
    title: "Visita Arqueológica Guiada",
    date: "2025-11-22",
    time: "10:00 - 14:00",
    location: "MANA, Río Negro",
    type: "Presencial",
    capacity: 15,
    description: "Exploración de hallazgos arqueológicos y patrimonio cultural local.",
    price: 75000,
  },
  {
    id: 4,
    title: "Meditación en la Naturaleza",
    date: "2025-11-25",
    time: "06:00 - 07:30",
    location: "MANA, Río Negro",
    type: "Presencial",
    capacity: 25,
    description: "Sesión de meditación guiada en el corazón de la naturaleza.",
    price: 35000,
  },
  {
    id: 5,
    title: "Tertulia Comunitaria",
    date: "2025-11-28",
    time: "19:00 - 21:00",
    location: "Tertuliadero El Jardín",
    type: "Presencial",
    capacity: 30,
    description: "Diálogo abierto sobre sostenibilidad, agroecología y vida rural.",
    price: 0,
  },
  {
    id: 6,
    title: "Kit de Siembra para Principiantes",
    date: "2025-12-01",
    time: "10:00 - 12:00",
    location: "MANA, Río Negro",
    type: "Presencial",
    capacity: 12,
    description: "Aprende a preparar tu kit de siembra y cultiva en casa.",
    price: 80000,
  },
]

export default function EventsPage() {
  const [selectedType, setSelectedType] = useState<string>("")
  const [registeredEvents, setRegisteredEvents] = useState<number[]>([])

  const filteredEvents = EVENTS.filter((event) => !selectedType || event.type === selectedType)

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("es-CO", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const toggleRsvp = (id: number) => {
    setRegisteredEvents((prev) => (prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent/10 via-secondary/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Eventos y Talleres</h1>
          <p className="text-xl text-foreground/80 max-w-2xl">
            Eventos educativos, tertulias comunitarias y experiencias inmersivas
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Filter Tabs */}
        <div className="flex gap-4 mb-12 flex-wrap">
          <Button
            onClick={() => setSelectedType("")}
            variant={selectedType === "" ? "default" : "outline"}
            className={selectedType === "" ? "bg-primary" : ""}
          >
            Todos
          </Button>
          <Button
            onClick={() => setSelectedType("Presencial")}
            variant={selectedType === "Presencial" ? "default" : "outline"}
            className={selectedType === "Presencial" ? "bg-primary" : ""}
          >
            Presenciales
          </Button>
          <Button
            onClick={() => setSelectedType("Virtual")}
            variant={selectedType === "Virtual" ? "default" : "outline"}
            className={selectedType === "Virtual" ? "bg-primary" : ""}
          >
            Virtuales
          </Button>
        </div>

        {/* Events Grid */}
        <div className="space-y-6">
          {filteredEvents.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:p-8">
                {/* Date and Time */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-foreground">
                    <Calendar size={20} className="text-primary" />
                    <span className="font-semibold">{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Clock size={20} className="text-secondary" />
                    <span className="font-semibold">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <MapPin size={20} className="text-accent" />
                    <span className="font-semibold">{event.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        event.type === "Presencial" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                      }`}
                    >
                      {event.type}
                    </span>
                    <span className="text-xs text-foreground/50">{event.capacity} cupos</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{event.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{event.description}</p>
                </div>

                {/* Actions */}
                <div className="flex flex-col justify-between">
                  <div>
                    {event.price > 0 && (
                      <div className="text-3xl font-bold text-primary">${event.price.toLocaleString("es-CO")}</div>
                    )}
                    {event.price === 0 && <div className="text-lg font-semibold text-green-600">Gratis</div>}
                  </div>
                  <Button
                    onClick={() => toggleRsvp(event.id)}
                    className={
                      registeredEvents.includes(event.id)
                        ? "bg-secondary hover:bg-secondary/90 text-foreground"
                        : "bg-primary hover:bg-primary/90"
                    }
                  >
                    {registeredEvents.includes(event.id) ? "Registrado ✓" : "Registrarse"}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
