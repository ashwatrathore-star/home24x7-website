import { Link } from '@tanstack/react-router'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import services from '@/data/services'

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="flex size-9 items-center justify-center rounded-md bg-amber-500 text-slate-950 font-black text-lg">
              24
            </span>
            <span className="text-white font-bold text-lg leading-tight">
              Home24x7
              <span className="block text-[11px] font-medium text-slate-500 tracking-wide">
                BUILD &amp; REPAIR
              </span>
            </span>
          </div>
          <p className="text-sm leading-relaxed mb-4 max-w-sm">
            One-stop property maintenance and construction company covering London and the
            wider UK. Responsive, accredited, fully insured — for homeowners, landlords and
            commercial property managers.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook className="size-5" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram className="size-5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin className="size-5" /></a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/compliance" className="hover:text-white">Compliance &amp; Certification</Link></li>
            <li><Link to="/construction-extensions" className="hover:text-white">Construction &amp; Extensions</Link></li>
            <li><Link to="/areas-we-cover" className="hover:text-white">Areas We Cover</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Case Studies</Link></li>
            <li><Link to="/blog" className="hover:text-white">Resources</Link></li>
            <li><Link to="/quote" className="hover:text-white">Get a Quote</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-sm mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="size-4 mt-0.5 shrink-0" />
              <a href="tel:07586339259" className="hover:text-white">07586 339259</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="size-4 mt-0.5 shrink-0" />
              <a href="mailto:hello@home24x7.co.uk" className="hover:text-white">hello@home24x7.co.uk</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="size-4 mt-0.5 shrink-0" />
              <span>London, UK</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Home24x7 Build and Repair Ltd. Registered in England &amp; Wales,
            Company No. 14829371. Gas Safe Registered · NICEIC Approved Contractor · Fully Insured · DBS-Checked Staff.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-slate-300">Sitemap</Link>
            <Link to="/emergency-callout" className="hover:text-slate-300">Emergency</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
