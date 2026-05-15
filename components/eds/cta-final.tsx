import Image from "next/image"
import { ArrowRight, MessageCircle } from "lucide-react"

export function CTAFinal() {
  return (
    <section id="cta-final" className="relative overflow-hidden py-32 sm:py-44 crt-scanlines">
      <div className="absolute inset-0">
        <Image
          src="/hero-arcade.jpg"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        <div className="absolute inset-0 vignette" />
      </div>
      <div className="absolute inset-0 synth-grid opacity-40" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--neon-red)]/40 bg-[var(--neon-red)]/10 px-4 py-1.5 backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--neon-red)]" />
          <span className="font-press text-[10px] tracking-widest text-[var(--neon-red)]">
            PROPOSTA ATIVA · EDS
          </span>
        </div>

        <h2 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight text-balance sm:text-7xl md:text-8xl">
          Vamos profissionalizar o
          <br />
          <span className="text-[var(--neon-red)]">
            posicionamento digital
          </span>
          <br />
          da EDS Entretenimentos?
        </h2>

        <p className="mt-8 mx-auto max-w-xl text-muted-foreground">
          1 dia útil para a Landing Page no ar. 7 dias para domínio completo no Google. Início imediato após
          aceite.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/5581921427765"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-arcade animate-neon-pulse"
          >
            Aceitar Proposta e Iniciar Hoje
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4 text-center">
          <Pill label="Início" value="Hoje" />
          <Pill label="LP no ar" value="1 dia" />
          <Pill label="SEO completo" value="7 dias" />
        </div>
      </div>
    </section>
  )
}

function Pill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-card/60 p-4 backdrop-blur">
      <div className="font-press text-[9px] tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-2 font-display text-2xl text-[var(--neon-blue)] glow-blue">{value}</div>
    </div>
  )
}
