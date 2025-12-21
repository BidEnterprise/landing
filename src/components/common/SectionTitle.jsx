const SectionTitle = ({ subtitle, title, align = "center", titleClassName = "", subtitleClassName = "" }) => (
  <div className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
    <span className={`text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block ${subtitleClassName}`}>{subtitle}</span>
    <h2 className={`text-3xl md:text-5xl font-extrabold leading-tight text-slate-900 ${titleClassName}`}>{title}</h2>
    <div className={`h-1.5 w-24 bg-orange-500 mt-4 rounded-full ${align === "center" ? "mx-auto" : ""}`}></div>
  </div>
)

export default SectionTitle
