import AnimatedCounter from "../common/AnimatedCounter"

const Stats = () => (
  <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-800/50">
        <div className="p-4 group">
          <div className="text-4xl md:text-5xl font-black text-blue-500 mb-2 group-hover:scale-110 transition-transform duration-300">
            <AnimatedCounter end={250} />+
          </div>
          <div className="text-slate-400 text-sm uppercase tracking-widest font-semibold">Enterprise Clients</div>
        </div>
        <div className="p-4 group">
          <div className="text-4xl md:text-5xl font-black text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">
            $<AnimatedCounter end={85} />B
          </div>
          <div className="text-slate-400 text-sm uppercase tracking-widest font-semibold">Managed Value</div>
        </div>
        <div className="p-4 group">
          <div className="text-4xl md:text-5xl font-black text-blue-500 mb-2 group-hover:scale-110 transition-transform duration-300">
            <AnimatedCounter end={98} />%
          </div>
          <div className="text-slate-400 text-sm uppercase tracking-widest font-semibold">Accuracy Rate</div>
        </div>
        <div className="p-4 group">
          <div className="text-4xl md:text-5xl font-black text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">
            <AnimatedCounter end={22} />
          </div>
          <div className="text-slate-400 text-sm uppercase tracking-widest font-semibold">Years Experience</div>
        </div>
      </div>
    </div>
  </section>
)

export default Stats
