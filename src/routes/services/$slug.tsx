import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { CheckCircle2, Phone } from 'lucide-react'
import { CtaBand } from '@/components/CtaBand'
import services, { getServiceBySlug } from '@/data/services'

export const Route = createFileRoute('/services/$slug')({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug)
    if (!service) throw notFound()
    return service
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} | Home24x7 Build and Repair` },
          { name: 'description', content: loaderData.intro },
        ]
      : [],
  }),
  component: ServiceDetail,
})

function ServiceDetail() {
  const service = Route.useLoaderData()
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <div>
      <section className="relative bg-slate-950">
        <div className="absolute inset-0">
          <img src={service.image} alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
          <nav className="text-sm text-slate-400 mb-5">
            <Link to="/services" className="hover:text-white">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-300">{service.title}</span>
          </nav>
          <h1 className="text-3xl sm:text-5xl font-black text-white max-w-3xl leading-tight">
            {service.title}
          </h1>
          <p className="text-slate-300 text-lg mt-5 max-w-2xl">{service.intro}</p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              to="/quote"
              className="inline-flex items-center justify-center rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:07586339259"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3.5 transition-colors"
            >
              <Phone className="size-5" />
              07586 339259
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">What&apos;s included</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {service.bullets.map((bullet) => (
              <div key={bullet} className="flex items-start gap-3 rounded-lg border border-slate-200 p-4">
                <CheckCircle2 className="size-5 text-teal-600 shrink-0 mt-0.5" />
                <span className="text-slate-700">{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Related services</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="rounded-xl border border-slate-200 bg-white p-6 hover:border-slate-900 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-slate-900 mb-1">{s.title}</h3>
                <p className="text-sm text-slate-600">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
