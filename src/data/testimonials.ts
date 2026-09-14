export interface Testimonial {
  name: string
  role: string
  quote: string
  rating: number
  source: 'Google' | 'Trustpilot'
}

export const testimonials: Array<Testimonial> = [
  {
    name: 'Sarah Whitfield',
    role: 'Letting Agent, Clapham',
    quote:
      'We manage over 80 units and Home24x7 is the only contractor we trust with emergency call-outs. Fast, professional, and the reporting makes our lives so much easier.',
    rating: 5,
    source: 'Google',
  },
  {
    name: 'David Okafor',
    role: 'Landlord, Croydon',
    quote:
      'Boiler went down on a Sunday night and an engineer was at the door within two hours. Fixed on the spot and the CP12 renewed while they were there. Cannot fault them.',
    rating: 5,
    source: 'Trustpilot',
  },
  {
    name: 'Emma Bristow',
    role: 'Homeowner, Richmond',
    quote:
      'Used them for a full loft conversion. Project managed from planning drawings right through to decorating, on budget and on time. Genuinely impressed.',
    rating: 5,
    source: 'Google',
  },
  {
    name: 'Marcus Lee',
    role: 'Facilities Manager, Canary Wharf',
    quote:
      'Reliable multi-trade contractor for our commercial units across London. Compliance paperwork always arrives on time, which matters a lot for our audits.',
    rating: 5,
    source: 'Trustpilot',
  },
]
