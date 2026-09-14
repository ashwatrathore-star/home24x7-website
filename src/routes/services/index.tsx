import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { CtaBand } from '@/components/CtaBand'
import services from '@/data/services'

export const Route = createFileRoute('/services/')({
  head: () => ({
    meta: [
      { title: 'Property Maintenance Services | Home24x7 Build and Repair' },
      {
        name: 'description',
        content:
          'Full range of property maintenance and construction services in London and the UK: plumbing, electrical, roofing, carpentry, loft conversions, kitchens, bathrooms and more.',
      },
    ],
  }),
  component: ServicesIndex,
})

function ServicesIndex() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Every trade, one accountable contractor"
        description="From a dripping tap to a full loft conversion, our accredited multi-trade teams handle it — for homeowners, landlords and commercial property managers across London and the UK."
        image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="group rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-900 transition-all"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-600 mb-4">{service.short}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-teal-700">
                    Learn more <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
