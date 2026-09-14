import { createFileRoute } from '@tanstack/react-router'
import { PageHero } from '@/components/PageHero'
import { CtaBand } from '@/components/CtaBand'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { caseStudies } from '@/data/caseStudies'

export const Route = createFileRoute('/gallery')({
  head: () => ({
    meta: [
      { title: 'Gallery & Case Studies | Home24x7 Build and Repair' },
      {
        name: 'description',
        content:
          'Before-and-after project photos and client testimonials from Home24x7 Build and Repair projects across London and the UK.',
      },
    ],
  }),
  component: Gallery,
})

function Gallery() {
  return (
    <div>
      <PageHero
        eyebrow="Gallery & Case Studies"
        title="Real projects, real results"
        description="A selection of recent maintenance, refurbishment and construction projects completed for landlords, homeowners and businesses."
        image="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-8 sm:grid-cols-2">
          {caseStudies.map((project) => (
            <div key={project.id} className="rounded-xl border border-slate-200 overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img src={project.before} alt={`${project.title} before`} className="h-56 w-full object-cover" />
                  <span className="absolute top-2 left-2 rounded bg-slate-950/80 text-white text-xs font-semibold px-2 py-1">
                    Before
                  </span>
                </div>
                <div className="relative">
                  <img src={project.after} alt={`${project.title} after`} className="h-56 w-full object-cover" />
                  <span className="absolute top-2 left-2 rounded bg-amber-500 text-slate-950 text-xs font-semibold px-2 py-1">
                    After
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold text-teal-700 uppercase mb-1">{project.category}</p>
                <h3 className="font-bold text-lg text-slate-900 mb-1">{project.title}</h3>
                <p className="text-sm text-slate-500 mb-3">{project.location}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{project.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <TestimonialsSection />

      <CtaBand />
    </div>
  )
}
