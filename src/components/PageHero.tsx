export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string
  title: string
  description: string
  image: string
}) {
  return (
    <section className="relative bg-slate-950">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/60" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
        <p className="text-amber-500 font-semibold text-sm tracking-wide uppercase mb-3">{eyebrow}</p>
        <h1 className="text-3xl sm:text-5xl font-black text-white max-w-3xl leading-tight">{title}</h1>
        <p className="text-slate-300 text-lg mt-5 max-w-2xl">{description}</p>
      </div>
    </section>
  )
}
