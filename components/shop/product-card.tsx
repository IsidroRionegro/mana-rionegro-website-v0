"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart } from "lucide-react"
import { useState } from "react"

interface ProductCardProps {
  product: {
    id: number
    name: string
    price: number
    type: string
    characteristics: string[]
    image: string
    description: string
    organic: boolean
    availability: string
    rating: number
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const [liked, setLiked] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const availabilityLabel = {
    "in-stock": "En Stock",
    "pre-order": "Pre-Orden",
    "out-of-stock": "Agotado",
  }

  const availabilityColor = {
    "in-stock": "bg-green-100 text-green-800",
    "pre-order": "bg-yellow-100 text-yellow-800",
    "out-of-stock": "bg-red-100 text-red-800",
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      {/* Image Container */}
      <div className="relative h-64 bg-muted/50 overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          {product.organic && <Badge className="bg-green-600 hover:bg-green-700">Orgánico</Badge>}
          <Badge className={availabilityColor[product.availability as keyof typeof availabilityColor]}>
            {availabilityLabel[product.availability as keyof typeof availabilityLabel]}
          </Badge>
        </div>
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-3 left-3 p-2 rounded-full bg-background/80 hover:bg-background transition"
        >
          <Heart size={20} className={liked ? "fill-accent text-accent" : "text-foreground"} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">{product.name}</h3>
          <p className="text-sm text-foreground/70">{product.description}</p>
        </div>

        {/* Characteristics Tags */}
        <div className="flex flex-wrap gap-2">
          {product.characteristics.map((char) => (
            <Badge key={char} variant="outline" className="text-xs">
              {char}
            </Badge>
          ))}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-sm text-foreground/70">({product.rating})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-primary">${product.price.toLocaleString("es-CO")}</span>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex gap-2 items-center">
          <div className="flex items-center border border-border rounded-md">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-2 hover:bg-muted transition"
            >
              -
            </button>
            <span className="px-4 py-2 border-l border-r border-border">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 hover:bg-muted transition">
              +
            </button>
          </div>
          <Button className="flex-1 bg-primary hover:bg-primary/90 flex items-center justify-center gap-2">
            <ShoppingCart size={18} />
            Agregar
          </Button>
        </div>
      </div>
    </Card>
  )
}
