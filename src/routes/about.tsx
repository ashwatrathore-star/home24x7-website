import { createFileRoute, Link } from '@tanstack/react-router'
import { ClipboardCheck, HeartHandshake, Phone, ShieldCheck, Users, Wrench } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { TrustBadges } from '@/components/TrustBadges'
import { CtaBand } from '@/components/CtaBand'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About Us | Home24x7 Build and Repair' },
      {
        name: 'description',
        content:
          'Learn about Home24x7 Build and Repair — an accredited property maintenance and construction company serving London and the UK.',
      },
    ],
  }),
  component: About,
})

const process = [
  {
    step: '01',
    icon: Phone,
    title: 'You get in touch',
    body: 'Call our 24/7 line for emergencies, or request a free quote for planned work — whichever suits your situation.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80',
  },
  {
    step: '02',
    icon: ClipboardCheck,
    title: 'We assess and quote',
    body: 'An accredited engineer reviews the job on-site or via photos, and you receive a clear, fixed-price quote before anything starts.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80',
  },
  {
    step: '03',
    icon: Wrench,
    title: 'Work gets scheduled and done',
    body: 'A vetted, DBS-checked trade completes the job to the agreed timeline, with regular updates if it\u2019s a larger project.',
    image: 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=900&q=80',
  },
  {
    step: '04',
    icon: HeartHandshake,
    title: 'You get sign-off, in writing',
    body: 'Every job ends with a completion report or compliance certificate, filed for your records — nothing left informal or undocumented.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80',
  },
]

function About() {
  return (
    <div>
      <PageHero
        eyebrow="About Home24x7"
        title="Property maintenance and construction, done properly"
        description="Home24x7 Build and Repair helps homeowners, landlords and businesses keep their properties safe, compliant and well maintained — day or night."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="text-teal-700 font-semibold text-sm tracking-wide uppercase mb-2">
              Our story
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mb-5">
              Built on a simple idea: one call should be enough
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Home24x7 Build and Repair exists to solve a common frustration for landlords
              and homeowners alike — juggling separate plumbers, electricians, decorators and
              builders for every repair. We bring every trade together, backed by proper
              accreditation and round-the-clock availability.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We support residential, commercial, and landlord clients across all of
              London and the wider UK, from single emergency call-outs to full construction
              and refurbishment projects.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80"
            alt="Tradespeople reviewing plans on site"
            className="rounded-xl object-cover w-full h-80"
          />
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <ValueCard
              icon={ShieldCheck}
              title="Accredited"
              body="Gas Safe registered, NICEIC/ECA approved, and fully insured on every job."
            />
            <ValueCard
              icon={Users}
              title="DBS-checked"
              body="Every engineer entering a client's property is vetted and DBS-checked."
            />
            <ValueCard
              icon={HeartHandshake}
              title="No-nonsense"
              body="Clear pricing, honest timelines, and straight answers — no jargon."
            />
            <ValueCard
              icon={ClipboardCheck}
              title="Fully documented"
              body="Every job is photo-reported and signed off, so you always have a record."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-teal-700 font-semibold text-sm tracking-wide uppercase mb-2">
              Accreditations
            </p>
            <h2 className="text-3xl font-bold text-slate-900">Trusted and verified</h2>
          </div>
          <TrustBadges className="max-w-3xl mx-auto" />
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-teal-700 font-semibold text-sm tracking-wide uppercase mb-2">
              How we work
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
              From first call to finished job
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="rounded-xl bg-white border border-slate-200 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-40 w-full object-cover"
                />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex size-8 items-center justify-center rounded-md bg-slate-950 text-amber-500 shrink-0">
                      <p.icon className="size-4" />
                    </span>
                    <span className="text-xs font-mono text-slate-400">{p.step}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-16 bg-white text-center">
        <Link
          to="/services"
          className="inline-flex items-center rounded-md bg-slate-950 text-white font-semibold px-6 py-3 hover:bg-slate-800 transition-colors"
        >
          Explore our services
        </Link>
      </div>

      <CtaBand />
    </div>
  )
}

function ValueCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof ShieldCheck
  title: string
  body: string
}) {
  return (
    <div className="rounded-xl bg-white border border-slate-200 p-6">
      <div className="flex size-11 items-center justify-center rounded-lg bg-slate-950 text-amber-500 mb-4">
        <Icon className="size-5" />
      </div>
      <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
    </div>
  )
}
