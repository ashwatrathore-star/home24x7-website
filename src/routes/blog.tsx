import { createFileRoute, Link } from '@tanstack/react-router'
import { CalendarDays } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { CtaBand } from '@/components/CtaBand'

export const Route = createFileRoute('/blog')({
  head: () => ({
    meta: [
      { title: 'Resources & Blog | Home24x7 Build and Repair' },
      {
        name: 'description',
        content:
          'Guidance on compliance deadlines and property maintenance tips from Home24x7 Build and Repair, serving London and the UK.',
      },
    ],
  }),
  component: Blog,
})

const articles = [
  {
    title: 'EICR renewal: what landlords in London need to know for 2026',
    date: '2026-01-14',
    excerpt:
      'A guide to Electrical Installation Condition Report deadlines, what inspectors check, and how to avoid last-minute renewal issues.',
    category: 'Compliance',
  },
  {
    title: '5 winter maintenance checks that prevent emergency call-outs',
    date: '2025-11-03',
    excerpt:
      'Simple preventative maintenance steps for landlords and homeowners that reduce the risk of burst pipes and heating failures in cold weather.',
    category: 'Maintenance Tips',
  },
  {
    title: 'Gas Safety Certificates (CP12): renewal timing and common mistakes',
    date: '2025-09-22',
    excerpt:
      'What every landlord needs to know about CP12 certificates, renewal timing, and what happens if a certificate lapses.',
    category: 'Compliance',
  },
  {
    title: 'Loft conversion vs. extension: which adds more value in London?',
    date: '2025-07-08',
    excerpt:
      'A practical comparison of loft conversions and rear extensions, covering cost, planning requirements and typical value uplift.',
    category: 'Construction',
  },
]

function Blog() {
  return (
    <div>
      <PageHero
        eyebrow="Resources"
        title="Compliance deadlines and maintenance guidance"
        description="Practical articles for landlords, letting agents and homeowners on staying compliant and keeping properties well maintained."
        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 space-y-6">
          {articles.map((a) => (
            <article key={a.title} className="rounded-xl border border-slate-200 p-6 sm:p-8">
              <div className="flex items-center gap-3 text-xs font-semibold text-teal-700 uppercase mb-3">
                <span>{a.category}</span>
                <span className="text-slate-300">·</span>
                <span className="flex items-center gap-1 text-slate-500 normal-case font-medium">
                  <CalendarDays className="size-3.5" />
                  {new Date(a.date).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">{a.title}</h2>
              <p className="text-slate-600 leading-relaxed">{a.excerpt}</p>
            </article>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/quote"
            className="inline-flex items-center rounded-md bg-slate-950 text-white font-semibold px-6 py-3 hover:bg-slate-800 transition-colors"
          >
            Have a question? Get a free quote
          </Link>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
