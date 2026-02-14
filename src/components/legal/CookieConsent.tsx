import * as React from "react"
import { Cookie } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

type ConsentValue = "accepted" | "declined"

const STORAGE_KEY = "vital-norte-cookie-consent"

function readConsent(): ConsentValue | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY)
    if (v === "accepted" || v === "declined") return v
    return null
  } catch {
    return null
  }
}

function writeConsent(v: ConsentValue) {
  try {
    localStorage.setItem(STORAGE_KEY, v)
  } catch {
    // ignore
  }
}

export function CookieConsent({
  className,
}: {
  className?: string
}) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const existing = readConsent()
    if (!existing) setOpen(true)
  }, [])

  if (!open) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center",
        className
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Consentimento de cookies"
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <Card className="relative w-full max-w-xl border-border/70 bg-background/90 shadow-2xl backdrop-blur">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <span className="inline-grid h-9 w-9 place-items-center rounded-xl border border-border/70 bg-background/70">
              <Cookie className="h-4 w-4" />
            </span>
            Olá, gostaríamos de falar com você.
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-muted-foreground">
          <div className="space-y-3">
            <p>
              Usamos cookies e armazenamento local para melhorar sua experiência
              (ex.: lembrar suas preferências de visualização) e para entender como
              você interage com o site.
            </p>
            <p>Se você concordar, podemos:</p>
            <div className="space-y-2 pl-4">
              <p>(1) Armazenar suas preferências de navegação e consentimento.</p>
              <p>(2) Medir desempenho e uso de páginas para melhorias.</p>
              <p>(3) Exibir conteúdos e ofertas alinhadas ao seu interesse.</p>
            </div>
            <p className="text-foreground">Você está de acordo?</p>
          </div>

          <Separator />

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-xs">
              Ao continuar, você concorda com nossa{" "}
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="underline underline-offset-4 hover:text-foreground"
                  >
                    Política de Cookies
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Política de Cookies (exemplo)</DialogTitle>
                    <DialogDescription>
                      Texto demonstrativo. Substitua pelo documento oficial da Vital
                      Norte.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>
                      Cookies e armazenamento local podem ser usados para lembrar
                      preferências (tema claro/escuro), melhorar performance e medir
                      estatísticas de navegação.
                    </p>
                    <p>
                      Você pode recusar e continuar usando o site. Nesse caso, apenas
                      cookies/armazenamentos essenciais serão utilizados.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
              .
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Button
                variant="outline"
                className="vn-btn-pop"
                onClick={() => {
                  writeConsent("declined")
                  setOpen(false)
                }}
              >
                Agora não
              </Button>
              <Button
                className="vn-btn-pop"
                onClick={() => {
                  writeConsent("accepted")
                  setOpen(false)
                }}
              >
                Eu aceito
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

