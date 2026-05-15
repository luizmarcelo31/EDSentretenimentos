import Image from "next/image"
import { Zap, MapPin, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden crt-scanlines">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-arcade.jpg"
          alt="Salão de fliperama retrô iluminado por neon roxo e azul com gabinetes arcade"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 vignette" />
      </div>

      {/* Synthwave grid */}
      <div className="absolute inset-0 synth-grid z-[1]" />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute block h-1 w-1 rounded-full bg-[var(--neon-blue)]"
            style={{
              left: `${(i * 53) % 100}%`,
              animation: `float-up ${14 + (i % 6) * 2}s linear infinite`,
              animationDelay: `${i * 0.8}s`,
              boxShadow: "0 0 8px var(--neon-blue)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        {/* Super headline */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--neon-purple)]/40 bg-[var(--neon-purple)]/10 px-4 py-1.5 backdrop-blur">
          <Zap className="h-3.5 w-3.5 text-[var(--pixel-yellow)]" />
          <span className="font-press text-[10px] tracking-widest text-[var(--pixel-yellow)] glow-yellow">
            EXCLUSIVO PARA EDS ENTRETENIMENTOS
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl leading-[0.95] tracking-tight text-balance sm:text-7xl md:text-8xl lg:text-[7.5rem]">
          <span className="block text-foreground">Transforme a nostalgia</span>
          <span className="block text-foreground/90">dos seus fliperamas em</span>
          <span className="block text-[var(--neon-red)]">
            faturamento previsível
          </span>
          <span className="block text-[var(--neon-blue)] glow-blue">no Google.</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          Sua Landing Page profissional no ar em{" "}
          <span className="font-semibold text-foreground">1 dia útil</span> + Estratégia completa de{" "}
          <span className="font-semibold text-[var(--neon-blue)]">SEO</span> e{" "}
          <span className="font-semibold text-[var(--neon-purple)]">Google Meu Negócio</span> estruturada em{" "}
          <span className="font-semibold text-foreground">7 dias</span>.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a href="#cta-final" className="btn-arcade animate-neon-pulse">
            Quero Dominar o Mercado de Arcades
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#diagnostico" className="btn-ghost-neon">
            Ver Diagnóstico Estratégico
          </a>
        </div>

        {/* Local badge */}
        <div className="mt-12 inline-flex items-center gap-2 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-[var(--neon-red)]" />
          <span className="font-orbitron tracking-wider">CARUARU · PERNAMBUCO · NORDESTE</span>
        </div>

        {/* Mock devices row */}
        <div className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          <MiniCard
            label="GOOGLE MAPS"
            value="#1 LOCAL"
            color="blue"
            sub="Ranking estimado pós-otimização"
          />
          <MiniCard
            label="BUSCAS / MÊS"
            value="+8.500"
            color="purple"
            sub="Volume regional Nordeste"
          />
          <MiniCard
            label="ENTREGA"
            value="1 DIA ÚTIL"
            color="red"
            sub="Landing Page no ar"
          />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}

function MiniCard({
  label,
  value,
  sub,
  color,
}: {
  label: string
  value: string
  sub: string
  color: "purple" | "blue" | "red"
}) {
  const glow =
    color === "purple" ? "box-glow-purple" : color === "blue" ? "box-glow-blue" : "box-glow-red"
  const text =
    color === "purple"
      ? "text-[var(--neon-purple)] glow-purple"
      : color === "blue"
        ? "text-[var(--neon-blue)] glow-blue"
        : "text-[var(--neon-red)]"
  return (
    <div className={`rounded-lg bg-card/70 p-5 backdrop-blur ${glow}`}>
      <div className="font-press text-[9px] tracking-widest text-muted-foreground">{label}</div>
      <div className={`mt-3 font-display text-3xl ${text} animate-ranking`}>{value}</div>
      <div className="mt-2 text-[11px] text-muted-foreground/80">{sub}</div>
    </div>
  )
}
