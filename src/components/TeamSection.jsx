const staffMembers = [
  {
    name: 'Amina Khan',
    role: 'Technical Program Manager',
    focus: 'Coordinating cross-functional launches',
  },
  {
    name: 'Miles Rodriguez',
    role: 'Lead Frontend Engineer',
    focus: 'Designing performant UI systems',
  },
  {
    name: 'Priya Desai',
    role: 'Product Designer',
    focus: 'Crafting human-centered experiences',
  },
  {
    name: 'Noah Bennett',
    role: 'DevOps Specialist',
    focus: 'Automating delivery pipelines',
  },
  {
    name: 'Elena Wu',
    role: 'Data Analyst',
    focus: 'Turning usage data into insights',
  },
  {
    name: 'Jamal Grant',
    role: 'Growth Strategist',
    focus: 'Helping products reach new audiences',
  },
  {
    name: 'Sara Petrov',
    role: 'QA Lead',
    focus: 'Ensuring polished production quality',
  },
  {
    name: 'Leo Matthews',
    role: 'Customer Success Partner',
    focus: 'Aligning product outcomes with clients',
  },
]

export default function TeamSection() {
  return (
    <section id="meet-our-staff" className="py-20 bg-gradient-to-br from-white via-meltgreen/5 to-slate-50/50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-deep-space/4 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-meltgreen/6 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-3xl bg-meltgreen/10 p-4 shadow-sm">
              <img src="/logo_2.png" alt="Jaycrown secondary logo" className="h-10 w-10" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-meltgreen font-semibold">Meet Our Staff</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-deep-space">A passionate team with diverse expertise.</h2>
            </div>
          </div>
          <p className="max-w-2xl text-gray-600">Every team member combines deep technical know-how with strong communication, so your project moves faster and stays aligned.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {staffMembers.map((staff) => (
            <article key={staff.name} className="rounded-[28px] border border-gray-200 bg-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-sm">
                  <img src="/staff.png" alt={staff.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-deep-space">{staff.name}</h3>
                  <p className="text-sm text-gray-500">{staff.role}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed">{staff.focus}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
