import { HeadContent, Link, Scripts, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppWidget } from '@/components/WhatsAppWidget'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        title: 'Home24x7 Build and Repair | 24/7 Property Maintenance & Construction, London & UK',
      },
      {
        name: 'description',
        content:
          'Home24x7 Build and Repair is a one-stop property maintenance and construction company covering London and the wider UK. 24/7 emergency call-out, Gas Safe and NICEIC approved, fully insured. Get a free quote today.',
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PEBJDYX7JY"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PEBJDYX7JY');
            `,
          }}
        />
      </head>
      <body className="bg-white text-slate-900">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
        <Scripts />
      </body>
    </html>
  )
}

function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="text-amber-600 font-semibold text-sm uppercase tracking-wide mb-2">404</p>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">Page not found</h1>
      <p className="text-slate-600 mb-8">
        The page you&apos;re looking for doesn&apos;t exist. Try heading back to the homepage.
      </p>
      <Link to="/" className="inline-flex rounded-md bg-slate-950 text-white font-semibold px-6 py-3">
        Back to Home
      </Link>
    </div>
  )
}
