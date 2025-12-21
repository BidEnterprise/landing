import Navbar from "../components/sections/Navbar"
import Hero from "../components/sections/Hero"
import Stats from "../components/sections/Stats"
import Features from "../components/sections/Features"
import PlatformPreview from "../components/sections/PlatformPreview"
import Testimonials from "../components/sections/Testimonials"
import CTA from "../components/sections/CTA"
import Footer from "../components/sections/Footer"

const Home = () => (
  <div className="font-sans text-slate-800 bg-slate-50 antialiased selection:bg-blue-200 overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <Stats />
      <Features />
      <PlatformPreview />
      <Testimonials />
      <CTA />
    </main>
    <Footer />
  </div>
)

export default Home
