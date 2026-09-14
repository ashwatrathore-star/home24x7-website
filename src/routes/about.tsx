import { createFileRoute, Link } from '@tanstack/react-router'
import { Award, HeartHandshake, ShieldCheck, Target, Users } from 'lucide-react'
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
          'Learn about Home24x7 Build and Repair — an accredited property maintenance and construction company serving London and the UK for over 15 years.',
      },
    ],
  }),
  component: About,
})

const team = [
  {
    name: 'Michael Adeyemi',
    role: 'Managing Director',
    bio: 'Over 20 years in construction and facilities management, leading operations and client relationships.',
  },
  {
    name: 'Claire Doherty',
    role: 'Head of Compliance',
    bio: 'Oversees certification and regulatory compliance across every job, from EICR to fire safety.',
  },
  {
    name: 'Tomasz Wirski',
    role: 'Operations Manager',
    bio: 'Coordinates our multi-trade engineer network and 24/7 emergency response rota.',
  },
]

function About() {
  return (
    <div>
      <PageHero
        eyebrow="About Home24x7"
        title="Property maintenance and construction, done properly"
        description="For over 15 years, Home24x7 Build and Repair has helped homeowners, landlords and businesses keep their properties safe, compliant and well maintained — day or night."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="text-teal-700 font-semibold text-sm tracking-wide uppercase mb-2">
              Our story
            </p>
            <h2 className="text-3xl font-bold text-slate-900 mb-5">
              Founded on a simple idea: one call should be enough
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Home24x7 Build and Repair was founded to solve a common frustration for landlords
              and homeowners alike — juggling separate plumbers, electricians, decorators and
              builders for every repair. We built a single company that brings every trade
              together, backed by proper accreditation and round-the-clock availability.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Today we support residential, commercial, and landlord clients across all of
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
              icon={Target}
              title="Our mission"
              body="To be the most trusted, responsive property maintenance partner in the UK."
            />
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
          <div className="flex items-center gap-3 mb-12">
            <Award className="size-8 text-amber-500" />
            <h2 className="text-3xl font-bold text-slate-900">Leadership team</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {team.map((m) => (
              <div key={m.name} className="rounded-xl bg-white border border-slate-200 p-6">
                <p className="font-bold text-slate-900">{m.name}</p>
                <p className="text-sm text-amber-600 font-semibold mb-3">{m.role}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{m.bio}</p>
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
  icon: typeof Target
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
