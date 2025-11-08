"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface SectionCardProps {
  title: string
  description: string
  icon: string
  href: string
  color: "primary" | "secondary" | "accent"
}

export default function SectionCard({ title, description, icon, href, color }: SectionCardProps) {
  const colorClasses = {
    primary: "bg-primary/10 border-primary/30 hover:bg-primary/20",
    secondary: "bg-secondary/10 border-secondary/30 hover:bg-secondary/20",
    accent: "bg-accent/10 border-accent/30 hover:bg-accent/20",
  }

  const iconColorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    accent: "text-accent",
  }

  return (
    <Card className={`p-8 border transition-all duration-300 ${colorClasses[color]} hover:shadow-lg`}>
      <div className={`text-5xl mb-4 ${iconColorClasses[color]}`}>{icon}</div>
      <h3 className="text-2xl font-bold mb-3 text-foreground">{title}</h3>
      <p className="text-foreground/70 mb-6 leading-relaxed">{description}</p>
      <Button asChild variant="ghost" className={`group text-${color} hover:text-${color}/80 p-0 h-auto font-semibold`}>
        <Link href={href} className="flex items-center gap-2">
          Explorar
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </Card>
  )
}
