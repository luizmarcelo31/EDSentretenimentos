import { Rocket, MapPin, Search, CheckCircle2 } from "lucide-react"
import { SectionLabel } from "./diagnostico"

const etapas = [
  {
    n: "ETAPA 01",
    day: "DIA 1",
    icon: Rocket,
    title: "Landing Page no ar em 1 dia útil",
    desc: "Estrutura premium, site responsivo para dispositivos móveis, otimizada para conversão. Catálogo, prova social e WhatsApp integrado.",
    items: ["Design cinematográfico exclusivo", "Site responsivo", "WhatsApp integrado"],
    color: "purple" as const,
    progress: 100,
  },
  {
    n: "ETAPA 02",
    day: "DIA 1–7",
    icon: MapPin,
    title: "Google Meu Negócio em 7 dias",
    desc: "Ficha verificada, otimizada com fotos profissionais, categorias estratégicas, posts semanais e gestão de avaliações.",
    items: ["Verificação + categorias", "Banco de fotos profissionais", "Posts e ofertas locais", "Gestão de reviews"],
    color: "blue" as const,
    progress: 80,
  },
  {
    n: "ETAPA 03",
    day: "DIA 1–7",
    icon: Search,
    title: "SEO Estruturado em 7 dias",
    desc: "On-page técnico, schema, palavras-chave locais e regionais, backlinks de autoridade e indexação acelerada.",
    items: ["SEO on-page + schema", "Palavras-chave Caruaru/PE", "Backlinks de autoridade", "Indexação acelerada"],
    color: "red" as const,
    progress: 65,
  },
]

export function Solucao() {
  return (
    <section className="relative border-y border-border bg-gradient-to-b from-background via-[#070710] to-background py-28 sm:py-36">
      <div className="absolute inset-0 synth-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionLabel>05 · A SOLUÇÃO</SectionLabel>
        <h2 className="mt-4 font-display text-4xl leading-[1] tracking-tight text-balance sm:text-6xl md:text-7xl">
          O <span className="text-[var(--neon-purple)] glow-purple">Plano de Domínio Digital</span>
          <br /> da EDS Entretenimentos.
        </h2>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Três frentes simultâneas, executadas em paralelo. Em 7 dias a marca sai da invisibilidade e entra na
          competição séria pelo cliente premium.
        </p>

        <ol className="mt-16 space-y-6">
          {etapas.map((e, i) => (
            <EtapaCard key={i} {...e} />
          ))}
        </ol>
      </div>
    </section>
  )
}

function EtapaCard({
  n,
  day,
  icon: Icon,
  title,
  desc,
  items,
  color,
  progress,
}: {
  n: string
  day: string
  icon: any
  title: string
  desc: string
  items: string[]
  color: "purple" | "blue" | "red"
  progress: number
}) {
  const accent =
    color === "purple"
      ? "text-[var(--neon-purple)] glow-purple"
      : color === "blue"
        ? "text-[var(--neon-blue)] glow-blue"
        : "text-[var(--neon-red)]"
  const barFrom =
    color === "purple" ? "var(--neon-purple)" : color === "blue" ? "var(--neon-blue)" : "var(--neon-red)"

  return (
    <li className="card-neon p-6 sm:p-10">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-lg border border-border ${accent}`}
          >
            <Icon className="h-7 w-7" />
          </div>
          <div>
            <div className={`font-press text-[10px] tracking-widest ${accent}`}>{n}</div>
            <div className="mt-1 font-orbitron text-xs text-muted-foreground">{day}</div>
          </div>
        </div>

        <div>
          <h3 className="font-display text-3xl leading-tight sm:text-4xl">{title}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{desc}</p>

          <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {items.map((it) => (
              <li key={it} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className={`h-4 w-4 shrink-0 ${accent}`} />
                <span className="text-foreground/85">{it}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full lg:w-48">
          <div className="font-press text-[9px] tracking-widest text-muted-foreground">PROGRESSO</div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/5">
            <div
              className="h-full"
              style={{
                width: `${progress}%`,
                background: `linear-gradient(90deg, ${barFrom}, #fff2)`,
                boxShadow: `0 0 12px ${barFrom}`,
              }}
            />
          </div>
          <div className={`mt-2 font-display text-2xl ${accent}`}>{progress}%</div>
        </div>
      </div>
    </li>
  )
}
