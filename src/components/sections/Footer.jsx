import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"

const Footer = () => (
  <footer className="bg-slate-950 text-slate-400 py-16 text-sm" id="about">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">B</div>
            <span className="text-xl font-bold text-white">BidEnterprise</span>
          </div>
          <p className="leading-relaxed mb-6">Pioneering the future of construction technology with intelligent, data-driven solutions for the modern enterprise.</p>
          <div className="flex gap-4">
            {[Mail, Phone, MapPin].map((Icon, i) => (
              <div key={i} className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
                <Icon size={14} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Solutions</h4>
          <ul className="space-y-4">
            {["Estimation Suite", "Project Management", "Risk Analytics", "Supply Chain"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Company</h4>
          <ul className="space-y-4">
            {["About Us", "Careers", "Press & Media", "Investor Relations"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 text-lg">Subscribe</h4>
          <p className="mb-4">Get the latest industry insights delivered to your inbox.</p>
          <div className="flex group">
            <input type="email" placeholder="Email address" className="bg-slate-900 border border-slate-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:border-blue-600 w-full transition-colors" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>&copy; 2025 BidEnterprise Inc. All rights reserved.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Sitemap
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
