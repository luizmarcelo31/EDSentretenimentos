import { MessageCircle } from "lucide-react"
import Image from "next/image"

export function FloatingCTA() {
  return (
    <>
      {/* Desktop floating */}
      <a
        href="https://wa.me/5581921427765"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 transition-transform hover:scale-110 sm:flex"
        style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.15), 0 0 24px rgba(37,211,102,0.5)" }}
      >
        <Image src="/whatsapp.svg" alt="WhatsApp" width={28} height={28} className="h-7 w-7" />
      </a>

      {/* Mobile sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur sm:hidden">
        <a href="https://wa.me/5581921427765" className="btn-arcade w-full text-sm">
          Aceitar Proposta · WhatsApp
        </a>
      </div>
    </>
  )
}
