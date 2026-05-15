import { Star, Quote, Play } from "lucide-react"
import { SectionLabel } from "./diagnostico"

const depoimentos = [
  {
    name: "Lucas — Barbearia Royal",
    role: "Caruaru/PE · B2B",
    text: "Coloquei o fliperama da EDS na barbearia e o tempo de permanência dos clientes dobrou. Vira ponto de encontro.",
    rating: 5,
  },
  {
    name: "Mariana — Eventos Norte",
    role: "Recife/PE · Locação",
    text: "Aluguei 4 máquinas pra um evento corporativo. Entrega rápida, suporte no local, máquinas impecáveis.",
    rating: 5,
  },
  {
    name: "Edson cliente B2C",
    role: "Olinda/PE · Colecionador",
    text: "Tô vivendo minha infância dos anos 90 dentro de casa. Gabinete personalizado, acabamento absurdo.",
    rating: 5,
  },
]

export function ProvaSocial() {
  return (
    <section className="relative border-y border-border bg-gradient-to-b from-background via-[#070710] to-background py-28 sm:py-36">
      <div className="absolute inset-0 synth-grid opacity-25" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionLabel>07 · PROVA SOCIAL</SectionLabel>
        <h2 className="mt-4 font-display text-4xl leading-[1] tracking-tight text-balance sm:text-6xl md:text-7xl">
          Centenas de gabinetes entregues. <br />
          <span className="text-[var(--neon-blue)] glow-blue">Centenas de histórias.</span>
        </h2>

        {/* VHS reels */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="card-neon group relative overflow-hidden">
              <div className="relative aspect-[9/12] bg-[#0a0a0f] crt-scanlines">
                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    background:
                      i === 0
                        ? "radial-gradient(circle at 30% 40%, rgba(138,46,255,0.55), transparent 60%)"
                        : i === 1
                          ? "radial-gradient(circle at 60% 50%, rgba(0,217,255,0.5), transparent 60%)"
                          : "radial-gradient(circle at 50% 60%, rgba(255,49,49,0.55), transparent 60%)",
                  }}
                />
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--neon-red)]" />
                  <span className="font-press text-[9px] tracking-widest text-[var(--neon-red)]">REC</span>
                </div>
                <div className="absolute top-3 right-3 font-press text-[9px] tracking-widest text-foreground/70">
                  00:0{i + 1}:24
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className="flex h-16 w-16 items-center justify-center rounded-full border border-foreground/30 bg-background/40 backdrop-blur transition-transform group-hover:scale-110"
                    aria-label="Reproduzir vídeo de entrega"
                  >
                    <Play className="h-6 w-6 fill-foreground text-foreground" />
                  </button>
                </div>
                <div className="absolute bottom-3 left-3 right-3 font-orbitron text-xs uppercase tracking-wider text-foreground/80">
                  Entrega #{String(i + 1).padStart(3, "0")} · Caruaru
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Depoimentos */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {depoimentos.map((d, i) => (
            <article key={i} className="card-neon p-6">
              <Quote className="h-6 w-6 text-[var(--neon-purple)] glow-purple" />
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">{d.text}</p>
              <div className="mt-5 flex items-center gap-1">
                {Array.from({ length: d.rating }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-[var(--pixel-yellow)] text-[var(--pixel-yellow)]" />
                ))}
              </div>
              <div className="mt-3">
                <div className="font-orbitron text-sm font-semibold">{d.name}</div>
                <div className="text-xs text-muted-foreground">{d.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
