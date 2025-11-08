"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MANALOGO-YIHWGzqm5x1mjpgNJkNoxEjBfDotMe.jpg"
            alt="MANA Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="hidden sm:inline font-bold text-primary">MANA</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/mana" className="text-foreground hover:text-primary transition">
            Escuela
          </Link>
          <Link href="/mochima" className="text-foreground hover:text-primary transition">
            MoChiMa
          </Link>
          <Link href="/tertuliadero" className="text-foreground hover:text-primary transition">
            Tertuliadero
          </Link>
          <Link href="/shop" className="text-foreground hover:text-primary transition">
            Tienda
          </Link>
          <Link href="/blog" className="text-foreground hover:text-primary transition">
            Blog
          </Link>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/contact">Contacto</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/mana" className="text-foreground hover:text-primary transition py-2">
              Escuela
            </Link>
            <Link href="/mochima" className="text-foreground hover:text-primary transition py-2">
              MoChiMa
            </Link>
            <Link href="/tertuliadero" className="text-foreground hover:text-primary transition py-2">
              Tertuliadero
            </Link>
            <Link href="/shop" className="text-foreground hover:text-primary transition py-2">
              Tienda
            </Link>
            <Link href="/blog" className="text-foreground hover:text-primary transition py-2">
              Blog
            </Link>
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <Link href="/contact">Contacto</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
