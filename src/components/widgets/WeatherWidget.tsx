import * as React from "react"
import {
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  RefreshCw,
  Sun,
  Wind,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type GeocodingResponse = {
  results?: Array<{
    id: number
    name: string
    latitude: number
    longitude: number
    country_code: string
    country: string
    admin1?: string
    admin2?: string
  }>
}

type ForecastResponse = {
  current?: {
    time: string
    temperature_2m: number
    wind_speed_10m: number
    weather_code: number
  }
  daily?: {
    time: string[]
    temperature_2m_max: number[]
    temperature_2m_min: number[]
  }
}

function weatherLabel(code: number) {
  // https://open-meteo.com/en/docs (WMO Weather interpretation codes)
  if (code === 0) return "Céu limpo"
  if (code === 1 || code === 2) return "Poucas nuvens"
  if (code === 3) return "Nublado"
  if (code === 45 || code === 48) return "Neblina"
  if (code === 51 || code === 53 || code === 55) return "Garoa"
  if (code === 61 || code === 63 || code === 65) return "Chuva"
  if (code === 71 || code === 73 || code === 75) return "Neve"
  if (code === 80 || code === 81 || code === 82) return "Pancadas de chuva"
  if (code === 95 || code === 96 || code === 99) return "Tempestade"
  return "Condições variáveis"
}

function WeatherIcon({ code }: { code: number }) {
  const cls = "h-5 w-5"
  if (code === 0) return <Sun className={cls} />
  if (code >= 1 && code <= 3) return <Cloud className={cls} />
  if (code === 45 || code === 48) return <CloudFog className={cls} />
  if (code >= 51 && code <= 55) return <CloudDrizzle className={cls} />
  if ((code >= 61 && code <= 65) || (code >= 80 && code <= 82))
    return <CloudRain className={cls} />
  if (code >= 71 && code <= 75) return <CloudSnow className={cls} />
  if (code >= 95) return <CloudLightning className={cls} />
  return <Cloud className={cls} />
}

export function WeatherWidget({
  className,
  title = "Previsão do tempo",
  locationLabel = "Jaíba/MG",
  geocodingQuery = "Jaiba",
  admin1 = "Minas Gerais",
  countryCode = "BR",
  timezone = "America/Sao_Paulo",
}: {
  className?: string
  title?: string
  locationLabel?: string
  geocodingQuery?: string
  admin1?: string
  countryCode?: string
  timezone?: string
}) {
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)
  const [data, setData] = React.useState<{
    temp: number
    wind: number
    code: number
    label: string
    tMax?: number
    tMin?: number
    updatedAt: string
  } | null>(null)

  const load = React.useCallback(async (signal?: AbortSignal) => {
    setLoading(true)
    setError(null)
    try {
      const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        geocodingQuery
      )}&count=5&language=pt&format=json`
      const geoRes = await fetch(geoUrl, { signal })
      const geoJson = (await geoRes.json()) as GeocodingResponse
      const results = geoJson.results ?? []
      const best =
        results.find(
          (r) => r.country_code === countryCode && r.admin1 === admin1
        ) ?? results.find((r) => r.country_code === countryCode) ?? results[0]

      if (!best) throw new Error("Localização não encontrada.")

      const forecastUrl =
        `https://api.open-meteo.com/v1/forecast?latitude=${best.latitude}` +
        `&longitude=${best.longitude}` +
        `&current=temperature_2m,weather_code,wind_speed_10m` +
        `&daily=temperature_2m_max,temperature_2m_min` +
        `&timezone=${encodeURIComponent(timezone)}`

      const fcRes = await fetch(forecastUrl, { signal })
      const fcJson = (await fcRes.json()) as ForecastResponse
      const cur = fcJson.current
      if (!cur) throw new Error("Sem dados de previsão no momento.")

      const tMax = fcJson.daily?.temperature_2m_max?.[0]
      const tMin = fcJson.daily?.temperature_2m_min?.[0]

      setData({
        temp: cur.temperature_2m,
        wind: cur.wind_speed_10m,
        code: cur.weather_code,
        label: weatherLabel(cur.weather_code),
        tMax,
        tMin,
        updatedAt: cur.time,
      })
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Falha ao carregar previsão."
      if (msg !== "The user aborted a request.") setError(msg)
    } finally {
      setLoading(false)
    }
  }, [admin1, countryCode, geocodingQuery, timezone])

  React.useEffect(() => {
    const ac = new AbortController()
    load(ac.signal)
    return () => ac.abort()
  }, [load])

  return (
    <div className={cn("h-full", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle className="text-base">{title}</CardTitle>
            <div className="mt-1 text-sm text-muted-foreground">
              {locationLabel}
            </div>
          </div>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="vn-btn-pop"
            onClick={() => load()}
            aria-label="Atualizar previsão"
          >
            <RefreshCw className={cn("h-4 w-4", loading ? "animate-spin" : "")} />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {loading ? (
          <div className="text-sm text-muted-foreground">Carregando previsão…</div>
        ) : error ? (
          <div className="rounded-lg border border-border/70 bg-background/60 p-3 text-sm text-muted-foreground">
            {error}
          </div>
        ) : data ? (
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="vn-icon-ring">
                <WeatherIcon code={data.code} />
              </div>
              <div>
                <div className="text-2xl font-semibold">
                  {Math.round(data.temp)}°C
                </div>
                <div className="text-sm text-muted-foreground">{data.label}</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-background/40 px-2 py-1">
                <Wind className="h-4 w-4" /> {Math.round(data.wind)} km/h
              </span>
              {typeof data.tMin === "number" && typeof data.tMax === "number" ? (
                <span className="inline-flex items-center gap-1 rounded-md border border-border/60 bg-background/40 px-2 py-1">
                  Min {Math.round(data.tMin)}° • Máx {Math.round(data.tMax)}°
                </span>
              ) : null}
            </div>

            <div className="text-xs text-muted-foreground">
              Atualizado em {new Date(data.updatedAt).toLocaleString("pt-BR")}
            </div>
          </div>
        ) : null}

        <div className="text-xs text-muted-foreground">
          Fonte: Open‑Meteo (dados públicos).
        </div>
      </CardContent>
    </div>
  )
}

