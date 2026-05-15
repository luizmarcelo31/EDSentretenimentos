import { MapPin, Phone, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-[#030305] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="font-press text-[10px] tracking-widest text-[var(--neon-purple)] glow-purple">
              EDS · ESTABELECIDA EM CARUARU
            </div>
            <div className="mt-3 font-display text-4xl">
              EDS <span className="text-[var(--neon-purple)] glow-purple">Entretenimentos</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Fabricação, venda e locação de fliperamas retrô e máquinas arcade.
            </p>
          </div>

          <div>
            <div className="font-orbitron text-xs uppercase tracking-widest text-muted-foreground">Endereço</div>
            <div className="mt-3 flex items-start gap-2 text-sm text-foreground/90">
              <MapPin className="h-4 w-4 mt-0.5 text-[var(--neon-blue)]" />
              <span>
                Rua Capitão Eduardo Ferreira Monte, 369, Térreo
                <br />
                Bairro Salgado — Caruaru/PE
              </span>
            </div>
            <div className="mt-3 text-xs text-muted-foreground">
              Razão Social: Eds Entretenimentos Games e Informática do Brasil
            </div>
          </div>

          <div>
            <div className="font-orbitron text-xs uppercase tracking-widest text-muted-foreground">Contato</div>
            <div className="mt-3 space-y-3 text-sm">
              <a href="https://wa.me/5581991362411" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--neon-blue)]">
                <Phone className="h-4 w-4 text-[var(--neon-blue)]" />
                WhatsApp Comercial
              </a>
              <a href="https://www.instagram.com/eds001games/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[var(--neon-purple)]">
                <Instagram className="h-4 w-4 text-[var(--neon-purple)]" />
                @eds001games
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} EDS Entretenimentos. Todos os direitos reservados.</div>
          <div className="font-press text-[9px] tracking-widest">PRESS START · PROPOSTA EXCLUSIVA</div>
        </div>
      </div>
    </footer>
  )
}
