import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'

const navLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/compliance', label: 'Compliance' },
  { to: '/construction-extensions', label: 'Construction & Extensions' },
  { to: '/areas-we-cover', label: 'Areas We Cover' },
  { to: '/gallery', label: 'Case Studies' },
  { to: '/blog', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur border-b border-white/10">
      <div className="bg-amber-500 text-slate-950 text-xs sm:text-sm font-semibold">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-1.5 flex items-center justify-between gap-2">
          <span className="tracking-wide truncate">24/7 EMERGENCY CALL-OUT — LONDON &amp; UK WIDE</span>
          <a href="tel:07586339259" className="flex items-center gap-1 whitespace-nowrap hover:underline shrink-0">
            <Phone className="size-3.5" />
            07586 339259
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="flex size-9 items-center justify-center rounded-md bg-amber-500 text-slate-950 font-black text-lg shrink-0">
              24
            </span>
            <span className="text-white font-bold text-lg leading-tight whitespace-nowrap">
              Home24x7
              <span className="block text-[11px] font-medium text-slate-400 tracking-wide">
                BUILD &amp; REPAIR
              </span>
            </span>
          </Link>

          <nav className="hidden 2xl:flex items-center gap-4 min-w-0">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap"
                activeProps={{ className: 'text-white' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden 2xl:flex items-center gap-3 shrink-0">
            <Link
              to="/emergency-callout"
              className="rounded-md bg-red-600 hover:bg-red-500 text-white text-sm font-semibold px-4 py-2 transition-colors whitespace-nowrap"
            >
              Emergency Call-Out
            </Link>
            <Link
              to="/quote"
              className="rounded-md bg-amber-500 hover:bg-amber-400 text-slate-950 text-sm font-semibold px-4 py-2 transition-colors whitespace-nowrap"
            >
              Get a Free Quote
            </Link>
          </div>

          <button
            type="button"
            className="2xl:hidden text-white p-2 shrink-0"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="2xl:hidden border-t border-white/10 bg-slate-950">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="text-slate-300 hover:text-white py-2.5 text-sm font-medium border-b border-white/5"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-3">
              <Link
                to="/emergency-callout"
                onClick={() => setOpen(false)}
                className="rounded-md bg-red-600 text-white text-sm font-semibold px-4 py-2.5 text-center"
              >
                Emergency Call-Out
              </Link>
              <Link
                to="/quote"
                onClick={() => setOpen(false)}
                className="rounded-md bg-amber-500 text-slate-950 text-sm font-semibold px-4 py-2.5 text-center"
              >
                Get a Free Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
