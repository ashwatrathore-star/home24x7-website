import { BadgeCheck, ShieldCheck, UserCheck, Flame } from 'lucide-react'

const badges = [
  { icon: Flame, label: 'Gas Safe Registered' },
  { icon: ShieldCheck, label: 'NICEIC / ECA Approved' },
  { icon: BadgeCheck, label: 'Fully Insured' },
  { icon: UserCheck, label: 'DBS-Checked Staff' },
]

export function TrustBadges({ className = '' }: { className?: string }) {
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 ${className}`}>
      {badges.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm"
        >
          <Icon className="size-5 text-teal-600 shrink-0" />
          <span className="text-sm font-semibold text-slate-800">{label}</span>
        </div>
      ))}
    </div>
  )
}
