import { BarChart3, ShieldCheck, Users, TrendingUp, Globe, Briefcase } from "lucide-react"
import FeatureCard from "../common/FeatureCard"
import SectionTitle from "../common/SectionTitle"

const FEATURES = [
  {
    icon: BarChart3,
    title: "Predictive Estimation",
    desc: "Leverage historical data and AI modeling to predict project costs with granular accuracy before you commit.",
    delay: 0,
  },
  {
    icon: ShieldCheck,
    title: "Risk Management",
    desc: "Identify potential bottlenecks and budget overruns early with our proprietary risk assessment algorithms.",
    delay: 100,
  },
  {
    icon: Users,
    title: "Vendor Collaboration",
    desc: "Centralize communication with subcontractors and suppliers. Compare quotes and performance in real-time.",
    delay: 200,
  },
  {
    icon: TrendingUp,
    title: "Market Intelligence",
    desc: "Stay ahead of material cost fluctuations with live market feeds integrated directly into your takeoff.",
    delay: 300,
  },
  {
    icon: Globe,
    title: "Global Compliance",
    desc: "Built-in regulatory frameworks for international projects, ensuring your bids meet local standards.",
    delay: 400,
  },
  {
    icon: Briefcase,
    title: "Executive Reporting",
    desc: "C-Suite ready dashboards that provide high-level visibility into pipeline health and profit margins.",
    delay: 500,
  },
]

const Features = () => (
  <section id="solutions" className="py-24 bg-white relative">
    <div className="container mx-auto px-6 relative z-10">
      <SectionTitle subtitle="Core Capabilities" title="Engineered for Scalability" />

      <div className="grid md:grid-cols-3 gap-8">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </div>
  </section>
)

export default Features
