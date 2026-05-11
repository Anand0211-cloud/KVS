import React from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20">
        <div className="absolute top-0 right-0 -z-10 w-2/3 h-full opacity-10 blur-3xl kinetic-gradient rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-secondary-container text-on-secondary-container font-label text-xs font-bold tracking-widest uppercase">Global Excellence</span>
            <h1 className="text-6xl md:text-8xl font-headline font-extrabold text-on-surface leading-[1.05] tracking-tighter mb-8">
              Precision <span className="text-primary italic">Movement</span>, Absolute Integrity.
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-8 max-w-2xl">
              KVS Universal Solutions redefines logistics through kinetic sophistication. We manage the complexity of global supply chains with an editorial eye for detail and high-velocity execution.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-headline font-extrabold text-on-surface mb-4">Service Ecosystem</h2>
            <div className="h-1.5 w-24 kinetic-gradient rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* 1. Transport & Logistics Support */}
            <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-lowest rounded-[2.5rem] p-10 transition-all duration-500 hover:shadow-xl">
              <div className="absolute top-0 right-0 p-10">
                <span className="material-symbols-outlined text-8xl text-primary/5 select-none" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
              </div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-primary text-4xl">move_location</span>
                </div>
                <h3 className="text-3xl font-headline font-extrabold mb-6 text-on-surface">Transport & Logistics Support</h3>
                <p className="text-on-surface-variant leading-relaxed mb-8 max-w-xl">
                  Strategic end-to-end movement oversight utilizing predictive analytics and real-time visibility across global routes. We ensure your assets are always in the right place at the right time.
                </p>
                <div className="bg-surface p-6 rounded-2xl border border-outline-variant/10 mt-auto">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                      <span className="text-xs font-bold">Multi-modal Freight</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                      <span className="text-xs font-bold">Global Network</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Dispatch & Load Management */}
            <div className="md:col-span-4 group bg-primary rounded-[2.5rem] p-10 text-on-primary transition-all duration-500 hover:shadow-2xl shadow-primary/30 flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-white/20 prism-blur flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-white text-4xl">grid_view</span>
              </div>
              <h3 className="text-2xl font-headline font-extrabold mb-6">Dispatch & Load Management</h3>
              <p className="text-primary-fixed/80 text-sm leading-relaxed mb-8">
                High-density route optimization and rigorous scheduling to ensure mission-critical delivery accuracy and volume efficiency.
              </p>
              <ul className="space-y-4 text-xs font-bold uppercase tracking-widest text-primary-fixed/60">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  Route Optimization
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  Load Balancing
                </li>
              </ul>
            </div>

            {/* 3. Documentation & POD Handling */}
            <div className="md:col-span-4 group bg-white border border-outline-variant/10 rounded-[2.5rem] p-10 transition-all duration-500 hover:shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-secondary text-3xl">description</span>
              </div>
              <h3 className="text-xl font-headline font-bold mb-4">Documentation & POD Handling</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Expert management of Proof of Delivery, Bills of Lading, and all regulatory compliance paperwork.
              </p>
            </div>

            {/* 4. Invoicing & Billing Management */}
            <div className="md:col-span-4 group bg-white border border-outline-variant/10 rounded-[2.5rem] p-10 transition-all duration-500 hover:shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-tertiary/10 flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-tertiary text-3xl">receipt_long</span>
              </div>
              <h3 className="text-xl font-headline font-bold mb-4">Invoicing & Billing Management</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Automated and transparent billing cycles integrated with your accounting systems for seamless reconciliation.
              </p>
            </div>

            {/* 5. Record Keeping & Data Management */}
            <div className="md:col-span-4 group bg-white border border-outline-variant/10 rounded-[2.5rem] p-10 transition-all duration-500 hover:shadow-lg">
              <div className="w-14 h-14 rounded-2xl bg-primary-container/20 flex items-center justify-center text-primary mb-8">
                <span className="material-symbols-outlined text-3xl">database</span>
              </div>
              <h3 className="text-xl font-headline font-bold mb-4">Record Keeping & Data Management</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Secure digital archiving and intelligent data management solutions for audit-ready operational history.
              </p>
            </div>

            {/* 6. Email & Customer Support */}
            <div className="md:col-span-7 group bg-surface-container-lowest rounded-[2.5rem] p-10 transition-all duration-500 border border-outline-variant/5 hover:border-primary/20">
              <div className="flex flex-col md:flex-row gap-8 h-full">
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-primary text-3xl">contact_support</span>
                  </div>
                  <h3 className="text-2xl font-headline font-extrabold mb-4 text-on-surface">Email & Customer Support</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                    High-touch stakeholder correspondence and dedicated relationship management to ensure satisfaction at every touchpoint.
                  </p>
                  <div className="flex gap-4">
                    <span className="text-xs font-bold text-primary px-3 py-1 bg-primary/5 rounded-full">24/7 AVAILABILITY</span>
                    <span className="text-xs font-bold text-primary px-3 py-1 bg-primary/5 rounded-full">MULTILINGUAL</span>
                  </div>
                </div>
                <div className="md:w-1/3 relative">
                  <img className="w-full h-full min-h-[160px] object-cover rounded-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxjKV1HL1o131l_GU_B42Oxo0Na-GdWCyoTklDMKU54i6LlQHYhEL-bQW-IB8EVWN0FTgF8U-BUfZRW6QIElo90hu0GSV8C6G1Cp8WpN0QjPOKhfeH2StWBmqYLpXYHP0RNZ1y5TTgm8XTG86cxEJcr9e1uSKZiWDkTiX0qag6BFJDZ6k9CaLbB6NDDqwIHKgFJens7vR6iye_8zrQVgSBpj7qsQ6hRFHwNAYd27c2WUxLUZet1ZihVPmV8hWFyn-UitO1rJWNDQ" alt="Support Team" />
                </div>
              </div>
            </div>

            {/* 7. Operations Monitoring */}
            <div className="md:col-span-5 group bg-white border border-outline-variant/10 rounded-[2.5rem] p-10 transition-all duration-500 hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-3xl">monitoring</span>
                </div>
                <h3 className="text-2xl font-headline font-extrabold text-on-surface">Operations Monitoring</h3>
              </div>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
                Real-time telemetry and predictive risk assessment to maintain 24/7 granular visibility across your entire operation.
              </p>
              <div className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-on-surface-variant tracking-widest uppercase">System Health</span>
                  <span className="text-xs font-bold text-secondary">99.9% Uptime</span>
                </div>
                <div className="w-full h-2 bg-outline-variant/20 rounded-full overflow-hidden">
                  <div className="w-[99%] h-full kinetic-gradient rounded-full"></div>
                </div>
              </div>
            </div>

            {/* 8. Business Support Services */}
            <div className="md:col-span-12 group bg-primary rounded-[3rem] p-12 text-on-primary relative overflow-hidden transition-all duration-500 hover:shadow-2xl">
              <div className="absolute top-0 right-0 p-12 opacity-10">
                <span className="material-symbols-outlined text-[12rem]">hub</span>
              </div>
              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-4xl font-headline font-extrabold mb-6">Business Support Services</h3>
                  <p className="text-primary-fixed/80 text-lg leading-relaxed mb-8">
                    The back-office engine that powers your growth. From complex data entry to end-to-end administrative management, we provide the foundation for your success.
                  </p>
                  <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-full font-bold transition-transform hover:scale-105 active:scale-95 inline-block">
                    Consult Our Experts
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 prism-blur p-6 rounded-2xl">
                    <span className="material-symbols-outlined text-secondary-fixed mb-4">admin_panel_settings</span>
                    <h4 className="font-bold mb-1">Admin Ops</h4>
                    <p className="text-xs text-primary-fixed/60">Professional office management.</p>
                  </div>
                  <div className="bg-white/10 prism-blur p-6 rounded-2xl">
                    <span className="material-symbols-outlined text-secondary-fixed mb-4">data_exploration</span>
                    <h4 className="font-bold mb-1">Data Insights</h4>
                    <p className="text-xs text-primary-fixed/60">Analytical business support.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="md:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
              <div className="relative bg-surface-container-highest rounded-[3rem] p-2 overflow-hidden shadow-2xl">
                <img className="w-full aspect-square object-cover rounded-[2.5rem]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKvr8C3UKV5yJI7V9YlL64SmKpcf80K114C1f1RmOFwN9bWDHNQNt467a6cBMUOCwDjcRf-DYQ2Iruv1iumcMFOMqswCDCiA6zfFQHW8xnrmHTl83KTODbEHhh9wBwY7QFz2_D85u0CFGbqtwCb283l0_W4LYVAOavU1JFYdC8NInN6UYzDzvu1AOrMeE0V7WxtftDcuDx5CuJySbjquIDqtKY9H1GLf6yDNdVRWwqTBMzydks4Zg7-ovpNTubwEjGp3Pk8DC52g" alt="Logistics Dashboard" />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-5xl font-headline font-extrabold text-on-surface leading-tight mb-8">
                Engineered for <span className="text-secondary">Velocity</span>.
              </h2>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <span className="text-4xl font-headline font-black text-outline-variant">01</span>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Integrated Tech Stack</h4>
                    <p className="text-on-surface-variant leading-relaxed">Proprietary API connections between freight, customs, and your warehouse management systems.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="text-4xl font-headline font-black text-outline-variant">02</span>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Predictive Resilience</h4>
                    <p className="text-on-surface-variant leading-relaxed">AI-driven risk assessment that identifies global logistics bottlenecks before they impact your delivery schedule.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <span className="text-4xl font-headline font-black text-outline-variant">03</span>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Sustainability Ledger</h4>
                    <p className="text-on-surface-variant leading-relaxed">Track and optimize your carbon footprint for every shipment with detailed, audit-ready reporting.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto kinetic-gradient rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-center text-on-primary">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-headline font-extrabold mb-8 tracking-tighter">Ready to optimize your flow?</h2>
            <p className="text-xl text-primary-fixed/90 mb-12">Join hundreds of global enterprises leveraging KVS for their mission-critical logistics needs.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="https://wa.me/919877413558?text=Hello%20KVS%20Team,%20I%20would%20like%20to%20request%20a%20quote%20for%20your%20logistics%20services." target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-10 py-5 rounded-full font-headline font-bold transition-all active:scale-95 shadow-xl shadow-white/20 inline-block">
                Start Consultation
              </a>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
