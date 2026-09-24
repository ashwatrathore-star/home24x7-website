import { createFileRoute, Link } from '@tanstack/react-router'
import { CheckCircle2, Clock, Phone, ShieldCheck } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { TrustBadges } from '@/components/TrustBadges'
import { CtaBand } from '@/components/CtaBand'

export const Route = createFileRoute('/plumber-london')({
  head: () => ({
    meta: [
      { title: 'Plumber in London | 24/7 Emergency Plumbing | Home24x7' },
      {
        name: 'description',
        content:
          'Need a plumber in London? Home24x7 offers Gas Safe registered plumbers for emergency leaks, boiler repairs and bathroom plumbing across every London borough — available 24/7.',
      },
    ],
  }),
  component: PlumberLondon,
})

const services = [
  'Emergency leak detection and repair',
  'Boiler breakdowns, servicing and installation',
  'Blocked drains and pipe repairs',
  'Bathroom and kitchen plumbing',
  'Central heating system faults',
  'Water pressure and tank issues',
]

function PlumberLondon() {
  return (
    <div>
      <PageHero
        eyebrow="London"
        title="Plumber in London — fast, accredited, available 24/7"
        description="Home24x7 Build and Repair provides Gas Safe registered plumbing services across every London borough, for homeowners, landlords and letting agents."
        image="https://images.unsplash.com/photo-1722411487131-23bb3ac91df3?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Reliable plumbing services across London
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Whether it's a burst pipe at 2am or a planned bathroom refit, our Gas Safe
              registered plumbers cover all of Greater London with fast, transparent,
              fixed-price call-outs. Every job is carried out by a vetted, DBS-checked
              engineer and backed by full public liability insurance.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              We also handle the compliance side landlords and letting agents across London
              need — including Gas Safety Certificates (CP12) — so a repair visit can
              double up as a compliance check where needed.
            </p>

            <h3 className="font-bold text-slate-900 mb-3">Plumbing services we cover across London</h3>
            <ul className="grid gap-2 sm:grid-cols-2 mb-8">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="size-4 text-teal-700 mt-0.5 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>

            <div className="rounded-xl bg-slate-50 border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900 mb-2">Also need an electrician or builder in London?</h3>
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
                <p className="font-bold text-slate-900">Gas Safe & fully insured</p>
              </div>
              <p className="text-sm text-slate-600">Every plumber vetted, accredited and DBS-checked.</p>
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
