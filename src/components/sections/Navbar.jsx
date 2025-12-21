import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Solutions", href: "#solutions" },
  { name: "Platform", href: "#platform" },
  { name: "Enterprise", href: "#enterprise" },
  { name: "About Us", href: "#about" },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">B</div>
          <span className={`text-2xl font-extrabold tracking-tight ${isScrolled ? "text-white" : "text-slate-900"}`}>
            Bid<span className="text-blue-500">Enterprise</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`text-sm font-semibold uppercase tracking-wide transition-colors hover:text-blue-500 ${isScrolled ? "text-slate-300" : "text-slate-700"}`}>
              {link.name}
            </a>
          ))}
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-orange-500/30 transition-all hover:scale-105 active:scale-95">Get Started</button>
        </div>

        <button className="md:hidden z-50 relative" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} className="text-slate-900" /> : <Menu size={28} className={isScrolled ? "text-white" : "text-slate-900"} />}
        </button>
      </div>

      <div className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-xl z-40 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-slate-800 hover:text-blue-600 transition-colors">
              {link.name}
            </a>
          ))}
          <button className="bg-blue-600 text-white w-full max-w-xs py-4 rounded-xl font-bold text-lg shadow-xl">Get Started</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
