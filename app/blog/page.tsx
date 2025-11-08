"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Search, User } from "lucide-react"
import { useState } from "react"

const BLOG_POSTS = [
  {
    id: 1,
    title: "Agroecología: Fundamentos para la Sostenibilidad",
    excerpt: "Descubre los principios básicos de la agroecología y cómo aplicarlos en tu finca o huerto urbano.",
    category: "Educación",
    author: "Isidro Rodríguez",
    date: "2025-11-05",
    image: "/placeholder.svg?key=blog1",
  },
  {
    id: 2,
    title: "Hallazgos Arqueológicos en Río Negro",
    excerpt: "Nuevos descubrimientos sobre la ocupación ancestral en nuestra región y su relevancia contemporánea.",
    category: "Investigación",
    author: "Carlos Mendez",
    date: "2025-11-03",
    image: "/placeholder.svg?key=blog2",
  },
  {
    id: 3,
    title: "Plantas Medicinales del Trópico Colombiano",
    excerpt: "Guía de hierbas curativas, su cultivo, preparación y beneficios para la salud integral.",
    category: "Medicina Natural",
    author: "María Elena García",
    date: "2025-11-01",
    image: "/placeholder.svg?key=blog3",
  },
  {
    id: 4,
    title: "Revertir el Éxodo Rural: Historias de Éxito",
    excerpt: "Testimonios de agricultores que eligieron quedarse en el campo con dignidad y prosperidad.",
    category: "Historias",
    author: "Isidro Rodríguez",
    date: "2025-10-28",
    image: "/placeholder.svg?key=blog4",
  },
  {
    id: 5,
    title: "Biodiversidad: La Riqueza del Campo Colombiano",
    excerpt: "Exploramos la increíble diversidad de vida en nuestros ecosistemas rurales.",
    category: "Conservación",
    author: "Carlos Mendez",
    date: "2025-10-25",
    image: "/placeholder.svg?key=blog5",
  },
  {
    id: 6,
    title: "Compostaje Casero: Nutriendo la Tierra",
    excerpt: "Técnicas prácticas para crear compost en casa y cerrar ciclos de nutrientes.",
    category: "Prácticas",
    author: "María Elena García",
    date: "2025-10-20",
    image: "/placeholder.svg?key=blog6",
  },
]

export default function BlogPage() {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("")

  const categories = ["Educación", "Investigación", "Medicina Natural", "Historias", "Conservación", "Prácticas"]

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = !selectedCategory || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("es-CO", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">Blog MANA</h1>
          <p className="text-xl text-foreground/80 max-w-2xl">
            Artículos sobre agroecología, investigaciones, sostenibilidad y sabiduría campesina
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative mb-8">
            <Search className="absolute left-4 top-3.5 text-foreground/50" size={20} />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-foreground/50"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => setSelectedCategory("")}
              variant={selectedCategory === "" ? "default" : "outline"}
              className={selectedCategory === "" ? "bg-primary" : ""}
            >
              Todos
            </Button>
            {categories.map((cat) => (
              <Button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                variant={selectedCategory === cat ? "default" : "outline"}
                className={selectedCategory === cat ? "bg-primary" : ""}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-muted/50 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-foreground/50">{formatDate(post.date)}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground leading-snug">{post.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <Button asChild variant="ghost" className="text-primary p-0 h-auto">
                      <Link href={`/blog/${post.id}`}>Leer más →</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-12 text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Sin resultados</h3>
            <p className="text-foreground/70">
              No encontramos artículos que coincidan con tu búsqueda. Intenta otros términos.
            </p>
          </Card>
        )}
      </div>

      <Footer />
    </div>
  )
}
