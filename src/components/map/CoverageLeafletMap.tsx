import * as React from "react"
import { CircleMarker, MapContainer, TileLayer, Tooltip } from "react-leaflet"

import type { Client, CoverageCity } from "@/data/vitalNorte"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
  cities: CoverageCity[]
  clients: Client[]
  selectedCityId: string
  onSelectCity: (cityId: string) => void
}

function getClientYear(clients: Client[], clientId: string) {
  return clients.find((c) => c.id === clientId)?.year
}

export function CoverageLeafletMap({
  className,
  cities,
  clients,
  selectedCityId,
  onSelectCity,
}: Props) {
  const center = React.useMemo<[number, number]>(() => {
    const selected = cities.find((c) => c.id === selectedCityId)
    if (selected) return [selected.lat, selected.lng]
    return [-3.2, -60.0] // Norte do Brasil (fallback)
  }, [cities, selectedCityId])

  return (
    <div className={cn("h-[360px] w-full sm:h-[440px]", className)}>
      <MapContainer
        center={center}
        zoom={4}
        scrollWheelZoom={false}
        className="h-full w-full rounded-xl"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {cities.map((city) => {
          const isActive = city.id === selectedCityId
          const year = getClientYear(clients, city.clientId)
          return (
            <CircleMarker
              key={city.id}
              center={[city.lat, city.lng]}
              radius={isActive ? 10 : 8}
              pathOptions={{
                color: isActive ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
                fillColor: isActive
                  ? "hsl(var(--primary))"
                  : "hsl(var(--muted-foreground))",
                fillOpacity: 0.9,
                weight: 2,
              }}
              eventHandlers={{
                click: () => onSelectCity(city.id),
              }}
            >
              <Tooltip direction="top" offset={[0, -6]} opacity={1} permanent={false}>
                <div className="text-xs font-medium">
                  {city.label}/{city.state} {year ? `• ${year}` : ""}
                </div>
              </Tooltip>
            </CircleMarker>
          )
        })}
      </MapContainer>
    </div>
  )
}

