const staffMembers = [
  {
    name: 'John Adeoye',
    role: 'Technical Program Manager',
    focus: 'Coordinating cross-functional launches',
    image: '/profile.png',
  },
  {
    name: 'Olajide Suara',
    role: 'Graphics Designer',
    focus: 'Crafting human-centered digital experiences',
    image: '/staff_olajide.webp',
  },
  {
    name: 'Mayor',
    role: 'Lead Frontend Engineer',
    focus: 'Designing performant and scalable UI systems',
    image: '/staff.png',
  },
  {
    name: 'Danial',
    role: 'DevOps Specialist',
    focus: 'Automating delivery pipelines',
    image: '/staff.png',
  },
  {
    name: 'John Sause',
    role: 'Data Analyst',
    focus: 'Turning usage data into insights',
    image: '/staff.png',
  },
  {
    name: 'Bolexy',
    role: 'Growth Strategist',
    focus: 'Helping products reach new audiences',
    image: '/staff.png',
  },
  {
    name: 'Emmanuel',
    role: 'QA Lead',
    focus: 'Ensuring polished production quality',
    image: '/staff.png',
  },
  {
    name: 'Precious',
    role: 'Customer Success Partner',
    focus: 'Aligning product outcomes with clients',
    image: '/staff.png',
  },
]

export default function TeamSection() {
  return (
    <section id="meet-our-staff" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-meltgreen/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"/>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-meltgreen mb-6">Collective Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-deep-space tracking-tight mb-6">
              A passionate team of <br /> industry specialists.
            </h3>
            <p className="text-lg text-deep-space/60 leading-relaxed">
              Every team member combines deep technical know-how with high-velocity communication, 
              ensuring your project moves faster and stays perfectly aligned.
            </p>
          </div>
          {/* <div className="hidden md:block">
            <div className="w-16 h-16 bg-deep-space rounded-2xl flex items-center justify-center">
               <img src="/logo_2.png" alt="Jaycrown logo" className="h-10 w-10" />
            </div> */}
          </div>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {staffMembers.map((staff) => (
            <article key={staff.name} className="group rounded-[2.5rem] bg-gray-50/50 p-8 border border-gray-100 hover:bg-white hover:border-meltgreen/20 hover:shadow-2xl hover:shadow-meltgreen/5 transition-all duration-500">
              <div className="flex flex-col gap-6">
                <div className="h-24 w-24 overflow-hidden rounded-[2rem] bg-white border border-gray-100 shadow-sm transition-transform duration-500 group-hover:scale-110">
                  <img src={staff.image} alt={staff.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-deep-space mb-1">{staff.name}</h3>
                  <p className="text-xs font-bold text-meltgreen uppercase tracking-widest mb-4">{staff.role}</p>
                  <div className="h-px w-8 bg-gray-200 mb-4 group-hover:w-full transition-all duration-500" />
                  <p className="text-sm text-deep-space/60 leading-relaxed">{staff.focus}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      
    </section>
  )
}
