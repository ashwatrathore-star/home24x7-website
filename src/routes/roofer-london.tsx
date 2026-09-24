import { createFileRoute, Link } from '@tanstack/react-router'
import { CheckCircle2, Clock, Phone, ShieldCheck } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { TrustBadges } from '@/components/TrustBadges'
import { CtaBand } from '@/components/CtaBand'

export const Route = createFileRoute('/roofer-london')({
  head: () => ({
    meta: [
      { title: 'Roofer in London | Flat & Pitched Roof Repairs | Home24x7' },
      {
        name: 'description',
        content:
          'Need a roofer in London? Home24x7 offers repairs, replacement and guttering for flat and pitched roofs across every London borough, with emergency leak call-outs available 24/7.',
      },
    ],
  }),
  component: RooferLondon,
})

const services = [
  'Emergency leak repair and storm damage',
  'Flat roof replacement (GRP and felt systems)',
  'Pitched roof repair and re-roofing',
  'Guttering, fascias and soffit repair',
  'Roof inspections and reports',
  'Chimney and flashing repairs',
]

function RooferLondon() {
  return (
    <div>
      <PageHero
        eyebrow="London"
        title="Roofer in London — repairs, replacement and guttering"
        description="Home24x7 Build and Repair provides flat and pitched roofing services across every London borough, for homeowners, landlords and letting agents."
        image="https://images.unsplash.com/photo-1635424824849-1b09bdcc55b1?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Reliable roofing services across London
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Whether it's an emergency leak or a planned flat roof replacement, our roofing
              teams cover all of Greater London with fast, transparent, fixed-price quotes.
              Every job is carried out by a vetted, DBS-checked tradesperson and backed by
              full public liability insurance.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              We work safely at height in all weather, and can also coordinate any related
              guttering, fascia or interior water-damage repairs in the same visit.
            </p>

            <h3 className="font-bold text-slate-900 mb-3">Roofing services we cover across London</h3>
            <ul className="grid gap-2 sm:grid-cols-2 mb-8">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="size-4 text-teal-700 mt-0.5 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>

            <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900 mb-2">Also need a builder or electrician in London?</h3>
              <p className="text-sm text-slate-600 mb-3">
                We cover every trade — see our full{' '}
                <Link to="/services" className="text-teal-700 font-semibold hover:underline">
                  range of services
                </Link>{' '}
                or check{' '}
                <Link to="/areas-we-cover" className="text-teal-700 font-semibold hover:underline">
                  all the areas we cover
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <Phone className="size-5 text-amber-500" />
                <p className="font-bold text-slate-900">24/7 emergency line</p>
              </div>
              <a href="tel:07586339259" className="text-lg font-bold text-teal-700 hover:underline">
                07586 339259
              </a>
            </div>
            <div className="rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="size-5 text-amber-500" />
                <p className="font-bold text-slate-900">Fully insured</p>
              </div>
              <p className="text-sm text-slate-600">Every roofer vetted, accredited and DBS-checked.</p>
            </div>
            <div className="rounded-xl border border-slate-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="size-5 text-amber-500" />
                <p className="font-bold text-slate-900">Fast response</p>
              </div>
              <p className="text-sm text-slate-600">Same-day availability for urgent call-outs across London.</p>
            </div>
            <Link
              to="/quote"
              className="block text-center rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 transition-colors"
            >
              Get a free quote
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-bold text-slate-900">Trusted and verified</h2>
          </div>
          <TrustBadges className="max-w-3xl mx-auto" />
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
