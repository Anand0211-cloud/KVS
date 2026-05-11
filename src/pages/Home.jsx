import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container/30 text-on-secondary-container font-label text-sm font-semibold tracking-wide">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>speed</span>
                KINETIC LOGISTICS SOLUTIONS
              </div>
              <h1 className="text-5xl lg:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] tracking-tight">
                Reliable Logistics & <span className="text-primary">Business Support</span> Services
              </h1>
              <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed">
                Streamline your global supply chain with our sophisticated prism-flow methodology. We move beyond tracking to deliver real-time operational excellence.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="https://wa.me/919877413558?text=Hello%20KVS%20Team,%20I%20would%20like%20to%20request%20a%20quote%20for%20your%20logistics%20services." target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-lg active:scale-95 transition-transform shadow-lg shadow-primary/20">
                  Get a Quote
                </a>
                <Link to="/contact" className="bg-outline-variant/10 backdrop-blur-xl border border-outline-variant/20 text-primary px-8 py-4 rounded-xl font-bold text-lg active:scale-95 transition-transform">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-700 bg-surface-container-high">
                <img alt="Logistics Operations" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGaWCnAOzyniNWuH3SpgowJTIt_DL9PVqsu3Wvpj6zCQh1qCjOGTdPaj_L24I-JCgJKd_QtV8lGgKc69MRuUKIPQ9dc_BHSEtCM6jkfCLuKrZmzRZmWvVO1uGYFV92fo7M3QSJaI0O_WTq6EhpflsCLVFH87OAw_l6UY2vFp52rxLAJIMEovZ7EPkeVZ1YYN62Xz7dmrfnIub084HvLauHkibMiWmKbp4jMqH6B59K1wDOR8u4TtVGiveqgQeJ1hZshQiH9GtCig" />
              </div>
              {/* Prism Floating Element */}
              <div className="absolute -bottom-6 -left-6 glass-panel p-6 rounded-xl shadow-xl border border-white/40 max-w-xs">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">analytics</span>
                  </div>
                  <div>
                    <div className="text-sm font-label text-on-surface-variant">Real-time Velocity</div>
                    <div className="font-headline font-bold text-xl">99.8% Efficiency</div>
                  </div>
                </div>
                <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                  <div className="velocity-bar h-full w-[94%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative Prism Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full prism-flow-gradient opacity-[0.03] -skew-x-12 translate-x-1/4 pointer-events-none"></div>
      </header>

      {/* About Preview Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="h-64 rounded-xl overflow-hidden shadow-lg">
                    <img alt="Logistics Team" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxjKV1HL1o131l_GU_B42Oxo0Na-GdWCyoTklDMKU54i6LlQHYhEL-bQW-IB8EVWN0FTgF8U-BUfZRW6QIElo90hu0GSV8C6G1Cp8WpN0QjPOKhfeH2StWBmqYLpXYHP0RNZ1y5TTgm8XTG86cxEJcr9e1uSKZiWDkTiX0qag6BFJDZ6k9CaLbB6NDDqwIHKgFJens7vR6iye_8zrQVgSBpj7qsQ6hRFHwNAYd27c2WUxLUZet1ZihVPmV8hWFyn-UitO1rJWNDQ" />
                  </div>
                  <div className="h-48 bg-primary rounded-xl flex items-center justify-center p-8 text-white">
                    <span className="text-3xl font-headline font-black text-center">Global Reach</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-48 bg-secondary-fixed text-on-secondary-fixed rounded-xl flex flex-col items-center justify-center p-8">
                    <span className="text-4xl font-headline font-black">15+</span>
                    <span className="text-sm font-label font-bold uppercase tracking-widest">Years Experience</span>
                  </div>
                  <div className="h-64 rounded-xl overflow-hidden shadow-lg">
                    <img alt="Shipping Containers" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDgoENy4GlKStQPAO6w5t0sEC_2iRcEeh-VWzaN_UUR8KE7sZeDhhZUlU_-Z4cp4vNwM0-58Kxxe2qe-p6XI6GVDeSTQJH_oqzGfXkDePyet7-3pj91pAPQmLW8lCMlLKuLDtXwIMJ_RUEEBiYurF8eP_sr2kF1O7OU_l5yDzV14ftRIgo7B2jrIjOwG6vBB3JaYSgqpLYv-uiRJd04h6YGjlocMwc9w_JfdeocqityIdtylEtRVpLyUxWedbsoRwuwRrFKwUOXA" />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-4xl lg:text-5xl font-headline font-extrabold text-on-surface tracking-tight">
                Kinetic Sophistication in <span className="text-primary">Global Logistics</span>
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                KVS Universal Solutions isn't just a logistics provider; we are your strategic operational anchor. We combine deep-tech analytical capabilities with high-touch personal service to ensure your cargo—and your business—moves at the speed of modern commerce.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="font-medium">Strategic network optimization for reduced overhead.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="font-medium">Dedicated support teams for complex documentation.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="font-medium">Transparent, end-to-end data visibility.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview (Bento Grid) */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-headline font-extrabold tracking-tight">Our Service Ecosystem</h2>
            <p className="text-on-surface-variant">A comprehensive suite of logistics and business support designed to keep your operations fluid and focused.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Logistics Coordination */}
            <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm border border-outline-variant/10 hover:shadow-xl transition-all group">
              <div className="flex justify-between items-start mb-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">route</span>
                </div>
                <span className="material-symbols-outlined text-outline-variant">north_east</span>
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">Transport & Logistics Support</h3>
              <p className="text-on-surface-variant mb-6">Seamlessly managing the intricate dance of transportation, warehousing, and delivery schedules globally.</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-surface-container text-xs font-bold rounded-full">AIR FREIGHT</span>
                <span className="px-3 py-1 bg-surface-container text-xs font-bold rounded-full">OCEAN</span>
                <span className="px-3 py-1 bg-surface-container text-xs font-bold rounded-full">TRUCKING</span>
              </div>
            </div>
            {/* Load Planning */}
            <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm border border-outline-variant/10 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-8 group-hover:rotate-12 transition-transform">
                <span className="material-symbols-outlined text-2xl">grid_view</span>
              </div>
              <h3 className="text-xl font-headline font-bold mb-4">Dispatch & Load Management</h3>
              <p className="text-sm text-on-surface-variant">Maximizing efficiency through precise cargo distribution and volume optimization.</p>
            </div>
            {/* Documentation */}
            <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm border border-outline-variant/10 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-tertiary/10 flex items-center justify-center text-tertiary mb-8 group-hover:-rotate-12 transition-transform">
                <span className="material-symbols-outlined text-2xl">description</span>
              </div>
              <h3 className="text-xl font-headline font-bold mb-4">Documentation & POD Handling</h3>
              <p className="text-sm text-on-surface-variant">Expert handling of bills of lading, customs declarations, and compliance paperwork.</p>
            </div>
            {/* Invoicing */}
            <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm border border-outline-variant/10 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-primary-container/20 flex items-center justify-center text-primary mb-8 group-hover:scale-95 transition-transform">
                <span className="material-symbols-outlined text-2xl">receipt_long</span>
              </div>
              <h3 className="text-xl font-headline font-bold mb-4">Invoicing & Billing Management</h3>
              <p className="text-sm text-on-surface-variant">Automated and transparent billing cycles integrated with your accounting systems.</p>
            </div>
            {/* Support */}
            <div className="md:col-span-2 bg-primary p-8 rounded-[2rem] text-white flex flex-col justify-between overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="text-2xl font-headline font-bold mb-4">Business Support Services</h3>
                <p className="text-white/80 max-w-sm mb-6">Beyond logistics, we provide the back-office engine that powers your growth—from data entry to CRM management.</p>
                <Link to="/services" className="bg-white text-primary px-6 py-2 rounded-full font-bold text-sm inline-block">Explore All Services</Link>
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
              <span className="material-symbols-outlined absolute top-8 right-8 text-6xl text-white/10">hub</span>
            </div>
            {/* Tracking */}
            <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm border border-outline-variant/10 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-8">
                <span className="material-symbols-outlined text-2xl">location_on</span>
              </div>
              <h3 className="text-xl font-headline font-bold mb-4">Operations Monitoring</h3>
              <p className="text-sm text-on-surface-variant">Real-time GPS visibility for every asset in your supply chain journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-12">
              <h2 className="text-4xl lg:text-5xl font-headline font-extrabold tracking-tight">Why Industry Leaders <span className="text-primary">Trust KVS</span></h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-primary">verified_user</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-headline font-bold mb-2">Professional Environment</h4>
                    <p className="text-on-surface-variant">Our operations center is built on a culture of excellence, ensuring your business is handled with the highest corporate standards.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-primary">handshake</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-headline font-bold mb-2">Reliable Service</h4>
                    <p className="text-on-surface-variant">Uptime isn't just a metric for us; it's a promise. We provide 24/7 reliability that keeps your supply chain moving without friction.</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-primary">psychology</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-headline font-bold mb-2">Intelligent Solutions</h4>
                    <p className="text-on-surface-variant">We don't just solve problems; we predict them. Using data analytics to optimize every route and decision.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 glass-panel p-2 rounded-[2.5rem] shadow-2xl">
                <img alt="Digital Logistics Control" className="rounded-[2.25rem] w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMKkrqlliVRJZTkeWuBhfvOWAEzNGWadMyompHu1eGYN_fQdfvnEfPvcuIQO00zUU350uvt6VXWJBQUdnNJrxDRHKze7pPKVwl_6pM1Vl7I4NOThE_UNj4BiDS-s1FO495DNVYCYVeVm8ZYk2Wg5mh_g_ve2i7_FPpDgfd1AJEIM_RnhtzbhiQcmBp2nk-qMPDl1-ehYXYx5hU7zhcIKG3Td30OOqtVIsK0KaVl7A4GJCF6GDa8kL5IIDzc_NTLYhmqyTfZ253yA" />
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-headline font-extrabold mb-4">Our Streamlined Process</h2>
            <div className="w-24 h-1 prism-flow-gradient mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connectors for Desktop */}
            <div className="hidden md:block absolute top-1/4 left-0 w-full h-px bg-outline-variant/30 -z-10"></div>
            {/* Step 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-surface-container-lowest border-4 border-surface shadow-lg rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="text-2xl font-black font-headline">01</span>
              </div>
              <h4 className="text-xl font-bold mb-3 font-headline">Discovery</h4>
              <p className="text-sm text-on-surface-variant px-4">We audit your current logistics and business workflows to identify gaps.</p>
            </div>
            {/* Step 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-surface-container-lowest border-4 border-surface shadow-lg rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="text-2xl font-black font-headline">02</span>
              </div>
              <h4 className="text-xl font-bold mb-3 font-headline">Strategy</h4>
              <p className="text-sm text-on-surface-variant px-4">Custom load planning and support framework tailored to your volume.</p>
            </div>
            {/* Step 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-surface-container-lowest border-4 border-surface shadow-lg rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="text-2xl font-black font-headline">03</span>
              </div>
              <h4 className="text-xl font-bold mb-3 font-headline">Execution</h4>
              <p className="text-sm text-on-surface-variant px-4">Deployment of coordination teams and integrated documentation flow.</p>
            </div>
            {/* Step 4 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-surface-container-lowest border-4 border-surface shadow-lg rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="text-2xl font-black font-headline">04</span>
              </div>
              <h4 className="text-xl font-bold mb-3 font-headline">Optimization</h4>
              <p className="text-sm text-on-surface-variant px-4">Continuous refinement through analytics and quarterly reviews.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto prism-flow-gradient rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-6xl font-headline font-black text-white tracking-tight leading-tight">
              Let us handle your operations while you focus on growth
            </h2>
            <p className="text-white/80 text-lg">
              Join hundreds of businesses that have scaled their logistics capacity without increasing their internal complexity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/919877413558?text=Hello%20KVS%20Team,%20I%20would%20like%20to%20request%20a%20quote%20for%20your%20logistics%20services." target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-10 py-5 rounded-full font-bold text-xl active:scale-95 transition-transform hover:shadow-xl hover:shadow-white/20">
                Get Your Free Quote
              </a>
              <a href="https://wa.me/919877413558?text=Hello%20KVS%20Team,%20I%20am%20interested%20in%20your%20logistics%20services." target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold text-xl active:scale-95 transition-transform">
                Speak to an Expert
              </a>
            </div>
          </div>
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
