import { ShieldCheck, Wrench, Truck, MapPin } from "lucide-react"
import { SectionLabel } from "./diagnostico"

export function Garantia() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>08 · GARANTIA & SUPORTE</SectionLabel>
        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h2 className="font-display text-4xl leading-[1] tracking-tight text-balance sm:text-6xl">
              Suporte técnico local <br />
              <span className="text-[var(--pixel-yellow)] glow-yellow">em Caruaru</span>.
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground">
              EDS Entretenimentos é uma operação local, com oficina, peças e técnico próprio. Sem terceirização.
              Sem dependência de fornecedor de outro estado.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Item icon={ShieldCheck} title="Garantia oficial" desc="Cobertura completa em todos os gabinetes vendidos." />
              <Item icon={Wrench} title="Assistência técnica" desc="Manutenção rápida com peças em estoque local." />
              <Item icon={Truck} title="Entrega segura" desc="Logística própria com embalagem profissional." />
              <Item icon={MapPin} title="Atendimento Caruaru/PE" desc="Visita técnica e suporte presencial." />
            </div>
          </div>

          {/* Selo */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="card-neon box-glow-purple aspect-square p-8 crt-scanlines">
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="font-press text-[10px] tracking-widest text-[var(--neon-purple)] glow-purple">
                  SELO OFICIAL EDS
                </div>
                <div className="mt-6 font-display text-5xl leading-none text-foreground">
                  SUPORTE
                  <br />
                  <span className="text-[var(--neon-purple)] glow-purple">TÉCNICO</span>
                  <br />
                  LOCAL
                </div>
                <div className="mt-6 font-orbitron text-xs uppercase tracking-wider text-muted-foreground">
                  Premium · Caruaru/PE
                </div>

                <div className="mt-6 flex items-center gap-2 text-[var(--pixel-yellow)] glow-yellow">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="font-press text-[10px] tracking-widest">CERTIFICADO</span>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 -z-10 rounded-full bg-[var(--neon-purple)]/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Item({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="card-neon p-5">
      <Icon className="h-5 w-5 text-[var(--neon-blue)] glow-blue" />
      <div className="mt-3 font-orbitron text-sm font-semibold uppercase tracking-wider">{title}</div>
      <div className="mt-1 text-xs text-muted-foreground">{desc}</div>
    </div>
  )
}
