import { createFileRoute, Link } from '@tanstack/react-router'
import { FileCheck2, ShieldCheck } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { CtaBand } from '@/components/CtaBand'
import compliance from '@/data/compliance'

export const Route = createFileRoute('/compliance')({
  head: () => ({
    meta: [
      { title: 'Compliance & Certification Services | Home24x7 Build and Repair' },
      {
        name: 'description',
        content:
          'EICR, EPC, Gas Safety Certificates (CP12), PAT testing, fire risk assessments, legionella risk assessments and smoke/CO alarm compliance in London and the UK.',
      },
    ],
  }),
  component: Compliance,
})

function Compliance() {
  return (
    <div>
      <PageHero
        eyebrow="Compliance & Certification"
        title="Every certificate landlords and businesses are legally required to hold"
        description="From EICR and gas safety to fire risk assessments, our accredited assessors keep your property fully compliant — with clear paperwork and renewal reminders."
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {compliance.map((item) => (
              <div
                key={item.slug}
                id={item.slug}
                className="rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex size-11 items-center justify-center rounded-lg bg-teal-700 text-white mb-4">
                  <FileCheck2 className="size-5" />
                </div>
                <h2 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h2>
                <p className="text-sm font-semibold text-amber-600 mb-3">{item.short}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <ShieldCheck className="size-10 text-teal-700 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Not sure what certification your property needs?
          </h2>
          <p className="text-slate-600 mb-8">
            Tell us about your property and we&apos;ll confirm exactly which certificates you
            need and when they&apos;re due for renewal.
          </p>
          <Link
            to="/quote"
            className="inline-flex items-center rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-3.5 transition-colors"
          >
            Ask about compliance
          </Link>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
