export default function AboutSection() {
  return (
    <section id="about-me" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-meltgreen/5 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-meltgreen/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-deep-space/6 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[360px_1fr] items-center">
          <div className="relative">
            <div className="absolute -left-4 -top-4 rounded-3xl bg-white/90 border border-gray-200 p-4 shadow-lg">
              <img src="/logo.png" alt="Jaycrown logo" className="h-12 w-12" />
            </div>
            <div className="overflow-hidden rounded-[32px] border border-gray-200 shadow-xl">
              <img
                src="/profile.png"
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-meltgreen/20 bg-meltgreen/10 px-4 py-2 text-sm font-semibold text-meltgreen">
              <span>About Me</span>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-deep-space tracking-tight">
                Engineer, mentor, and product partner.
              </h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-2xl">
                I design product-first solutions and build interfaces that help teams move faster. From engineering systems architecture to collaborating with founders,
                I deliver polished software that scales and keeps stakeholders aligned.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Experience</p>
                <p className="mt-3 text-2xl font-semibold text-deep-space">10+ years</p>
              </div>
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Focus</p>
                <p className="mt-3 text-2xl font-semibold text-deep-space">Full stack systems</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Strengths</p>
                <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
                  <li>Distributed systems</li>
                  <li>Product-driven delivery</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500">What I love</p>
                <ul className="mt-3 space-y-2 text-gray-600 list-disc list-inside">
                  <li>Mentoring teams</li>
                  <li>Turning ideas into launch-ready products</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
