import { useState } from "react"
import { Building2, PieChart, TrendingUp, Award } from "lucide-react"
import SectionTitle from "../common/SectionTitle"

const tabs = ["estimation", "management", "analytics"]

const PlatformPreview = () => {
  const [activeTab, setActiveTab] = useState("estimation")

  return (
    <section id="platform" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <SectionTitle align="left" subtitle="The Platform" title="Unified Workflow Control" />

            <div className="space-y-6">
              {tabs.map((tab) => (
                <div
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer p-6 rounded-xl border transition-all duration-300 ${activeTab === tab ? "bg-white border-blue-200 shadow-xl scale-105" : "bg-transparent border-transparent hover:bg-white/50"}`}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${activeTab === tab ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-500"}`}>
                      {tab === "estimation" && <PieChart size={20} />}
                      {tab === "management" && <Building2 size={20} />}
                      {tab === "analytics" && <TrendingUp size={20} />}
                    </div>
                    <h3 className={`text-xl font-bold capitalize ${activeTab === tab ? "text-blue-900" : "text-slate-500"}`}>{tab} Suite</h3>
                  </div>
                  <p className="text-slate-600 pl-14">
                    {tab === "estimation" && "Automated quantity takeoffs and dynamic costing databases."}
                    {tab === "management" && "Resource allocation and timeline tracking for complex builds."}
                    {tab === "analytics" && "Deep-dive profit analysis and win/loss ratio reporting."}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 relative h-[500px]">
            <div className="absolute inset-0 bg-slate-900 rounded-3xl shadow-2xl p-4 transform transition-all duration-500 hover:scale-[1.02]">
              <div className="bg-slate-800 w-full h-full rounded-xl overflow-hidden relative">
                <div className="h-12 bg-slate-950 flex items-center px-4 gap-2 border-b border-slate-700">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="p-6 h-full overflow-y-auto">
                  {activeTab === "estimation" && (
                    <div className="animate-fade-in">
                      <div className="flex justify-between text-white mb-6">
                        <h4 className="font-bold text-lg">Project: Skyline Hub</h4>
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> Active Bid
                        </span>
                      </div>
                      <div className="space-y-4">
                        {[
                          { name: "Concrete Foundation", cost: "$1,240,000" },
                          { name: "Structural Steel", cost: "$3,850,000" },
                          { name: "Glazing Systems", cost: "$980,000" },
                        ].map((item, i) => (
                          <div key={i} className="bg-slate-700/50 p-4 rounded-lg flex justify-between items-center text-slate-300 hover:bg-slate-700 transition-colors cursor-pointer border border-transparent hover:border-blue-500/30">
                            <span>{item.name}</span>
                            <span className="text-white font-mono">{item.cost}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {activeTab === "management" && (
                    <div className="animate-fade-in">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-600 p-4 rounded-lg text-white shadow-lg">
                          <div className="text-3xl font-bold mb-1">12</div>
                          <div className="text-xs opacity-75">Sites Active</div>
                        </div>
                        <div className="bg-indigo-600 p-4 rounded-lg text-white shadow-lg">
                          <div className="text-3xl font-bold mb-1">450</div>
                          <div className="text-xs opacity-75">Workers Deployed</div>
                        </div>
                      </div>
                      <div className="mt-4 bg-slate-700/50 h-32 rounded-lg flex items-center justify-center text-slate-500 border border-slate-600 border-dashed">
                        <div className="text-center">
                          <Award size={24} className="mx-auto mb-2 opacity-50" />
                          <span>Gantt Chart Visualization</span>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === "analytics" && (
                    <div className="animate-fade-in flex items-end gap-2 h-64 pb-12 px-2">
                      {[40, 65, 30, 80, 55, 90, 70].map((h, i) => (
                        <div
                          key={i}
                          style={{ height: `${h}%`, animationDelay: `${i * 50}ms` }}
                          className="flex-1 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-sm opacity-80 hover:opacity-100 transition-all hover:scale-x-110 origin-bottom animate-slide-up"
                        ></div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlatformPreview
