import type { LucideIcon } from "lucide-react"
import {
  Building2,
  Factory,
  HardHat,
  Landmark,
  MapPinned,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Ruler,
  ShieldCheck,
  Wrench,
} from "lucide-react"

export type Service = {
  title: string
  description: string
  icon: LucideIcon
  highlights: string[]
}

export type TimelineEvent = {
  year: number
  title: string
  description: string
}

export type Client = {
  id: string
  name: string
  segment: string
  city: string
  state: string
  year: number
  summary: string
  delivered: string[]
}

export type CoverageCity = {
  id: string
  label: string
  state: string
  lat: number
  lng: number
  clientId: string
}

export const vitalNorte = {
  name: "Vital Norte",
  tagline: "Construindo com excelência no norte do país desde 2013",
  ctaPrimary: "Solicitar orçamento",
  ctaSecondary: "Ver serviços",
  heroImage:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80",
  about: [
    "A Vital Norte é uma construtora focada em obras civis e industriais com atuação no Norte do Brasil. Entregamos projetos com planejamento, segurança e qualidade.",
    "Do estudo preliminar à entrega final, nosso processo é guiado por engenharia, transparência e responsabilidade ambiental — com equipes próprias e parceiros homologados.",
  ],
}

export const contact = {
  phoneDisplay: "(31) 98888-7777",
  phoneHref: "tel:+5531988887777",
  email: "contato@vitalnorte.com.br",
  address: {
    line1: "Av. Norte 1200, Sala 502",
    line2: "Centro",
    city: "Jaíba",
    state: "MG",
    zip: "39508-000",
    country: "Brasil",
  },
  socials: [
    {
      label: "Instagram",
      href: "https://instagram.com/vitalnorte.construtora",
      icon: Instagram,
    },
    {
      label: "Facebook",
      href: "https://facebook.com/vitalnorte.construtora",
      icon: Facebook,
    },
    
  ],
  quick: [
    { label: "Telefone", value: "(31) 98888-7777", href: "tel:+5531988887777", icon: Phone },
    { label: "E-mail", value: "contato@vitalnorte.com.br", href: "mailto:contato@vitalnorte.com.br", icon: Mail },
    { label: "Endereço", value: "Jaíba/MG", href: "#contato", icon: MapPin },
  ],
} as const

export const services: Service[] = [
  {
    title: "Obras civis",
    description:
      "Execução completa de edificações residenciais e comerciais, do canteiro à entrega.",
    icon: Building2,
    highlights: ["Estruturas", "Acabamentos", "Entrega técnica"],
  },
  {
    title: "Infraestrutura",
    description:
      "Terraplenagem, drenagem, pavimentação e soluções para implantação de empreendimentos.",
    icon: Ruler,
    highlights: ["Pavimentação", "Drenagem", "Topografia"],
  },
  {
    title: "Obras industriais",
    description:
      "Construção e adequação de plantas industriais com foco em produtividade e segurança.",
    icon: Factory,
    highlights: ["Galpões", "Bases e pisos", "Adequações"],
  },
  {
    title: "Reformas e retrofits",
    description:
      "Modernização de estruturas existentes, com mínima interferência na operação do cliente.",
    icon: Wrench,
    highlights: ["Planejamento", "Execução por etapas", "Comissionamento"],
  },
  {
    title: "Gestão de obras",
    description:
      "Gestão integrada com cronograma, custos, qualidade e comunicação contínua.",
    icon: HardHat,
    highlights: ["Prazo", "Custo", "Qualidade"],
  },
  {
    title: "Segurança & conformidade",
    description:
      "Processos e rotinas de SST para canteiros e projetos, com registros e auditorias.",
    icon: ShieldCheck,
    highlights: ["SST", "Treinamentos", "Auditorias"],
  },
]

export const timeline: TimelineEvent[] = [
  {
    year: 1990,
    title: "Fundação da Vital Norte",
    description: "Início das operações com obras de pequeno porte e reformas.",
  },
  {
    year: 1996,
    title: "Primeiros contratos corporativos",
    description:
      "Ampliação do time e padronização de processos de qualidade e execução.",
  },
  {
    year: 2003,
    title: "Infraestrutura e expansão regional",
    description:
      "Entrada em projetos de infraestrutura e atuação em múltiplas cidades do Norte.",
  },
  {
    year: 2010,
    title: "Portfólio industrial",
    description:
      "Entrega de galpões e adequações industriais com foco em segurança operacional.",
  },
  {
    year: 2016,
    title: "Gestão integrada e tecnologia",
    description:
      "Adoção de rotinas digitais de acompanhamento de obra, custos e relatórios.",
  },
  {
    year: 2021,
    title: "Sustentabilidade e compliance",
    description:
      "Boas práticas ambientais e reforço de conformidade em canteiros e projetos.",
  },
  {
    year: 2026,
    title: "Presença consolidada",
    description:
      "Consolidação como parceira de confiança para obras civis, industriais e reformas.",
  },
]

