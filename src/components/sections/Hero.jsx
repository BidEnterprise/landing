import { ArrowRight, BarChart3, CheckCircle2 } from "lucide-react"

const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 -skew-x-12 translate-x-32 -z-10" />
    <div className="absolute top-20 left-10 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl -z-10 animate-pulse" />

    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8 animate-slide-left">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-bold text-sm shadow-sm hover:shadow-md transition-shadow cursor-default">
          <span className="relative flex h-3 w-3">
            <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </span>
          V2.0 Platform Now Live
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight">
          Master Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Bid Strategy</span>
        </h1>

        <p className="text-xl text-slate-600 max-w-lg leading-relaxed">The all-in-one enterprise ecosystem for construction estimation, project management, and scalable growth.</p>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg shadow-xl shadow-slate-900/20 hover:bg-slate-800 hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2">
            Request Demo <ArrowRight size={20} />
          </button>
          <button className="px-8 py-4 bg-white text-slate-700 border-2 border-slate-200 rounded-xl font-bold text-lg hover:border-blue-500 hover:text-blue-600 hover:translate-y-[-2px] transition-all">View Solutions</button>
        </div>

        <div className="pt-8 flex items-center gap-8 text-slate-400 grayscale opacity-70">
          <div className="font-black text-xl hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">NEXUS</div>
          <div className="font-black text-xl hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">STRATA</div>
          <div className="font-black text-xl hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">APEX</div>
          <div className="font-black text-xl hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">VERTEX</div>
        </div>
      </div>

      <div className="relative animate-slide-right hidden md:block">
        <div className="relative z-10 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 transform rotate-2 hover:rotate-0 transition-transform duration-500">
          <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="text-xs font-mono text-slate-400">Preview Mode</div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-xl hover:bg-blue-100 transition-colors">
              <div className="text-blue-500 text-xs font-bold uppercase">Total Bids</div>
              <div className="text-2xl font-black text-slate-800">$4.2M</div>
            </div>
            <div className="bg-green-50 p-4 rounded-xl hover:bg-green-100 transition-colors">
              <div className="text-green-600 text-xs font-bold uppercase">Win Rate</div>
              <div className="text-2xl font-black text-slate-800">32%</div>
            </div>
            <div className="bg-orange-50 p-4 rounded-xl hover:bg-orange-100 transition-colors">
              <div className="text-orange-500 text-xs font-bold uppercase">Pending</div>
              <div className="text-2xl font-black text-slate-800">12</div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-2 bg-slate-100 rounded-full w-full overflow-hidden">
              <div className="h-full bg-blue-500 w-3/4 animate-[pulse_2s_infinite]"></div>
            </div>
            <div className="h-2 bg-slate-100 rounded-full w-5/6"></div>
            <div className="h-2 bg-slate-100 rounded-full w-4/6"></div>
            <div className="h-32 bg-slate-50 rounded-xl mt-4 border border-dashed border-slate-200 flex items-center justify-center text-slate-400 hover:border-blue-300 hover:text-blue-400 transition-all">
              <BarChart3 size={32} />
            </div>
          </div>
        </div>

        <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 animate-float border border-slate-100 z-20">
          <div className="bg-green-100 p-2 rounded-full text-green-600">
            <CheckCircle2 size={20} />
          </div>
          <div>
            <div className="text-xs text-slate-500">Project Approved</div>
            <div className="font-bold text-slate-800">Skyline Tower</div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
