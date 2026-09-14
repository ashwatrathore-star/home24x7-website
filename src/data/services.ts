export interface Service {
  slug: string
  title: string
  short: string
  intro: string
  bullets: Array<string>
  image: string
}

const services: Array<Service> = [
  {
    slug: 'general-maintenance',
    title: 'General Property Maintenance & Repairs',
    short: 'Ongoing upkeep and reactive repairs for homes, offices and rental portfolios.',
    intro:
      'From leaking taps to sticking doors, our multi-trade maintenance teams handle the day-to-day repairs that keep a property safe, compliant and looking its best. One call covers plumbing, electrics, carpentry and more.',
    bullets: [
      'Scheduled and reactive maintenance visits',
      'Multi-trade engineers — fewer call-outs, faster fixes',
      'Planned preventative maintenance contracts',
      'Photo-reported work for landlords and agents',
    ],
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'plumbing-heating',
    title: 'Plumbing & Heating',
    short: 'Gas Safe registered engineers for boilers, leaks, bathrooms and heating systems.',
    intro:
      'Our Gas Safe registered plumbers and heating engineers respond fast to burst pipes, boiler breakdowns and central heating faults, and carry out planned installs and servicing across London and the UK.',
    bullets: [
      'Boiler repair, servicing and installation',
      'Leak detection and emergency isolation',
      'Bathroom plumbing and fitting',
      'Central heating system upgrades',
    ],
    image:
      'https://images.unsplash.com/photo-1607472829322-3fa6f77b8c50?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'electrical',
    title: 'Electrical Works',
    short: 'NICEIC-approved electricians for repairs, rewiring, and installation work.',
    intro:
      'Fully qualified, NICEIC-approved electricians deliver safe, certified electrical work — from fault-finding and consumer unit upgrades to full rewires and lighting installations.',
    bullets: [
      'Fault finding and emergency electrical call-outs',
      'Consumer unit and fuse board upgrades',
      'Full and partial rewires',
      'Lighting, sockets and power installations',
    ],
    image:
      'https://images.unsplash.com/photo-1621905252472-e52c2c8a3d3f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'carpentry-joinery',
    title: 'Carpentry & Joinery',
    short: 'Bespoke and repair carpentry — doors, floors, fitted furniture and more.',
    intro:
      'Skilled carpenters and joiners handle everything from a single sticking door to bespoke fitted units, flooring and structural timber work, finished to a high standard every time.',
    bullets: [
      'Door and window repairs and replacement',
      'Flooring installation and repair',
      'Fitted wardrobes, shelving and units',
      'Structural and first/second-fix carpentry',
    ],
    image:
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'painting-decorating',
    title: 'Painting & Decorating',
    short: 'Interior and exterior decoration for homes, offices and void properties.',
    intro:
      'Our decorators deliver a clean, professional finish for single rooms, full property refurbishments and commercial units, with minimal disruption and tidy, punctual site teams.',
    bullets: [
      'Interior and exterior painting',
      'Wallpapering and plastering finishes',
      'Void property redecoration to letting standard',
      'Commercial and office decoration projects',
    ],
    image:
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'roofing',
    title: 'Roofing',
    short: 'Repairs, replacement, flat roofing and guttering for every roof type.',
    intro:
      'From emergency leak repairs to full re-roofing and flat roof replacement, our roofing teams work safely at height in all weather, with guttering and fascia services included.',
    bullets: [
      'Emergency leak repair and storm damage',
      'Pitched and flat roof replacement',
      'GRP and felt flat roofing systems',
      'Guttering, fascias and soffit repair',
    ],
    image:
      'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'loft-extensions',
    title: 'Loft Conversions & Extensions',
    short: 'Full loft conversions and single/double-storey extensions, start to finish.',
    intro:
      'We manage loft conversions and extensions from initial design through planning and building control to a finished, decorated room — with a single point of contact throughout.',
    bullets: [
      'Dormer, hip-to-gable and mansard loft conversions',
      'Rear, side-return and wrap-around extensions',
      'Structural calculations and planning support',
      'Project managed from design to completion',
    ],
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'construction-renovation',
    title: 'Full Construction & Renovation Projects',
    short: 'End-to-end renovation and construction management for larger projects.',
    intro:
      'For whole-property renovations and new-build works, our construction management team coordinates every trade, keeps projects on schedule, and reports progress at every stage.',
    bullets: [
      'Whole-house renovation and refurbishment',
      'Structural alterations and internal reconfiguration',
      'Dedicated project manager and site supervision',
      'Regular progress reporting and photo updates',
    ],
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'kitchen-bathroom',
    title: 'Kitchen & Bathroom Refurbishment',
    short: 'Complete kitchen and bathroom refits, from design to final fit-out.',
    intro:
      'Our teams deliver full kitchen and bathroom refurbishments — plumbing, electrics, tiling and finishing — coordinated under one contract so you deal with a single supplier, not five.',
    bullets: [
      'Kitchen strip-out, fit and finishing',
      'Bathroom and en-suite refurbishment',
      'Tiling, waterproofing and plumbing included',
      'Fixed-price quotes with clear timelines',
    ],
    image:
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'handyman-emergency',
    title: 'Handyman & Emergency Call-Out',
    short: '24/7 rapid-response call-outs for urgent repairs, any time of day.',
    intro:
      'Our emergency call-out service is available 24 hours a day, 7 days a week, for urgent issues like leaks, break-in damage, lock-outs and heating failures — with engineers dispatched fast.',
    bullets: [
      '24/7 emergency response, 365 days a year',
      'Rapid dispatch across London and the UK',
      'Make-safe and temporary repairs on first visit',
      'Direct line for landlords, agents and facilities teams',
    ],
    image:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'void-property-works',
    title: 'Void Property Works & Turnkey Refurbishments',
    short: 'Full turnkey refurbishment of void properties, ready for re-letting.',
    intro:
      'We turn void properties around quickly and to a consistent standard — clearance, repairs, decoration, compliance certification and cleaning — minimising void periods for landlords and housing providers.',
    bullets: [
      'Clearance and deep clean of void units',
      'Full repair and redecoration to letting standard',
      'Compliance certificates arranged before re-let',
      'Fast turnaround to minimise void loss',
    ],
    image:
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'landlord-contracts',
    title: 'Landlord & Letting Agent Maintenance Contracts',
    short: 'Dedicated maintenance contracts for landlords, agents and portfolios.',
    intro:
      'We work as an extension of your team, managing reactive and planned maintenance across single properties or entire portfolios, with priority response times and consolidated reporting.',
    bullets: [
      'Priority SLAs for landlords and letting agents',
      'Single point of contact across multiple properties',
      'Consolidated invoicing and job reporting',
      'Tenant liaison handled directly by our team',
    ],
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80',
  },
]

export default services

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}
