import { ChevronRight } from "lucide-react"
import useScrollReveal from "../../hooks/useScrollReveal"

const FeatureCard = ({ icon: Icon, title, desc, delay = 0 }) => {
  const [ref, isVisible] = useScrollReveal()
  return (
    <div
      ref={ref}
      className={`p-8 bg-white rounded-2xl shadow-xl border border-slate-100 transition-all duration-700 transform hover:-translate-y-2 hover:shadow-2xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600 transition-transform duration-300 hover:scale-110">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
      <a href="#" className="inline-flex items-center mt-4 text-blue-600 font-semibold hover:text-blue-800 transition-colors group">
        Learn more <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  )
}

export default FeatureCard
