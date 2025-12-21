const CTA = () => (
  <section className='py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center relative overflow-hidden'>
    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
    <div className='container mx-auto px-6 relative z-10'>
      <h2 className='text-4xl font-bold mb-6'>Ready to Modernize Your Workflow?</h2>
      <p className='text-xl text-blue-100 mb-10 max-w-2xl mx-auto'>Join the top 1% of construction firms leveraging data for dominance.</p>
      <div className='flex flex-col sm:flex-row justify-center gap-4'>
        <button className='bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-slate-100 hover:scale-105 transition-all'>Schedule Consultation</button>
        <button className='bg-transparent border-2 border-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all'>Download Case Study</button>
      </div>
    </div>
  </section>
)

export default CTA
