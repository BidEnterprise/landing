import SectionTitle from "../common/SectionTitle"

const testimonials = [
  {
    text: "BidEnterprise transformed our pre-construction phase. We reduced our estimation time by 60% while increasing our win rate on tenders over $50M. It is simply the new standard.",
    name: "Sarah Jenkins",
    role: "CTO, Vertex Construction Group",
  },
  {
    text: "The data visibility is unmatched. I can see exactly where every dollar is allocated across 15 active sites. Essential for any serious firm scaling operations.",
    name: "Michael Ross",
    role: "Director of Ops, MegaBuild Inc.",
  },
]

const Testimonials = () => (
  <section className='py-24 bg-slate-900 text-white relative overflow-hidden' id='enterprise'>
    <div
      className='absolute inset-0 opacity-5'
      style={{
        backgroundImage: "linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff), linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff)",
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 10px 10px",
      }}
    ></div>

    <div className='container mx-auto px-6 relative z-10'>
      <SectionTitle subtitle='Industry Trust' title='What Leaders Are Saying' align='center' titleClassName='text-white' />

      <div className='grid md:grid-cols-2 gap-8'>
        {testimonials.map((t, i) => (
          <div key={i} className='bg-slate-800/50 p-10 rounded-2xl border border-slate-700 relative hover:border-blue-500/50 transition-colors group'>
            <div className='text-orange-500 text-6xl font-serif absolute top-4 left-6 opacity-30 group-hover:opacity-50 transition-opacity'>"</div>
            <p className='text-lg text-slate-300 italic mb-6 relative z-10 leading-relaxed'>{t.text}</p>
            <div className='flex items-center gap-4'>
              <div className='w-12 h-12 bg-gradient-to-tr from-slate-600 to-slate-500 rounded-full flex items-center justify-center text-xl font-bold'>{t.name.charAt(0)}</div>
              <div>
                <div className='font-bold text-white'>{t.name}</div>
                <div className='text-sm text-slate-400'>{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Testimonials
