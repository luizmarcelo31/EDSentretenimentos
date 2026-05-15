import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { SectionLabel } from "./diagnostico"

const produtos = [
  {
    img: "/arcade-cabinet.jpg",
    alt: "gabinete fliperama customizado caruaru",
    tag: "GABINETES",
    title: "Fliperamas Completos",
    desc: "Modelos verticais clássicos com artes personalizadas inspiradas em Street Fighter e Mortal Kombat.",
    chips: ["Vertical", "Double Player", "Arte custom"],
    color: "purple" as const,
  },
  {
    img: "/arcade-bartop.jpg",
    alt: "bancada arcade portatil double player",
    tag: "PAINEL PORTÁTIL",
    title: "Painel Portátil",
    desc: "Sistema arcade plug-and-play para ligar direto na TV via HDMI. Visual gamer clean e premium.",
    chips: ["Plug HDMI", "Acabamento premium", "+15 mil jogos"],
    color: "blue" as const,
    imgClass: "scale-[2.2] object-bottom hover:scale-[2.3]", // Zoom extra e alinhamento pela base para o controle preencher o card
  },
  {
    img: "/arcade-event.jpg",
    alt: "aluguel de fliperama para festas",
    tag: "LOCAÇÃO DE EQUIPAMENTOS",
    title: "Locação para Eventos",
    desc: "Aluguel diário para aniversários, casamentos, feiras corporativas e ativações de marca.",
    chips: ["B2B", "Corporativo", "Suporte no local"],
    color: "red" as const,
  },
]

export function Catalogo() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <SectionLabel>06 · CATÁLOGO VISUAL</SectionLabel>
            <h2 className="mt-4 font-display text-4xl leading-[1] tracking-tight text-balance sm:text-6xl md:text-7xl">
              Linhas de produto que <br />
              vão pra Landing Page.
            </h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Catálogo organizado por intenção de compra: B2C nostálgico, B2B comercial e ativações premium. Cada
            linha com sua própria copy e CTA.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {produtos.map((p, i) => (
            <ProdutoCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProdutoCard({
  img,
  alt,
  tag,
  title,
  desc,
  chips,
  color,
  imgClass,
}: {
  img: string
  alt: string
  tag: string
  title: string
  desc: string
  chips: string[]
  color: "purple" | "blue" | "red"
  imgClass?: string
}) {
  const accent =
    color === "purple"
      ? "text-[var(--neon-purple)] glow-purple"
      : color === "blue"
        ? "text-[var(--neon-blue)] glow-blue"
        : "text-[var(--neon-red)]"

  return (
    <article className="card-neon group overflow-hidden">
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={img}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className={`object-cover transition-transform duration-700 ${imgClass || "group-hover:scale-105"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className={`font-press text-[9px] tracking-widest ${accent}`}>{tag}</span>
        </div>
        <ArrowUpRight
          className={`absolute top-4 right-4 h-5 w-5 ${accent} opacity-0 transition-opacity group-hover:opacity-100`}
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-3xl leading-tight">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border bg-white/5 px-2.5 py-1 text-[10px] font-orbitron uppercase tracking-wider text-foreground/80"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
