import { createFileRoute, Link } from '@tanstack/react-router'
import { CheckCircle2, Clock, Phone, ShieldCheck } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { TrustBadges } from '@/components/TrustBadges'
import { CtaBand } from '@/components/CtaBand'

export const Route = createFileRoute('/electrician-london')({
  head: () => ({
    meta: [
      { title: 'Electrician in London | 24/7 Emergency Electrical Repairs | Home24x7' },
      {
        name: 'description',
        content:
          'Need an electrician in London? Home24x7 offers NICEIC-approved electricians for rewiring, fault-finding and emergency call-outs across every London borough — available 24/7.',
      },
    ],
  }),
  component: ElectricianLondon,
})

const services = [
  'Emergency electrical fault-finding',
  'Consumer unit / fuse board upgrades',
  'Full and partial rewires',
  'Lighting, sockets and power installations',
  'EICR testing and certification',
  'PAT testing for landlords',
]

function ElectricianLondon() {
  return (
    <div>
      <PageHero
        eyebrow="London"
        title="Electrician in London — NICEIC-approved, available 24/7"
        description="Home24x7 Build and Repair provides NICEIC-approved electrical services across every London borough, for homeowners, landlords and letting agents."
        image="https://images.unsplash.com/photo-1705579610383-4f9b36e2a920?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Certified electrical services across London
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              From a tripping fuse board to a full property rewire, our NICEIC-approved
              electricians cover all of Greater London with fast, transparent, fixed-price
              call-outs. Every job is carried out by a vetted, DBS-checked engineer and
              backed by full public liability insurance.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              We also handle the compliance side landlords and letting agents across
              London need — including EICR certificates — so a repair visit can double up
              as a compliance check where needed.
            </p>

            <h3 className="font-bold text-slate-900 mb-3">Electrical services we cover across London</h3>
            <ul className="grid gap-2 sm:grid-cols-2 mb-8">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="size-4 text-teal-700 mt-0.5 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>

            <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900 mb-2">Also need a plumber or builder in London?</h3>
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
                <p className="font-bold text-slate-900">NICEIC & fully insured</p>
              </div>
              <p className="text-sm text-slate-600">Every electrician vetted, accredited and DBS-checked.</p>
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
