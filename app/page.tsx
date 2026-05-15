import { Hero } from "@/components/eds/hero"
import { Diagnostico } from "@/components/eds/diagnostico"
import { Mercado } from "@/components/eds/mercado"
import { Gargalos } from "@/components/eds/gargalos"
import { Solucao } from "@/components/eds/solucao"
import { Catalogo } from "@/components/eds/catalogo"
import { ProvaSocial } from "@/components/eds/prova-social"
import { Garantia } from "@/components/eds/garantia"
import { FAQ } from "@/components/eds/faq"
import { CTAFinal } from "@/components/eds/cta-final"
import { Footer } from "@/components/eds/footer"
import { FloatingCTA } from "@/components/eds/floating-cta"

export default function Page() {
  return (
    <main className="relative bg-background text-foreground">
      <Hero />
      <Diagnostico />
      <Mercado />
      <Gargalos />
      <Solucao />
      <Catalogo />
      <ProvaSocial />
      <Garantia />
      <FAQ />
      <CTAFinal />
      <Footer />
      <FloatingCTA />
    </main>
  )
}
