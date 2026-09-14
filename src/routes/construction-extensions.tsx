import { createFileRoute, Link } from '@tanstack/react-router'
import { CheckCircle2, ClipboardList, Hammer, Ruler } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { CtaBand } from '@/components/CtaBand'
import { caseStudies } from '@/data/caseStudies'

export const Route = createFileRoute('/construction-extensions')({
  head: () => ({
    meta: [
      { title: 'Construction & Extensions | Home24x7 Build and Repair' },
      {
        name: 'description',
        content:
          'Loft conversions, roof extensions and structural work managed from planning to completion by Home24x7 Build and Repair, London and UK-wide.',
      },
    ],
  }),
  component: ConstructionExtensions,
})

const stages = [
  {
    icon: Ruler,
    title: 'Design & planning',
    body: 'Site survey, feasibility, drawings and planning or permitted-development applications handled for you.',
  },
  {
    icon: ClipboardList,
    title: 'Building control & structural',
    body: 'Structural calculations, building control sign-off and party wall agreements managed throughout.',
  },
  {
    icon: Hammer,
    title: 'Construction',
    body: 'A single site team and project manager carry the build through to a finished, decorated space.',
  },
  {
    icon: CheckCircle2,
    title: 'Completion & sign-off',
    body: 'Final inspections, compliance certification and a full handover walkthrough.',
  },
]

function ConstructionExtensions() {
  return (
    <div>
      <PageHero
        eyebrow="Construction & Extensions"
        title="Loft conversions, extensions and structural work — planned to completion"
        description="We project-manage larger builds end to end: design, planning, structural work and construction, with one point of contact from first sketch to final sign-off."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-xl border border-slate-200 p-6">
                <div className="flex size-11 items-center justify-center rounded-lg bg-slate-950 text-amber-500 mb-4">
                  <Icon className="size-5" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-teal-700 font-semibold text-sm tracking-wide uppercase mb-2">
              Recent projects
            </p>
            <h2 className="text-3xl font-bold text-slate-900">Before &amp; after</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {caseStudies.map((project) => (
              <div key={project.id} className="rounded-xl bg-white border border-slate-200 overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src={project.before} alt={`${project.title} before`} className="h-48 w-full object-cover" />
                    <span className="absolute top-2 left-2 rounded bg-slate-950/80 text-white text-xs font-semibold px-2 py-1">
                      Before
                    </span>
                  </div>
                  <div className="relative">
                    <img src={project.after} alt={`${project.title} after`} className="h-48 w-full object-cover" />
                    <span className="absolute top-2 left-2 rounded bg-amber-500 text-slate-950 text-xs font-semibold px-2 py-1">
                      After
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold text-teal-700 uppercase mb-1">{project.category}</p>
                  <h3 className="font-bold text-slate-900 mb-1">{project.title}</h3>
                  <p className="text-sm text-slate-500 mb-2">{project.location}</p>
                  <p className="text-sm text-slate-600">{project.summary}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/gallery"
              className="inline-flex items-center rounded-md border border-slate-900 text-slate-900 font-semibold px-6 py-3 hover:bg-slate-900 hover:text-white transition-colors"
            >
              View full case study gallery
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
