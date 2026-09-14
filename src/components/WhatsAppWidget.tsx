import { MessageCircle } from 'lucide-react'

export function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/447586339259"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl px-4 py-3.5 font-semibold text-sm transition-shadow"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  )
}
