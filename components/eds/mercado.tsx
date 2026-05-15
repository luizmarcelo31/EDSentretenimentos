import { TrendingUp, MapPinned, Target, BarChart3 } from "lucide-react"
import { SectionLabel } from "./diagnostico"

export function Mercado() {
  return (
    <section className="relative border-y border-border bg-gradient-to-b from-background via-[#070710] to-background py-28 sm:py-36">
      <div className="absolute inset-0 synth-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionLabel>03 · DADOS DE MERCADO</SectionLabel>
        <h2 className="mt-4 font-display text-4xl leading-[1] tracking-tight text-balance sm:text-6xl md:text-7xl">
          O mercado retrô está <span className="text-[var(--pixel-yellow)] glow-yellow">explodindo</span>.
          <br />
          A EDS precisa estar no topo.
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Stat icon={BarChart3} value="+8.500" label="Buscas mensais regionais" color="purple" />
          <Stat icon={TrendingUp} value="+34%" label="Crescimento do nicho retrô YoY" color="blue" />
          <Stat icon={MapPinned} value="9 cidades" label="Polo regional de demanda" color="red" />
          <Stat icon={Target} value="#1" label="Posição alcançável em Caruaru" color="yellow" />
        </div>

        {/* Heatmap mock */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="card-neon p-6 lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-press text-[10px] tracking-widest text-[var(--neon-blue)] glow-blue">
                  HEATMAP DE DEMANDA — PERNAMBUCO
                </div>
                <h3 className="mt-2 font-display text-2xl">Onde o cliente está procurando agora</h3>
              </div>
              <span className="rounded-full border border-[var(--neon-blue)]/40 bg-[var(--neon-blue)]/10 px-3 py-1 text-[10px] font-orbitron tracking-wider text-[var(--neon-blue)]">
                LIVE DATA
              </span>
            </div>

            {/* Heatmap grid */}
            <div className="mt-6 grid grid-cols-12 gap-1">
              {Array.from({ length: 96 }).map((_, i) => {
                const heat = Math.abs(Math.sin(i * 1.7)) * (i % 7 === 0 ? 1 : 0.7)
                const opacity = 0.1 + heat * 0.9
                const isHot = heat > 0.7
                return (
                  <div
                    key={i}
                    className="aspect-square rounded-sm"
                    style={{
                      background: isHot
                        ? `rgba(255, 49, 49, ${opacity})`
                        : `rgba(138, 46, 255, ${opacity})`,
                      boxShadow: isHot ? `0 0 8px rgba(255,49,49,${opacity})` : undefined,
                    }}
                  />
                )
              })}
            </div>

            <div className="mt-4 flex items-center gap-4 text-[11px] text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm bg-[var(--neon-purple)]" /> demanda média
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-sm bg-[var(--neon-red)]" /> demanda crítica
              </span>
            </div>
          </div>

          <div className="card-neon p-6">
            <div className="font-press text-[10px] tracking-widest text-[var(--neon-purple)] glow-purple">
              RECORRÊNCIA DE BUSCA REGIONAL
            </div>
            <ul className="mt-4 space-y-3">
              {[
                { k: "aluguel de fliperama para festas", v: "91%" },
                { k: "fliperama em caruaru", v: "86%" },
                { k: "comprar arcade caruaru", v: "72%" },
                { k: "máquina de fliperama pernambuco", v: "64%" },
                { k: "bancada arcade nostalgia", v: "58%" },
              ].map((t) => (
                <li key={t.k}>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-foreground/90">{t.k}</span>
                    <span className="font-orbitron text-[var(--neon-blue)]">{t.v}</span>
                  </div>
                  <div className="mt-1.5 h-1 w-full overflow-hidden rounded bg-white/5">
                    <div
                      className="h-full bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-blue)]"
                      style={{
                        width: `${t.v}%`,
                        boxShadow: "0 0 8px rgba(0,217,255,0.6)",
                      }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({
  icon: Icon,
  value,
  label,
  color,
}: {
  icon: any
  value: string
  label: string
  color: "purple" | "blue" | "red" | "yellow"
}) {
  const map = {
    purple: "text-[var(--neon-purple)] glow-purple",
    blue: "text-[var(--neon-blue)] glow-blue",
    red: "text-[var(--neon-red)]",
    yellow: "text-[var(--pixel-yellow)] glow-yellow",
  }
  return (
    <div className="card-neon p-5">
      <Icon className={`h-5 w-5 ${map[color]}`} />
      <div className={`mt-4 font-display text-4xl ${map[color]}`}>{value}</div>
      <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  )
}
