import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact Us | Home24x7 Build and Repair' },
      {
        name: 'description',
        content:
          'Contact Home24x7 Build and Repair — address, phone, email, office hours and enquiry form for property maintenance and construction in London and the UK.',
      },
    ],
  }),
  component: Contact,
})

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>
    await fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString(),
    })
    setSubmitted(true)
  }

  return (
    <div>
      <section className="bg-slate-950 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-amber-500 font-semibold text-sm tracking-wide uppercase mb-3">Contact Us</p>
          <h1 className="text-3xl sm:text-5xl font-black text-white max-w-2xl">
            Get in touch with the team
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-12 lg:grid-cols-2">
          <div>
            <div className="space-y-6 mb-10">
              <InfoRow icon={Phone} title="Phone">
                <a href="tel:07586339259" className="hover:text-teal-700">07586 339259</a> — 24/7 emergency line
              </InfoRow>
              <InfoRow icon={Mail} title="Email">
                <a href="mailto:hello@home24x7.co.uk" className="hover:text-teal-700">hello@home24x7.co.uk</a>
              </InfoRow>
              <InfoRow icon={MapPin} title="Office">
                London, UK
              </InfoRow>
              <InfoRow icon={Clock} title="Office hours">
                Mon–Fri 8:00–18:00 · Emergency call-out available 24/7, 365 days a year
              </InfoRow>
            </div>
            <div className="rounded-xl overflow-hidden border border-slate-200 h-72">
              <iframe
                title="Home24x7 Build and Repair office location map"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=London,+UK&output=embed"
              />
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="rounded-xl border border-teal-200 bg-teal-50 p-10 text-center h-full flex flex-col items-center justify-center">
                <CheckCircle2 className="size-12 text-teal-700 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Message sent</h2>
                <p className="text-slate-600">We&apos;ll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form
                name="contact"
                onSubmit={handleSubmit}
                className="rounded-xl border border-slate-200 p-6 sm:p-8 space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out: <input name="bot-field" />
                  </label>
                </p>
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1.5">Full name</label>
                  <input
                    name="name"
                    required
                    className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1.5">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1.5">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-slate-950 hover:bg-slate-800 text-white font-bold py-3.5 transition-colors"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

function InfoRow({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Phone
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex size-11 items-center justify-center rounded-lg bg-slate-950 text-amber-500 shrink-0">
        <Icon className="size-5" />
      </div>
      <div>
        <p className="font-semibold text-slate-900">{title}</p>
        <p className="text-slate-600 text-sm mt-0.5">{children}</p>
      </div>
    </div>
  )
}
