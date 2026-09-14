import { Link, createFileRoute } from '@tanstack/react-router'
import {
  Award,
  Building2,
  Clock,
  HardHat,
  Hammer,
  Home as HomeIcon,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
  Zap,
} from 'lucide-react'
import { TrustBadges } from '@/components/TrustBadges'
import { CtaBand } from '@/components/CtaBand'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import services from '@/data/services'
import { londonBoroughs } from '@/data/boroughs'

export const Route = createFileRoute('/')({
  component: Home,
})

const categories = [
  { icon: Wrench, title: 'Plumbing & Heating', slug: 'plumbing-heating' },
  { icon: Zap, title: 'Electrical Works', slug: 'electrical' },
  { icon: Hammer, title: 'Carpentry & Joinery', slug: 'carpentry-joinery' },
  { icon: HomeIcon, title: 'Roofing', slug: 'roofing' },
  { icon: Building2, title: 'Loft Conversions & Extensions', slug: 'loft-extensions' },
  { icon: HardHat, title: 'Full Renovation Projects', slug: 'construction-renovation' },
]

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-slate-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=80"
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/50" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-24 sm:py-32">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-sm font-semibold px-4 py-1.5 mb-6">
            <Clock className="size-4" />
            24/7 Emergency Response — London &amp; Nationwide UK
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white max-w-3xl leading-[1.05]">
            Your Property, Our Responsibility — 24/7
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl mt-6 max-w-2xl">
            Home24x7 Build and Repair is the one-stop property maintenance and construction
            partner for homeowners, landlords and commercial property managers across London
            and the UK.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              to="/quote"
              className="inline-flex items-center justify-center rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-7 py-4 transition-colors text-base"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:07586339259"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 hover:bg-red-500 text-white font-bold px-7 py-4 transition-colors text-base"
            >
              <Phone className="size-5" />
              Emergency Call-Out: 07586 339259
            </a>
          </div>

          <TrustBadges className="mt-14 max-w-3xl" />
        </div>
      </section>

      {/* Service categories */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="text-teal-700 font-semibold text-sm tracking-wide uppercase mb-2">
                What we do
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Every trade your property needs, under one roof
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center rounded-md border border-slate-300 hover:border-slate-900 text-slate-900 font-semibold px-5 py-2.5 transition-colors shrink-0"
            >
              View all services
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map(({ icon: Icon, title, slug }) => (
              <Link
                key={slug}
                to="/services/$slug"
                params={{ slug }}
                className="group rounded-xl border border-slate-200 p-6 hover:border-slate-900 hover:shadow-lg transition-all"
              >
                <div className="flex size-12 items-center justify-center rounded-lg bg-slate-950 text-amber-500 mb-5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <Icon className="size-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-1">{title}</h3>
                <p className="text-sm text-slate-500">
                  {services.find((s) => s.slug === slug)?.short}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us / stats */}
      <section className="bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <p className="text-amber-500 font-semibold text-sm tracking-wide uppercase mb-3">
              Why choose Home24x7
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Built on accreditation, insurance and a straight-talking approach
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              We combine the reliability of a large facilities management contractor with the
              personal accountability of a local tradesperson. Every engineer is vetted,
              accredited and DBS-checked, and every job is backed by full insurance cover.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <Stat value="15+" label="Years trading" />
              <Stat value="4,000+" label="Jobs completed" />
              <Stat value="24/7" label="Emergency response" />
              <Stat value="32" label="London boroughs covered" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
              alt="Tradesperson carrying out a repair"
              className="rounded-xl object-cover h-64 w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1621905252472-e52c2c8a3d3f?auto=format&fit=crop&w=800&q=80"
              alt="Electrician testing a consumer unit"
              className="rounded-xl object-cover h-64 w-full mt-8"
            />
            <img
              src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=800&q=80"
              alt="Newly finished modern kitchen"
              className="rounded-xl object-cover h-64 w-full -mt-8"
            />
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
              alt="Construction site works in progress"
              className="rounded-xl object-cover h-64 w-full"
            />
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 lg:grid-cols-2 items-start">
          <div>
            <p className="text-teal-700 font-semibold text-sm tracking-wide uppercase mb-2">
              Coverage
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5">
              Covering every London borough, plus nationwide UK coverage
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Our core teams operate across all 32 London boroughs, with a nationwide network of
              vetted, accredited contractors covering the rest of the UK for larger construction
              and compliance projects.
            </p>
            <Link
              to="/areas-we-cover"
              className="inline-flex items-center gap-2 rounded-md bg-slate-950 text-white font-semibold px-5 py-3 hover:bg-slate-800 transition-colors"
            >
              <MapPin className="size-4" />
              See full coverage area
            </Link>
          </div>
          <div className="rounded-xl border border-slate-200 p-6 bg-slate-50">
            <p className="font-semibold text-slate-900 mb-4">London boroughs we cover</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 text-sm text-slate-600 max-h-56 overflow-hidden">
              {londonBoroughs.slice(0, 15).map((b) => (
                <span key={b}>{b}</span>
              ))}
            </div>
            <p className="text-sm text-slate-500 mt-4">
              +17 more boroughs, plus nationwide coverage across the UK.
            </p>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* Compliance teaser */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="flex size-12 items-center justify-center rounded-lg bg-teal-700 text-white mb-5">
              <ShieldCheck className="size-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Stay compliant, stay covered
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              EICR, EPC, Gas Safety Certificates, PAT testing, fire risk assessments and more —
              we handle the certification landlords and property managers are legally required
              to keep up to date.
            </p>
            <Link
              to="/compliance"
              className="inline-flex items-center gap-2 rounded-md border border-slate-900 text-slate-900 font-semibold px-5 py-3 hover:bg-slate-900 hover:text-white transition-colors"
            >
              <Award className="size-4" />
              View compliance services
            </Link>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1621905252507-c48a8e8a9f6a?auto=format&fit=crop&w=900&q=80"
              alt="Engineer reviewing a compliance certificate on a clipboard"
              className="rounded-xl object-cover w-full h-72"
            />
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-black text-amber-500">{value}</p>
      <p className="text-sm text-slate-400 mt-1">{label}</p>
    </div>
  )
}
