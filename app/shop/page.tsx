"use client"

import { useState, useMemo } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import ShopFilters from "@/components/shop/shop-filters"
import ProductCard from "@/components/shop/product-card"
import { ShoppingCart } from "lucide-react"

// Mock product data
const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Menta Aromática",
    price: 15000,
    type: "plants",
    characteristics: ["aromática", "medicinal"],
    image: "/placeholder.svg?key=prod1",
    description: "Planta aromática medicinal para tés y aromaterapia",
    organic: true,
    availability: "in-stock",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Albahaca Sagrada",
    price: 18000,
    type: "plants",
    characteristics: ["aromática", "medicinal"],
    image: "/placeholder.svg?key=prod2",
    description: "Hierba sagrada con propiedades adaptógenas",
    organic: true,
    availability: "in-stock",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Mango Criollo",
    price: 85000,
    type: "trees",
    characteristics: ["frutal", "nativo"],
    image: "/placeholder.svg?key=prod3",
    description: "Árbol frutal nativo resistente a clima tropical",
    organic: true,
    availability: "in-stock",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Guayacán",
    price: 75000,
    type: "trees",
    characteristics: ["nativo", "resistente-sequía"],
    image: "/placeholder.svg?key=prod4",
    description: "Árbol nativo de madera noble y flores amarillas",
    organic: true,
    availability: "pre-order",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Infusión Medicinal Mix",
    price: 22000,
    type: "infusions",
    characteristics: ["medicinal"],
    image: "/placeholder.svg?key=prod5",
    description: "Mezcla de hierbas medicinales para inmunidad",
    organic: true,
    availability: "in-stock",
    rating: 5,
  },
  {
    id: 6,
    name: "Salsa Cremana",
    price: 28000,
    type: "creams",
    characteristics: ["artesanal"],
    image: "/placeholder.svg?key=prod6",
    description: "Salsa especial de la casa hecha artesanalmente",
    organic: true,
    availability: "in-stock",
    rating: 4.9,
  },
  {
    id: 7,
    name: "Rosa Ancestral",
    price: 35000,
    type: "plants",
    characteristics: ["ornamental"],
    image: "/placeholder.svg?key=prod7",
    description: "Rosa nativa ornamental para jardines",
    organic: true,
    availability: "in-stock",
    rating: 4.8,
  },
  {
    id: 8,
    name: "Semillas Kit de Siembra",
    price: 45000,
    type: "seeds",
    characteristics: ["kit-educativo"],
    image: "/placeholder.svg?key=prod8",
    description: "Kit completo para iniciación en agroecología",
    organic: true,
    availability: "in-stock",
    rating: 4.9,
  },
]

export default function ShopPage() {
  const [filters, setFilters] = useState({
    types: [] as string[],
    characteristics: [] as string[],
    priceRange: [0, 150000],
    availability: [] as string[],
    search: "",
  })

  const [sortBy, setSortBy] = useState("newest")

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    const products = MOCK_PRODUCTS.filter((product) => {
      // Type filter
      if (filters.types.length > 0 && !filters.types.includes(product.type)) {
        return false
      }

      // Characteristics filter
      if (filters.characteristics.length > 0) {
        const hasChar = filters.characteristics.some((char) => product.characteristics.includes(char))
        if (!hasChar) return false
      }

      // Price filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false
      }

      // Availability filter
      if (filters.availability.length > 0 && !filters.availability.includes(product.availability)) {
        return false
      }

      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase()
        return (
          product.name.toLowerCase().includes(searchLower) || product.description.toLowerCase().includes(searchLower)
        )
      }

      return true
    })

    // Sort products
    switch (sortBy) {
      case "price-asc":
        products.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        products.sort((a, b) => b.price - a.price)
        break
      case "rating":
        products.sort((a, b) => b.rating - a.rating)
        break
      case "name":
        products.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        break
    }

    return products
  }, [filters, sortBy])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-secondary/10 via-accent/5 to-primary/5 border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Tienda MANA</h1>
            <ShoppingCart size={40} className="text-secondary opacity-30" />
          </div>
          <p className="text-lg text-foreground/80">
            Productos orgánicos certificados, plantas sostenibles e infusiones artesanales
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <ShopFilters filters={filters} onFilterChange={setFilters} />

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Sort Bar */}
            <div className="mb-8 space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="text"
                  placeholder="Buscar productos..."
                  value={filters.search}
                  onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                  className="flex-1"
                />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-border rounded-md bg-background text-foreground"
                >
                  <option value="newest">Más Nuevos</option>
                  <option value="price-asc">Menor Precio</option>
                  <option value="price-desc">Mayor Precio</option>
                  <option value="rating">Mejor Valorados</option>
                  <option value="name">A - Z</option>
                </select>
              </div>
              <p className="text-sm text-foreground/70">
                {filteredProducts.length} producto{filteredProducts.length !== 1 ? "s" : ""} encontrado
                {filteredProducts.length !== 1 ? "s" : ""}
              </p>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center">
                <h3 className="text-2xl font-semibold text-foreground mb-4">Sin resultados</h3>
                <p className="text-foreground/70 mb-6">
                  No encontramos productos con esos criterios. Intenta ajustar tus filtros.
                </p>
                <Button
                  onClick={() =>
                    setFilters({
                      types: [],
                      characteristics: [],
                      priceRange: [0, 150000],
                      availability: [],
                      search: "",
                    })
                  }
                  className="bg-primary hover:bg-primary/90"
                >
                  Limpiar Filtros
                </Button>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Info Section */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 border-secondary/20">
              <h3 className="text-xl font-semibold mb-2 text-primary">Certificación Orgánica</h3>
              <p className="text-foreground/70">
                Todos nuestros productos son certificados como orgánicos y sostenibles.
              </p>
            </Card>
            <Card className="p-6 border-secondary/20">
              <h3 className="text-xl font-semibold mb-2 text-primary">Embalaje Ecológico</h3>
              <p className="text-foreground/70">Utilizamos empaques 100% biodegradables y compostables.</p>
            </Card>
            <Card className="p-6 border-secondary/20">
              <h3 className="text-xl font-semibold mb-2 text-primary">Envío Sostenible</h3>
              <p className="text-foreground/70">Opciones de envío carbono-neutral para toda Colombia.</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
