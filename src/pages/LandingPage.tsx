import * as React from "react"
import {
  Calendar,
  ChevronRight,
  MessageCircle,
  Sparkles,
} from "lucide-react"

import logoUrl from "@/assets/vital-norte-logo.png"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme/ThemeToggle"
import { CookieConsent } from "@/components/legal/CookieConsent"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  clients,
  contact,
  coverageCities,
  location,
  services,
  stats,
  timeline,
  vitalNorte,
  weather,
} from "@/data/vitalNorte"
import { WeatherWidget } from "@/components/widgets/WeatherWidget"
import { CoverageLeafletMap } from "@/components/map/CoverageLeafletMap"

type NavItem = { label: string; href: string }

const nav: NavItem[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "História", href: "#historia" },
  { label: "Clientes", href: "#clientes" },
  { label: "Mapa", href: "#mapa" },
  { label: "Contato", href: "#contato" },
]

function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}
      {...props}
    />
  )
}

function GlassCard({
  className,
  ...props
}: React.ComponentProps<typeof Card>) {
  return <Card className={cn("vn-glass", className)} {...props} />
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-16 items-center justify-between gap-3">
        <a href="#topo" className="flex items-center gap-3">
          <img
            src={logoUrl}
            alt="Vital Norte"
            className="h-9 w-auto text-foreground"
          />
          <div className="hidden leading-tight sm:block">
            <div className="text-sm font-semibold">{vitalNorte.name}</div>
            <div className="text-xs text-muted-foreground">
              Construtora & Engenharia
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-5 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors",
                "hover:text-foreground hover:bg-accent/50",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                "after:absolute after:inset-x-2 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <Button asChild className="hidden sm:inline-flex vn-btn-pop">
            <a href="#contato">{vitalNorte.ctaPrimary}</a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden">
                Menu
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[320px]">
              <div className="flex items-center gap-3">
                <img src={logoUrl} alt="Vital Norte" className="h-9 w-auto" />
                <div>
                  <div className="text-sm font-semibold">{vitalNorte.name}</div>
                  <div className="text-xs text-muted-foreground">
                    Construtora & Engenharia
                  </div>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="flex flex-col gap-2">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors",
                      "hover:bg-accent/60 hover:text-foreground",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    )}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <Separator className="my-4" />
              <ThemeToggle showLabel className="w-full" />
              <Separator className="my-4" />
              <Button asChild className="w-full vn-btn-pop">
                <a href="#contato">{vitalNorte.ctaPrimary}</a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  )
}

function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={vitalNorte.heroImage}
          alt="Imagem de obra / construtora"
          className="h-full w-full object-cover opacity-40"
          loading="lazy"
        />
        <div className="absolute inset-0 vn-hero-gradient" />
        <div className="absolute inset-0 vn-grid-mask" />
      </div>

      <Container className="relative py-16 text-white sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Badge className="vn-glass inline-flex gap-2 py-1 text-white/80">
              <Sparkles className="h-3.5 w-3.5 vn-icon-float" />
              Engenharia, segurança e qualidade
            </Badge>

            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              {vitalNorte.tagline}
            </h1>
            <p className="mt-4 max-w-prose text-pretty text-white/80">
              Obras civis e industriais, infraestrutura e pavimentação. Atendimento
              consultivo e entregas com padrão técnico, prazo e transparência.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="vn-btn-pop">
                <a href="#contato">
                  {vitalNorte.ctaPrimary} <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="vn-btn-pop">
                <a href="#servicos">{vitalNorte.ctaSecondary}</a>
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((s) => (
                <GlassCard key={s.label} className="p-0">
                  <CardContent className="p-4">
                    <div className="text-2xl font-semibold">{s.value}</div>
                    <div className="mt-1 text-xs text-white/70">
                      {s.label}
                    </div>
                  </CardContent>
                </GlassCard>
              ))}
            </div>
          </div>

          <div className="lg:pl-6">
            <GlassCard className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-base">Por que a Vital Norte?</CardTitle>
                <CardDescription>
                  Processo claro, equipe técnica e foco na entrega.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    title: "Planejamento",
                    desc: "Cronograma realista e comunicação frequente.",
                  },
                  { title: "Profissionais", desc: "Equipe técnica qualificada." },
                  {
                    title: "Qualidade",
                    desc: "Checklists e entrega técnica.",
                  },
                  {
                    title: "Confiabilidade",
                    desc: "Gestão de custos e documentação.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur"
                  >
                    <div className="text-sm font-semibold">{item.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </CardContent>
            </GlassCard>
          </div>
        </div>
      </Container>
    </section>
  )
}

