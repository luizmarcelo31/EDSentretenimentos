import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SectionLabel } from "./diagnostico"

const faqs = [
  {
    q: "Qual o prazo de entrega de uma máquina?",
    a: "Gabinetes de pronta entrega saem em até 7 dias úteis. Customizações sob demanda levam de 15 a 30 dias dependendo da arte e dos componentes.",
  },
  {
    q: "Como funciona a garantia?",
    a: "Todos os produtos EDS têm garantia oficial cobrindo defeitos de fabricação, componentes eletrônicos e acabamento. Suporte técnico realizado diretamente em Caruaru/PE.",
  },
  {
    q: "Vocês fazem instalação no local?",
    a: "Sim. Para clientes em Caruaru e região metropolitana de Recife, fazemos entrega, montagem e teste no local. Outras regiões consultar logística.",
  },
  {
    q: "Como é o suporte pós-venda?",
    a: "Suporte direto via WhatsApp com técnico próprio. Peças em estoque local, sem precisar enviar a máquina pra fora do estado.",
  },
  {
    q: "Vocês alugam fliperamas para eventos?",
    a: "Sim. Locação diária para aniversários, casamentos, eventos corporativos, feiras e ativações de marca. Pacotes com entrega, montagem e operador.",
  },
  {
    q: "Posso personalizar a arte do gabinete?",
    a: "Totalmente. Personalizamos arte lateral, marquise e até estampas de tema (Street Fighter, Mortal Kombat, marca do cliente, etc).",
  },
]

export function FAQ() {
  return (
    <section className="relative border-y border-border bg-gradient-to-b from-background via-[#070710] to-background py-28 sm:py-36">
      <div className="relative mx-auto max-w-4xl px-6">
        <SectionLabel>09 · FAQ</SectionLabel>
        <h2 className="mt-4 font-display text-4xl leading-[1] tracking-tight text-balance sm:text-6xl md:text-7xl">
          Dúvidas <span className="text-[var(--neon-purple)] glow-purple">frequentes</span>.
        </h2>

        <Accordion type="single" collapsible className="mt-12 space-y-4">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="card-neon border-0 px-6 py-1 data-[state=open]:box-glow-purple"
            >
              <AccordionTrigger className="py-6 text-left font-orbitron text-sm font-semibold uppercase tracking-wider hover:no-underline transition-all">
                <span className="flex items-center gap-4">
                  <span className="font-press text-[10px] text-[var(--neon-purple)] opacity-80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">{f.q}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground/90">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
