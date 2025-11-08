"use client"

import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface ShopFiltersProps {
  filters: {
    types: string[]
    characteristics: string[]
    priceRange: [number, number]
    availability: string[]
    search: string
  }
  onFilterChange: (filters: any) => void
}

export default function ShopFilters({ filters, onFilterChange }: ShopFiltersProps) {
  const [expandedSections, setExpandedSections] = useState({
    type: true,
    characteristics: true,
    price: true,
    availability: true,
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const typeOptions = [
    { value: "plants", label: "Plantas" },
    { value: "trees", label: "Árboles" },
    { value: "infusions", label: "Infusiones" },
    { value: "creams", label: "Salsas y Cremas" },
    { value: "seeds", label: "Semillas" },
  ]

  const characteristicOptions = [
    { value: "medicinal", label: "Medicinales" },
    { value: "aromática", label: "Aromáticas" },
    { value: "frutal", label: "Frutales" },
    { value: "nativo", label: "Nativas" },
    { value: "resistente-sequía", label: "Resistentes a Sequía" },
    { value: "ornamental", label: "Ornamentales" },
    { value: "artesanal", label: "Artesanales" },
  ]

  const availabilityOptions = [
    { value: "in-stock", label: "En Stock" },
    { value: "pre-order", label: "Pre-Orden" },
  ]

  const handleTypeChange = (type: string, checked: boolean) => {
    const newTypes = checked ? [...filters.types, type] : filters.types.filter((t) => t !== type)
    onFilterChange({ ...filters, types: newTypes })
  }

  const handleCharacteristicChange = (char: string, checked: boolean) => {
    const newChars = checked ? [...filters.characteristics, char] : filters.characteristics.filter((c) => c !== char)
    onFilterChange({ ...filters, characteristics: newChars })
  }

  const handleAvailabilityChange = (avail: string, checked: boolean) => {
    const newAvail = checked ? [...filters.availability, avail] : filters.availability.filter((a) => a !== avail)
    onFilterChange({ ...filters, availability: newAvail })
  }

  const handlePriceChange = (index: number, value: number) => {
    const newRange: [number, number] = [...filters.priceRange] as [number, number]
    newRange[index] = value
    if (newRange[0] <= newRange[1]) {
      onFilterChange({ ...filters, priceRange: newRange })
    }
  }

  const FilterSection = ({ title, section, children }: any) => (
    <Card className="p-4 border-border/50">
      <button
        onClick={() => toggleSection(section)}
        className="w-full flex items-center justify-between font-semibold text-foreground hover:text-primary transition"
      >
        {title}
        <ChevronDown size={20} className={`transition-transform ${expandedSections[section] ? "rotate-180" : ""}`} />
      </button>
      {expandedSections[section] && <div className="mt-4 space-y-3">{children}</div>}
    </Card>
  )

  return (
    <div className="lg:col-span-1 space-y-4">
      <h2 className="text-2xl font-bold text-primary mb-6">Filtros</h2>

      {/* Type Filter */}
      <FilterSection title="Tipo de Producto" section="type">
        {typeOptions.map((option) => (
          <label key={option.value} className="flex items-center gap-3 cursor-pointer">
            <Checkbox
              checked={filters.types.includes(option.value)}
              onCheckedChange={(checked) => handleTypeChange(option.value, checked as boolean)}
            />
            <span className="text-sm text-foreground/80">{option.label}</span>
          </label>
        ))}
      </FilterSection>

      {/* Characteristics Filter */}
      <FilterSection title="Características" section="characteristics">
        {characteristicOptions.map((option) => (
          <label key={option.value} className="flex items-center gap-3 cursor-pointer">
            <Checkbox
              checked={filters.characteristics.includes(option.value)}
              onCheckedChange={(checked) => handleCharacteristicChange(option.value, checked as boolean)}
            />
            <span className="text-sm text-foreground/80">{option.label}</span>
          </label>
        ))}
      </FilterSection>

      {/* Price Filter */}
      <FilterSection title="Rango de Precio" section="price">
        <div className="space-y-4">
          <div>
            <label className="text-sm text-foreground/70">
              Mínimo: ${filters.priceRange[0].toLocaleString("es-CO")}
            </label>
            <input
              type="range"
              min="0"
              max="150000"
              step="5000"
              value={filters.priceRange[0]}
              onChange={(e) => handlePriceChange(0, Number.parseInt(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="text-sm text-foreground/70">
              Máximo: ${filters.priceRange[1].toLocaleString("es-CO")}
            </label>
            <input
              type="range"
              min="0"
              max="150000"
              step="5000"
              value={filters.priceRange[1]}
              onChange={(e) => handlePriceChange(1, Number.parseInt(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      </FilterSection>

      {/* Availability Filter */}
      <FilterSection title="Disponibilidad" section="availability">
        {availabilityOptions.map((option) => (
          <label key={option.value} className="flex items-center gap-3 cursor-pointer">
            <Checkbox
              checked={filters.availability.includes(option.value)}
              onCheckedChange={(checked) => handleAvailabilityChange(option.value, checked as boolean)}
            />
            <span className="text-sm text-foreground/80">{option.label}</span>
          </label>
        ))}
      </FilterSection>

      {/* Clear Filters */}
      {(filters.types.length > 0 ||
        filters.characteristics.length > 0 ||
        filters.availability.length > 0 ||
        filters.priceRange[0] > 0 ||
        filters.priceRange[1] < 150000) && (
        <button
          onClick={() =>
            onFilterChange({
              types: [],
              characteristics: [],
              priceRange: [0, 150000],
              availability: [],
              search: "",
            })
          }
          className="w-full py-2 px-4 bg-muted hover:bg-muted/80 text-foreground rounded-md transition text-sm font-semibold"
        >
          Limpiar Filtros
        </button>
      )}
    </div>
  )
}
