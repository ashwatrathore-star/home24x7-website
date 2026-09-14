import { Link } from '@tanstack/react-router'
import { Phone } from 'lucide-react'

export function CtaBand() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Need help now? We&apos;re available 24 hours a day.
          </h2>
          <p className="text-slate-400 mt-2">
            Get a free, no-obligation quote or call our emergency line for immediate assistance.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href="tel:07586339259"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 hover:bg-red-500 text-white font-semibold px-6 py-3.5 transition-colors"
          >
            <Phone className="size-5" />
            07586 339259
          </a>
          <Link
            to="/quote"
            className="inline-flex items-center justify-center rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-6 py-3.5 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