function About() {
  return (
    <section id="sobre" className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Sobre a {vitalNorte.name}
            </h2>
            <p className="mt-3 text-muted-foreground">
            Há mais de 7 anos, a <b>Vital Norte Construtora</b> é sinônimo de qualidade e confiança no setor da construção civil em toda a região. Nossa trajetória é marcada por crescimento contínuo e superação, fruto de uma filosofia empresarial dinâmica que prioriza a inovação, a excelência nos resultados e o desenvolvimento sustentável dos nossos negócios, colaboradores e comunidades.
            </p>
            <div className="mt-6 space-y-4 text-sm text-muted-foreground">
              {vitalNorte.about.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { k: "Engenharia", v: "Equipe técnica e execução padronizada" },
              { k: "Transparência", v: "Relatórios, medições e documentação" },
              { k: "Segurança", v: "SST aplicado do início ao fim" },
              { k: "Eficiência", v: "Prazo, custo e qualidade alinhados" },
            ].map((item) => (
              <GlassCard key={item.k}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{item.k}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {item.v}
                </CardContent>
              </GlassCard>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function Services() {
  return (
    <section id="servicos" className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Principais serviços
            </h2>
            <p className="mt-3 max-w-prose text-muted-foreground">
              Do planejamento à entrega — com padrões de segurança e qualidade.
            </p>
          </div>
          <Button asChild variant="outline" className="vn-btn-pop">
            <a href="#contato">Falar com um especialista</a>
          </Button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <GlassCard key={s.title} className="group">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="vn-icon-ring">
                      <s.icon className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
                    </div>
                    <CardTitle className="text-base">{s.title}</CardTitle>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
                </div>
                <CardDescription>{s.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {s.highlights.map((h) => (
                  <Badge key={h} variant="secondary" className="vn-badge-glass">
                    {h}
                  </Badge>
                ))}
              </CardContent>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Timeline() {
  return (
    <section id="historia" className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Nossa História
            </h2>
            <p className="mt-3 max-w-prose text-muted-foreground">
              Principais marcos desde a fundação até a presença consolidada.
            </p>
          </div>
        </div>

        <div className="relative mt-8">
          <div
            className="pointer-events-none absolute left-0 right-0 top-6 h-px bg-border/60"
            aria-hidden="true"
          />
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
            {timeline.map((e) => (
              <div
                key={e.year}
                className="min-w-[260px] snap-start sm:min-w-[320px]"
              >
                <GlassCard className="h-full">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="relative mt-0.5">
                        <div className="h-3 w-3 rounded-full border border-border bg-primary" />
                      </div>
                      <Badge className="vn-badge-glass">
                        <Calendar className="mr-1 h-3.5 w-3.5" />
                        {e.year}
                      </Badge>
                    </div>
                    <div className="mt-3 text-sm font-semibold">{e.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {e.description}
                    </div>
                  </CardContent>
                </GlassCard>
              </div>
            ))}
          </div>
          <div className="mt-2 text-xs text-muted-foreground">
            Arraste para o lado para ver todos os anos.
          </div>
        </div>
      </Container>
    </section>
  )
}

function Clients() {
  return (
    <section id="clientes" className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Clientes atendidos
            </h2>
            <p className="mt-3 max-w-prose text-muted-foreground">
              Alguns exemplos de segmentos e entregas recentes (dados demonstrativos).
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((c) => (
            <GlassCard key={c.id} className="group">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">{c.name}</CardTitle>
                <CardDescription>
                  {c.segment} • {c.city}/{c.state} • {c.year}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{c.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {c.delivered.map((d) => (
                    <Badge key={d} variant="secondary" className="vn-badge-glass">
                      {d}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  )
}

function CoverageMap() {
  const [selectedId, setSelectedId] = React.useState(coverageCities[0]?.id ?? "")
  const [tab, setTab] = React.useState<"detalhes" | "lista">("detalhes")
  const selectedCity = coverageCities.find((c) => c.id === selectedId)
  const selectedClient = clients.find((c) => c.id === selectedCity?.clientId)

  return (
    <section id="mapa" className="py-16 sm:py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {location.regionTitle}
            </h2>
            <p className="mt-3 max-w-prose text-muted-foreground">
              {location.hintText}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <GlassCard className="lg:col-span-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Mapa</CardTitle>
              <CardDescription>
                Cidades destacadas com clientes e ano do atendimento.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-hidden rounded-xl border border-border/60">
                <CoverageLeafletMap
                  cities={coverageCities}
                  clients={clients}
                  selectedCityId={selectedId}
                  onSelectCity={(id) => {
                    setSelectedId(id)
                    setTab("detalhes")
                  }}
                />
              </div>

              <div className="mt-3 text-xs text-muted-foreground">
                Clique nos marcadores para ver o cliente.
              </div>
            </CardContent>
          </GlassCard>

          <GlassCard>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Detalhes do atendimento</CardTitle>
              <CardDescription>Ao clicar no mapa, mostramos o cliente.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs value={tab} onValueChange={(v) => setTab(v as typeof tab)}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="detalhes">Cliente</TabsTrigger>
                  <TabsTrigger value="lista">Lista</TabsTrigger>
                </TabsList>
                <TabsContent value="detalhes" className="mt-4">
                  {selectedCity && selectedClient ? (
                    <div className="space-y-2">
                      <div className="text-sm font-semibold">{selectedClient.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {selectedClient.segment} • {selectedClient.city}/
                        {selectedClient.state} • {selectedClient.year}
                      </div>
                      <Separator className="my-3" />
                      <div className="text-sm text-muted-foreground">
                        {selectedClient.summary}
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {selectedClient.delivered.map((d) => (
                          <Badge key={d} variant="secondary" className="vn-badge-glass">
                            {d}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-sm text-muted-foreground">
                      Selecione uma cidade no mapa.
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="lista" className="mt-4">
                  <div className="space-y-2">
                    {coverageCities.map((city) => {
                      const client = clients.find((c) => c.id === city.clientId)
                      const isActive = city.id === selectedId
                      return (
                        <button
                          key={city.id}
                          type="button"
                          onClick={() => {
                            setSelectedId(city.id)
                            setTab("detalhes")
                          }}
                          className={cn(
                            "w-full rounded-lg border px-3 py-2 text-left text-sm transition",
                            isActive
                              ? "border-primary bg-primary/10"
                              : "border-border/60 bg-background/30 hover:bg-accent/40"
                          )}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="font-medium">
                              {city.label}/{city.state}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {client?.year ?? ""}
                            </div>
                          </div>
                          <div className="mt-1 text-xs text-muted-foreground">
                            {client?.name ?? ""}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </GlassCard>
        </div>
      </Container>
    </section>
  )
}

function Contact() {
  const [status, setStatus] = React.useState<"idle" | "ok">("idle")
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    subject: "Orçamento",
    message: "",
  })

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("ok")
    // formulário demonstrativo (sem backend)
    setTimeout(() => setStatus("idle"), 4000)
    setForm({
      name: "",
      email: "",
      phone: "",
      city: "",
      subject: "Orçamento",
      message: "",
    })
  }

  return (
    <section id="contato" className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Vamos conversar sobre sua obra?
            </h2>
            <p className="mt-3 max-w-prose text-muted-foreground">
              Envie as informações e retornamos com um contato técnico.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {contact.quick.map((item) => (
                <GlassCard key={item.label}>
                  <CardContent className="flex items-start gap-3 p-4">
                    <div className="vn-icon-ring">
                      <item.icon className="h-5 w-5 vn-icon-float" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold">{item.label}</div>
                      <a
                        href={item.href}
                        className="mt-0.5 block truncate text-sm text-muted-foreground hover:text-foreground"
                      >
                        {item.value}
                      </a>
                    </div>
                  </CardContent>
                </GlassCard>
              ))}
            </div>

            <div className="mt-3">
              <GlassCard>
                <WeatherWidget
                  title={weather.title}
                  locationLabel={weather.locationLabel}
                  geocodingQuery={weather.geocodingQuery}
                  admin1={weather.admin1}
                  countryCode={weather.countryCode}
                  timezone={weather.timezone}
                />
              </GlassCard>
            </div>
          </div>

          <GlassCard>
            <CardHeader>
              <CardTitle className="text-base">Formulário de contato</CardTitle>
              <CardDescription>
                Quanto mais detalhes, melhor a estimativa inicial.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Seu nome"
                    required
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      placeholder="voce@empresa.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, phone: e.target.value }))
                      }
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="city">Cidade</Label>
                    <Input
                      id="city"
                      value={form.city}
                      onChange={(e) => setForm((p) => ({ ...p, city: e.target.value }))}
                      placeholder="Ex.: Manaus/AM"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Assunto</Label>
                    <Select
                      value={form.subject}
                      onValueChange={(v) => setForm((p) => ({ ...p, subject: v }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Orçamento">Orçamento</SelectItem>
                        <SelectItem value="Reforma/Retrofit">Reforma/Retrofit</SelectItem>
                        <SelectItem value="Infraestrutura">Infraestrutura</SelectItem>
                        <SelectItem value="Industrial">Industrial</SelectItem>
                        <SelectItem value="Outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    placeholder="Descreva a obra, metragem, prazo desejado, local e requisitos."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="vn-btn-pop">
                  Enviar mensagem
                </Button>

                {status === "ok" ? (
                  <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-3 text-sm text-emerald-200">
                    Mensagem enviada (demonstração). Conecte a um backend/WhatsApp
                    quando desejar.
                  </div>
                ) : null}
              </form>
            </CardContent>
          </GlassCard>
        </div>
      </Container>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <Container className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center gap-3 lg:col-span-2">
          <img src={logoUrl} alt="Vital Norte" className="h-9 w-auto" />
          <div>
            <div className="text-sm font-semibold">{vitalNorte.name}</div>
            <div className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} • Todos os direitos reservados
            </div>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <div className="text-sm font-semibold">Contato</div>
          <a
            className="block text-muted-foreground hover:text-foreground"
            href={contact.phoneHref}
          >
            {contact.phoneDisplay}
          </a>
          <a
            className="block text-muted-foreground hover:text-foreground"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
          <div className="text-muted-foreground">
            {contact.address.line1}
            <br />
            {contact.address.city}/{contact.address.state} • {contact.address.zip}
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <div className="text-sm font-semibold">Redes sociais</div>
          <div className="flex flex-wrap gap-2">
            {contact.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="vn-icon-ring h-10 w-10"
                aria-label={s.label}
                title={s.label}
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          <div className="pt-2 text-xs text-muted-foreground">
            Política de cookies:{" "}
            <a
              href="#topo"
              className="underline underline-offset-4 hover:text-foreground"
            >
              ver aviso
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default function LandingPage() {
  return (
    <div className="min-h-screen vn-page-bg">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Timeline />
        <Clients />
        <CoverageMap />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
      <a
        href="https://wa.me/5538988299306"
        target="_blank"
        rel="noreferrer"
        className={cn(
          "fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full shadow-lg",
          "bg-[#25D366] text-white hover:bg-[#1ebe5b]",
          "ring-1 ring-black/10 dark:ring-white/10",
          "transition-transform duration-200 hover:scale-105 active:scale-95"
        )}
        aria-label="Falar no WhatsApp"
        title="Falar no WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  )
}

