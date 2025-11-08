"use client"

import Link from "next/link"
import { Instagram, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MANALOGO-YIHWGzqm5x1mjpgNJkNoxEjBfDotMe.jpg"
                alt="MANA Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
              <h3 className="text-2xl font-bold">MANA</h3>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Escuela Experimental Campesina dedicada a la agroecología, investigación ancestral y dignificación del
              campo.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Explorar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/mana" className="hover:text-secondary transition">
                  Escuela
                </Link>
              </li>
              <li>
                <Link href="/mochima" className="hover:text-secondary transition">
                  MoChiMa Vivero
                </Link>
              </li>
              <li>
                <Link href="/tertuliadero" className="hover:text-secondary transition">
                  Tertuliadero
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-secondary transition">
                  Tienda
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Información</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-secondary transition">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-secondary transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-secondary transition">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Río Negro, Antioquia, Colombia</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@manarionegro.com" className="hover:text-secondary transition">
                  info@manarionegro.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+573001234567" className="hover:text-secondary transition">
                  +57 300 123 4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/70">
            © 2025 MANA Escuela Experimental Campesina. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/manarionegro"
              className="hover:text-secondary transition"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a href="mailto:info@manarionegro.com" className="hover:text-secondary transition" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