export const clients: Client[] = [
  {
    id: "c1",
    name: "Grupo Amazônia Logística",
    segment: "Logística",
    city: "Manaus",
    state: "AM",
    year: 2019,
    summary:
      "Ampliação de centro logístico com adequações de docas e piso industrial.",
    delivered: ["Piso industrial", "Docas", "Sinalização e segurança"],
  },
  {
    id: "c2",
    name: "Energia do Norte S.A.",
    segment: "Energia",
    city: "Belém",
    state: "PA",
    year: 2022,
    summary:
      "Reforma e retrofit de área administrativa com execução por etapas em operação.",
    delivered: ["Retrofit", "Elétrica", "Climatização"],
  },
  {
    id: "c3",
    name: "Hospital Regional Vida",
    segment: "Saúde",
    city: "Porto Velho",
    state: "RO",
    year: 2017,
    summary:
      "Obras de adequação e melhorias em fluxos internos, minimizando paradas.",
    delivered: ["Salas técnicas", "Revestimentos", "Acessibilidade"],
  },
  {
    id: "c4",
    name: "Prefeitura de Rio Branco",
    segment: "Público",
    city: "Rio Branco",
    state: "AC",
    year: 2014,
    summary: "Execução de drenagem e pavimentação em vias estruturantes.",
    delivered: ["Drenagem", "Pavimentação", "Sinalização viária"],
  },
  {
    id: "c5",
    name: "Norte Mining & Metals",
    segment: "Mineração",
    city: "Macapá",
    state: "AP",
    year: 2023,
    summary:
      "Implantação de bases e estrutura leve para operação e armazenamento.",
    delivered: ["Bases", "Estruturas", "Canteiro e apoio"],
  },
  {
    id: "c6",
    name: "Instituto Educacional Horizonte",
    segment: "Educação",
    city: "Boa Vista",
    state: "RR",
    year: 2012,
    summary: "Ampliação de bloco acadêmico com entrega técnica e comissionamento.",
    delivered: ["Ampliação", "Acabamentos", "Comissionamento"],
  },
]

export const coverageCities: CoverageCity[] = [
  {
    id: "manaus",
    label: "Manaus",
    state: "AM",
    lat: -3.119,
    lng: -60.0217,
    clientId: "c1",
  },
  {
    id: "belem",
    label: "Belém",
    state: "PA",
    lat: -1.4558,
    lng: -48.5039,
    clientId: "c2",
  },
  {
    id: "porto-velho",
    label: "Porto Velho",
    state: "RO",
    lat: -8.7608,
    lng: -63.8999,
    clientId: "c3",
  },
  {
    id: "rio-branco",
    label: "Rio Branco",
    state: "AC",
    lat: -9.9754,
    lng: -67.8249,
    clientId: "c4",
  },
  {
    id: "macapa",
    label: "Macapá",
    state: "AP",
    lat: 0.0349,
    lng: -51.0694,
    clientId: "c5",
  },
  {
    id: "boa-vista",
    label: "Boa Vista",
    state: "RR",
    lat: 2.8235,
    lng: -60.6753,
    clientId: "c6",
  },
]

export const stats = [
  { label: "Anos de atuação", value: "8+" },
  { label: "Projetos entregues", value: "150+" },
  { label: "Cidades atendidas", value: "20+" },
  { label: "Foco em Pavimentação", value: "100%" },
] as const

export const location = {
  regionTitle: "Cidades atendidas (mapa interativo)",
  mapImage:
    "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_blank_map.png",
  hintIcon: MapPinned,
  hintText: "Clique nas cidades destacadas para ver o cliente e a entrega.",
  legend: [
    { label: "Atendimento / obra", icon: Landmark },
    { label: "Projetos e reformas", icon: Wrench },
  ],
}

export const weather = {
  title: "Previsão do tempo",
  locationLabel: "Jaíba/MG",
  geocodingQuery: "Jaiba",
  admin1: "Minas Gerais",
  countryCode: "BR",
  timezone: "America/Sao_Paulo",
} as const

