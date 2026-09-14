export interface ComplianceItem {
  slug: string
  title: string
  short: string
  detail: string
}

const compliance: Array<ComplianceItem> = [
  {
    slug: 'eicr',
    title: 'EICR (Electrical Installation Condition Report)',
    short: 'Required for rental properties and recommended every 5 years for owner-occupiers.',
    detail:
      'Our qualified electricians inspect the fixed electrical installation and issue a full EICR, identifying any faults or safety concerns and carrying out remedial work where needed.',
  },
  {
    slug: 'epc',
    title: 'EPC (Energy Performance Certificate)',
    short: 'A legal requirement when selling, letting or building a property.',
    detail:
      'We arrange accredited EPC assessments and can carry out the energy efficiency improvements needed to raise a rating ahead of sale or letting.',
  },
  {
    slug: 'gas-safety-cp12',
    title: 'Gas Safety Certificate (CP12)',
    short: 'A yearly legal requirement for landlords with gas appliances.',
    detail:
      'Our Gas Safe registered engineers inspect boilers, cookers and gas fittings, issuing a CP12 certificate confirming the property meets current gas safety regulations.',
  },
  {
    slug: 'pat-testing',
    title: 'PAT Testing',
    short: 'Portable appliance testing for landlords, offices and commercial units.',
    detail:
      'We test and tag portable electrical appliances to confirm they are safe to use, providing full documentation for insurance and compliance purposes.',
  },
  {
    slug: 'fire-risk-assessments',
    title: 'Fire Risk Assessments & Fire Door Compliance',
    short: 'Assessments and fire door checks for HMOs, blocks and commercial premises.',
    detail:
      'Our assessors review fire safety arrangements and fire door condition, providing a written report with any actions needed to meet current fire safety legislation.',
  },
  {
    slug: 'legionella-risk-assessments',
    title: 'Legionella Risk Assessments',
    short: 'Water hygiene assessments required under health and safety law.',
    detail:
      'We assess water systems for legionella risk and provide a written risk assessment and control scheme, with remedial works carried out where required.',
  },
  {
    slug: 'smoke-co-alarms',
    title: 'Smoke & CO Alarm Compliance',
    short: 'Installation and testing of smoke and carbon monoxide alarms.',
    detail:
      'We install and test smoke and carbon monoxide alarms to meet current regulations for rented and commercial properties, issuing certification on completion.',
  },
]

export default compliance
