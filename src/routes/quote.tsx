import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { CheckCircle2, Phone } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import services from '@/data/services'

export const Route = createFileRoute('/quote')({
  head: () => ({
    meta: [
      { title: 'Get a Free Quote | Home24x7 Build and Repair' },
      {
        name: 'description',
        content:
          'Request a free, no-obligation quote from Home24x7 Build and Repair for property maintenance, repairs or construction work in London and the UK.',
      },
    ],
  }),
  component: Quote,
})

function Quote() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    await fetch('/__forms.html', {
      method: 'POST',
      body: formData,
    })
    setSubmitted(true)
  }

  return (
    <div>
      <PageHero
        eyebrow="Get a Free Quote"
        title="Tell us what you need — we'll come back with a quote fast"
        description="Fill in a few details about your property and the work required. For urgent issues, call our emergency line instead."
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1800&q=80"
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {submitted ? (
            <div className="rounded-xl border border-teal-200 bg-teal-50 p-10 text-center">
              <CheckCircle2 className="size-12 text-teal-700 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Thanks — request received</h2>
              <p className="text-slate-600">
                A member of our team will be in touch shortly to discuss your quote. For anything
                urgent, call us on{' '}
                <a href="tel:07586339259" className="font-semibold text-teal-700">
                  07586 339259
                </a>
                .
              </p>
            </div>
          ) : (
            <form
              name="quote-request"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              className="rounded-xl border border-slate-200 p-6 sm:p-10 space-y-6"
            >
              <input type="hidden" name="form-name" value="quote-request" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Phone number" name="phone" type="tel" required />
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Email address" name="email" type="email" required />
                <Field label="Property location / postcode" name="location" required />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <SelectField
                  label="Property type"
                  name="propertyType"
                  options={['Residential — owner occupied', 'Residential — rented', 'Commercial', 'Landlord portfolio']}
                />
                <SelectField
                  label="Urgency"
                  name="urgency"
                  options={['Emergency — within 24 hours', 'Urgent — within a week', 'Planned — flexible timing']}
                />
              </div>

              <SelectField
                label="Service needed"
                name="serviceNeeded"
                options={services.map((s) => s.title)}
              />

              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-1.5">
                  Tell us more about the job
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-1.5">
                  Upload a photo (optional)
                </label>
                <input
                  type="file"
                  name="photos"
                  accept="image/*"
                  className="block w-full text-sm text-slate-600"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 transition-colors"
              >
                Request my free quote
              </button>

              <p className="text-center text-sm text-slate-500 flex items-center justify-center gap-2">
                Prefer to talk it through?
                <a href="tel:07586339259" className="font-semibold text-teal-700 flex items-center gap-1">
                  <Phone className="size-4" /> 07586 339259
                </a>
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-800 mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500"
      />
    </div>
  )
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string
  name: string
  options: Array<string>
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-800 mb-1.5">{label}</label>
      <select
        name={name}
        defaultValue=""
        className="w-full rounded-md border border-slate-300 px-3.5 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  )
}
