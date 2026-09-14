import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { CheckCircle2, MessageCircle, Phone } from 'lucide-react'
import { TrustBadges } from '@/components/TrustBadges'

export const Route = createFileRoute('/emergency-callout')({
  head: () => ({
    meta: [
      { title: '24/7 Emergency Call-Out | Home24x7 Build and Repair' },
      {
        name: 'description',
        content:
          '24/7 emergency call-out for property emergencies across London and the UK. Call, WhatsApp or request a call-back — Home24x7 Build and Repair responds fast.',
      },
    ],
  }),
  component: EmergencyCallout,
})

function EmergencyCallout() {
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
      <section className="relative bg-slate-950">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1800&q=80"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-red-950/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28 text-center">
          <p className="text-red-500 font-semibold text-sm tracking-wide uppercase mb-3">
            24/7 Emergency Call-Out
          </p>
          <h1 className="text-3xl sm:text-5xl font-black text-white max-w-3xl mx-auto leading-tight">
            Property emergency? We&apos;re available right now.
          </h1>
          <p className="text-slate-300 text-lg mt-5 max-w-2xl mx-auto">
            Burst pipes, electrical faults, break-ins, heating failures — call our 24-hour line
            and we&apos;ll dispatch an engineer immediately.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <a
              href="tel:07586339259"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 text-lg transition-colors"
            >
              <Phone className="size-5" />
              Call 07586 339259
            </a>
            <a
              href="https://wa.me/447586339259"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold px-8 py-4 text-lg transition-colors"
            >
              <MessageCircle className="size-5" />
              WhatsApp Us
            </a>
          </div>
          <TrustBadges className="mt-14 max-w-3xl mx-auto" />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 text-center">
            Or request an immediate call-back
          </h2>
          <p className="text-slate-600 text-center mb-8">
            Leave your details and the on-call team will phone you straight back.
          </p>

          {submitted ? (
            <div className="rounded-xl border border-teal-200 bg-teal-50 p-10 text-center">
              <CheckCircle2 className="size-12 text-teal-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Request received</h3>
              <p className="text-slate-600">
                The on-call team has been notified and will call you back shortly.
              </p>
            </div>
          ) : (
            <form
              name="emergency-callout"
              onSubmit={handleSubmit}
              className="rounded-xl border border-slate-200 p-6 sm:p-8 space-y-5"
            >
              <input type="hidden" name="form-name" value="emergency-callout" />
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
                  className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-1.5">Phone number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-1.5">
                  Property location / postcode
                </label>
                <input
                  name="location"
                  required
                  className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-1.5">
                  What&apos;s happened?
                </label>
                <textarea
                  name="issue"
                  rows={3}
                  required
                  className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-red-600 hover:bg-red-500 text-white font-bold py-3.5 transition-colors"
              >
                Request immediate call-back
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
