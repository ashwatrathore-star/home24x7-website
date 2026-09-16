export interface CaseStudy {
  id: string
  title: string
  category: string
  location: string
  before: string
  after: string
  summary: string
}

export const caseStudies: Array<CaseStudy> = [
  {
    id: 'kitchen-clapham',
    title: 'Full Kitchen Refurbishment',
    category: 'Kitchen & Bathroom',
    location: 'Clapham, London',
    before:
      'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=900&q=80',
    after:
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=900&q=80',
    summary: 'Dated 1990s kitchen stripped out and replaced with a modern fitted kitchen in nine working days.',
  },
  {
    id: 'loft-richmond',
    title: 'Dormer Loft Conversion',
    category: 'Construction & Extensions',
    location: 'Richmond, London',
    before:
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=900&q=80',
    after:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    summary: 'Unused loft space converted into a full double bedroom with en-suite, from planning to completion.',
  },
  {
    id: 'void-croydon',
    title: 'Void Property Turnaround',
    category: 'Void Works',
    location: 'Croydon',
    before:
      'https://images.unsplash.com/photo-1768321914688-86ff62032d47?auto=format&fit=crop&w=900&q=80',
    after:
      'https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=900&q=80',
    summary: 'Neglected void unit cleared, repaired, redecorated and re-certified for letting within eight days.',
  },
  {
    id: 'roof-ealing',
    title: 'Flat Roof Replacement',
    category: 'Roofing',
    location: 'Ealing, London',
    before:
      'https://images.unsplash.com/photo-1635958854453-214b7af60fb5?auto=format&fit=crop&w=900&q=80',
    after:
      'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=900&q=80',
    summary: 'Failing felt flat roof replaced with a GRP fibreglass system, resolving a persistent leak.',
  },
]
