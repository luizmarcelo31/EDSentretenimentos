import { Instagram, EyeOff, Users, AlertTriangle, Search } from "lucide-react"

const dores = [
  {
    icon: Instagram,
    title: "Dependência do Instagram",
    desc: "Faturamento refém de algoritmo. Quando o alcance cai, o telefone para.",
    metric: "−68%",
    metricLabel: "alcance orgânico médio em 2 anos",
    color: "purple" as const,
  },
  {
    icon: EyeOff,
    title: "Invisibilidade no Google",
    desc: "Quem busca 'fliperama em Caruaru' não encontra a EDS — encontra concorrentes.",
    metric: "0",
    metricLabel: "posicionamento orgânico atual",
    color: "red" as const,
  },
  {
    icon: Users,
    title: "Perda de Clientes B2B",
    desc: "Barbearias, hotéis e buffets não conhecem a marca porque ela não aparece no Maps.",
    metric: "8.500+",
    metricLabel: "buscas mensais deixadas na mesa",
    color: "blue" as const,
  },
  {
    icon: AlertTriangle,
    title: "Fricção Comercial",
    desc: "Sem LP, sem catálogo digital e sem prova social estruturada para o cliente decidir.",
    metric: "Alta",
    metricLabel: "fricção no fechamento high-ticket",
    color: "purple" as const,
  },
  {
    icon: Search,
    title: "Ausência de SEO Local",
    desc: "Google Meu Negócio não otimizado, sem fotos, sem categorias e sem reviews qualificadas.",
    metric: "—",
    metricLabel: "ficha não indexada como autoridade",
    color: "red" as const,
  },
]

export function Diagnostico() {
  return (
    <section id="diagnostico" className="relative py-28 sm:py-36">
      <div className="absolute inset-0 synth-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionLabel>02 · DIAGNÓSTICO</SectionLabel>
        <h2 className="mt-4 font-display text-4xl leading-[1] tracking-tight text-balance sm:text-6xl md:text-7xl">
          O que está <span className="text-[var(--neon-red)]">afastando</span> os clientes
          <br />
          de alto valor da EDS hoje?
        </h2>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Análise fria da operação digital atual. Cada ponto abaixo representa receita evaporando todos os meses.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {dores.map((d, i) => (
            <DorCard key={i} {...d} />
          ))}
        </div>
      </div>
    </section>
  )
}

function DorCard({
  icon: Icon,
  title,
  desc,
  metric,
  metricLabel,
  color,
}: {
  icon: any
  title: string
  desc: string
  metric: string
  metricLabel: string
  color: "purple" | "blue" | "red"
}) {
  const accent =
    color === "purple"
      ? "text-[var(--neon-purple)] glow-purple"
      : color === "blue"
        ? "text-[var(--neon-blue)] glow-blue"
        : "text-[var(--neon-red)]"
  return (
    <article className="card-neon p-6 h-full flex flex-col">
      <div className="flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-md border border-border ${accent}`}>
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="font-orbitron text-sm font-semibold uppercase tracking-wider">{title}</h3>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      <div className="mt-6 border-t border-border pt-4">
        <div className={`font-display text-4xl ${accent}`}>{metric}</div>
        <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{metricLabel}</div>
      </div>
    </article>
  )
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3">
      <span className="h-px w-10 bg-[var(--neon-purple)]" />
      <span className="font-press text-[10px] tracking-widest text-[var(--neon-purple)] glow-purple">
        {children}
      </span>
    </div>
  )
}
