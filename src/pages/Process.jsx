import React from 'react';
import { Link } from 'react-router-dom';
import logisticsDashboard from '../assets/logistics_dashboard.png';

const Process = () => {
  return (
    <div className="pt-20">
      {/* Hero Section: Kinetic Prism */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 kinetic-gradient opacity-10"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-widest uppercase mb-6">Execution Strategy</span>
            <h1 className="text-5xl md:text-7xl font-black font-headline text-on-surface leading-[1.1] mb-8 tracking-tighter">
              Logistics defined by <span className="text-primary italic">Kinetic Precision.</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
              Our workflow is an engineered stream of data and motion, ensuring your cargo moves with sophisticated predictability through every global node.
            </p>
          </div>
        </div>
      </section>

      {/* The Prism Flow: Step-based UI */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          {/* Velocity Tracker (Progress Bar) */}
          <div className="mb-20">
            <div className="flex justify-between items-end mb-4 px-2">
              <div className="flex flex-col">
                <span className="text-label-md font-bold text-primary">System Status: Optimization Active</span>
                <span className="text-4xl font-headline font-black tracking-tight">Lifecycle Stream</span>
              </div>
              <div className="text-right">
                <span className="text-sm font-bold text-on-surface-variant opacity-60">EFFICIENCY RATING</span>
                <div className="text-2xl font-headline font-extrabold text-secondary">99.8%</div>
              </div>
            </div>
            <div className="h-4 w-full bg-surface-container-highest rounded-full overflow-hidden flex">
              <div className="h-full kinetic-gradient velocity-pulse w-full rounded-full"></div>
            </div>
          </div>

          {/* Step Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0 relative">
            {/* Step 1 */}
            <div className="group relative z-10 p-8 bg-surface-container-lowest rounded-xl md:rounded-none md:rounded-l-xl transition-all duration-500 hover:bg-white hover:shadow-2xl hover:z-20 md:border-r border-outline-variant/10">
              <div className="mb-8 flex items-center justify-between">
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">psychology</span>
                </div>
                <span className="text-6xl font-headline font-black text-surface-container-highest group-hover:text-primary-fixed-dim transition-colors">01</span>
              </div>
              <h3 className="text-2xl font-headline font-extrabold mb-4 group-hover:text-primary transition-colors">Requirement Understanding</h3>
              <p className="text-on-surface-variant leading-relaxed">Deep-dive technical analysis of your supply chain parameters to identify latent efficiencies.</p>
              <div className="mt-8 pt-8 border-t border-outline-variant/10 flex items-center gap-2 text-primary font-bold text-sm">
                <span>ANALYTICS ENGINE</span>
                <span className="material-symbols-outlined text-sm">trending_up</span>
              </div>
            </div>
            {/* Step 2 */}
            <div className="group relative z-10 p-8 bg-surface-container-low transition-all duration-500 hover:bg-white hover:shadow-2xl hover:z-20 md:border-r border-outline-variant/10">
              <div className="mb-8 flex items-center justify-between">
                <div className="w-14 h-14 rounded-xl bg-tertiary/5 flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-3xl">calendar_apps_script</span>
                </div>
                <span className="text-6xl font-headline font-black text-surface-container-highest group-hover:text-primary-fixed-dim transition-colors">02</span>
              </div>
              <h3 className="text-2xl font-headline font-extrabold mb-4 group-hover:text-primary transition-colors">Planning & Scheduling</h3>
              <p className="text-on-surface-variant leading-relaxed">Dynamic routing using predictive AI to bypass bottlenecks before they materialize in the physical world.</p>
              <div className="mt-8 pt-8 border-t border-outline-variant/10 flex items-center gap-2 text-tertiary font-bold text-sm">
                <span>PREDICTIVE SYNC</span>
                <span className="material-symbols-outlined text-sm">hub</span>
              </div>
            </div>
            {/* Step 3 */}
            <div className="group relative z-10 p-8 bg-surface-container-lowest transition-all duration-500 hover:bg-white hover:shadow-2xl hover:z-20 md:border-r border-outline-variant/10">
              <div className="mb-8 flex items-center justify-between">
                <div className="w-14 h-14 rounded-xl bg-secondary/5 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-3xl">radar</span>
                </div>
                <span className="text-6xl font-headline font-black text-surface-container-highest group-hover:text-primary-fixed-dim transition-colors">03</span>
              </div>
              <h3 className="text-2xl font-headline font-extrabold mb-4 group-hover:text-primary transition-colors">Execution & Monitoring</h3>
              <p className="text-on-surface-variant leading-relaxed">High-fidelity tracking through our kinetic prism dashboard, offering 24/7 granular visibility.</p>
              <div className="mt-8 pt-8 border-t border-outline-variant/10 flex items-center gap-2 text-secondary font-bold text-sm">
                <span>LIVE TELEMETRY</span>
                <span className="material-symbols-outlined text-sm">sensors</span>
              </div>
            </div>
            {/* Step 4 */}
            <div className="group relative z-10 p-8 bg-surface-container-low rounded-xl md:rounded-none md:rounded-r-xl transition-all duration-500 hover:bg-white hover:shadow-2xl hover:z-20">
              <div className="mb-8 flex items-center justify-between">
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">query_stats</span>
                </div>
                <span className="text-6xl font-headline font-black text-surface-container-highest group-hover:text-primary-fixed-dim transition-colors">04</span>
              </div>
              <h3 className="text-2xl font-headline font-extrabold mb-4 group-hover:text-primary transition-colors">Reporting & Communication</h3>
              <p className="text-on-surface-variant leading-relaxed">Comprehensive post-delivery analytics and performance audits to fuel continuous improvement.</p>
              <div className="mt-8 pt-8 border-t border-outline-variant/10 flex items-center gap-2 text-primary font-bold text-sm">
                <span>INSIGHT ENGINE</span>
                <span className="material-symbols-outlined text-sm">verified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Detail Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-7 relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl relative">
              <img className="w-full h-full object-cover" src={logisticsDashboard} alt="Logistics Dashboard" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
            </div>
            {/* Floating Overlay Card */}
            <div className="absolute -bottom-10 -right-10 hidden md:block w-72 prism-blur bg-white/70 p-6 rounded-xl shadow-xl border border-white/40">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-secondary rounded-full text-white">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>speed</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Transit Velocity</div>
                  <div className="text-xl font-headline font-black text-on-surface">+22% Efficiency</div>
                </div>
              </div>
              <div className="h-2 w-full bg-surface-container-highest rounded-full">
                <div className="h-full bg-secondary w-4/5 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <h2 className="text-4xl font-headline font-black mb-8 leading-tight">Beyond Transportation: <span className="text-primary">Intelligent Orchestration</span></h2>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
              At KVS, we don't just move assets; we synchronize opportunities. Our process is designed to handle the complexity of global logistics so you can focus on your core business.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="font-semibold">Zero-Latency Communication</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="font-semibold">Custom-Engineered Routines</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="font-semibold">Automated Risk Mitigation</span>
              </li>
            </ul>
            <Link to="/contact" className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-primary-container transition-all group inline-flex">
              Start Your Journey
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Dynamic Metrics (Bento Style) */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-primary rounded-xl p-10 text-on-primary flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-20">
                <span className="material-symbols-outlined text-[120px]">public</span>
              </div>
              <div>
                <h3 className="text-3xl font-headline font-extrabold mb-4">Global Network Expansion</h3>
                <p className="max-w-md text-primary-fixed leading-relaxed">Our process allows for rapid scaling across continents without sacrificing local-level detail and care.</p>
              </div>
              <div className="flex gap-12 mt-12">
                <div>
                  <div className="text-4xl font-headline font-black">45+</div>
                  <div className="text-xs uppercase font-bold tracking-widest text-primary-fixed opacity-70">Strategic Hubs</div>
                </div>
                <div>
                  <div className="text-4xl font-headline font-black">120+</div>
                  <div className="text-xs uppercase font-bold tracking-widest text-primary-fixed opacity-70">Partner Carriers</div>
                </div>
              </div>
            </div>
            <div className="bg-secondary-container rounded-xl p-10 flex flex-col justify-between">
              <div className="w-14 h-14 bg-on-secondary-container/10 rounded-full flex items-center justify-center text-on-secondary-container">
                <span className="material-symbols-outlined text-3xl">verified_user</span>
              </div>
              <div>
                <h3 className="text-2xl font-headline font-extrabold text-on-secondary-container mb-2">Secure Path</h3>
                <p className="text-on-secondary-container/80 text-sm">Every step of our process is fortified by advanced cybersecurity protocols and physical security oversight.</p>
              </div>
            </div>
            <div className="bg-surface-container-highest rounded-xl p-10 flex flex-col justify-center items-center text-center">
              <div className="text-6xl font-headline font-black text-primary mb-2">99%</div>
              <div className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">On-Time Performance</div>
            </div>
            <div className="md:col-span-2 bg-tertiary-container rounded-xl p-10 text-on-tertiary-container flex items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-headline font-extrabold mb-2">Data Transparency</h3>
                <p className="text-sm opacity-80">Full-stack visibility across all stages of the logistics lifecycle. No hidden fees, no blind spots.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
