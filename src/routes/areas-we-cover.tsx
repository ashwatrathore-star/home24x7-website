import { createFileRoute } from '@tanstack/react-router'
import { MapPin } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { CtaBand } from '@/components/CtaBand'
import { londonBoroughs } from '@/data/boroughs'

export const Route = createFileRoute('/areas-we-cover')({
  head: () => ({
    meta: [
      { title: 'Areas We Cover | Home24x7 Build and Repair' },
      {
        name: 'description',
        content:
          'Home24x7 Build and Repair covers all 32 London boroughs plus nationwide coverage across the UK for property maintenance and construction.',
      },
    ],
  }),
  component: AreasWeCover,
})

function AreasWeCover() {
  return (
    <div>
      <PageHero
        eyebrow="Areas We Cover"
        title="All of London, plus nationwide coverage across the UK"
        description="Our core engineer teams are based across London for fast local response, backed by an accredited nationwide network for larger projects anywhere in the UK."
        image="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-10">
            <MapPin className="size-7 text-amber-500" />
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              London boroughs we cover
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {londonBoroughs.map((borough) => (
              <div
                key={borough}
                className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 bg-slate-50"
              >
                {borough}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Nationwide coverage across the UK
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Beyond London, our accredited contractor network takes on construction, renovation
            and compliance projects across England, Scotland, Wales and Northern Ireland.
            Whatever the scale, whatever the location — get in touch and we&apos;ll confirm
            coverage and response times for your postcode.
          </p>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
