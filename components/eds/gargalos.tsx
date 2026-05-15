import { Cpu, Zap, Radar } from "lucide-react"
import { SectionLabel } from "./diagnostico"

const gargalos = [
  {
    n: "01",
    icon: Cpu,
    title: "Dependência do Algoritmo",
    desc: "Quando o Instagram muda as regras, o caixa da EDS sente. Sem canal próprio, sem previsibilidade.",
    color: "purple" as const,
  },
  {
    n: "02",
    icon: Zap,
    title: "Fricção Comercial",
    desc: "Cliente B2B precisa de catálogo, ficha técnica, prova social e CNPJ visíveis. Hoje ele desiste antes de chamar.",
    color: "red" as const,
  },
  {
    n: "03",
    icon: Radar,
    title: "Invisibilidade no SEO Local",
    desc: "A EDS não aparece no Maps, no pacote local, nem nas buscas 'fliperama caruaru'. Concorrência indireta vence.",
    color: "blue" as const,
  },
]

export function Gargalos() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>04 · OS 3 GRANDES GARGALOS</SectionLabel>
        <h2 className="mt-4 font-display text-4xl leading-[1] tracking-tight text-balance sm:text-6xl md:text-7xl">
          Três paredes invisíveis que <br />
          <span className="text-[var(--neon-red)]">travam</span>
          o crescimento da EDS.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {gargalos.map((g) => (
            <GargaloCard key={g.n} {...g} />
          ))}
        </div>
      </div>
    </section>
  )
}

function GargaloCard({
  n,
  icon: Icon,
  title,
  desc,
  color,
}: {
  n: string
  icon: any
  title: string
  desc: string
  color: "purple" | "blue" | "red"
}) {
  const accent =
    color === "purple"
      ? "text-[var(--neon-purple)] glow-purple"
      : color === "blue"
        ? "text-[var(--neon-blue)] glow-blue"
        : "text-[var(--neon-red)]"
  const box =
    color === "purple" ? "box-glow-purple" : color === "blue" ? "box-glow-blue" : "box-glow-red"

  return (
    <article className={`card-neon group p-8 ${box}`}>
      <div className="flex items-center justify-between">
        <span className={`font-press text-xs tracking-widest ${accent}`}>{n}</span>
        <Icon className={`h-7 w-7 ${accent} transition-transform group-hover:scale-110`} />
      </div>
      <h3 className="mt-8 font-display text-3xl leading-tight sm:text-4xl">{title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{desc}</p>

      <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-[var(--neon-purple)]/50 to-transparent" />

      <div className="mt-4 font-press text-[9px] tracking-widest text-muted-foreground">
        STATUS: <span className={accent}>BLOQUEIO ATIVO</span>
      </div>
    </article>
  )
}
