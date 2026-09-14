import { Star } from 'lucide-react'
import { testimonials } from '@/data/testimonials'

export function TestimonialsSection() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-teal-700 font-semibold text-sm tracking-wide uppercase mb-2">
            Trusted by landlords &amp; homeowners
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What our clients say</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl bg-white border border-slate-200 p-6 shadow-sm flex flex-col">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <p className="font-semibold text-slate-900 text-sm">{t.name}</p>
                <p className="text-xs text-slate-500">{t.role} · via {t.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
