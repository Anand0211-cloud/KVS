import React from 'react';
import { Link } from 'react-router-dom';
import highTechWarehouse from '../assets/high_tech_warehouse.png';
import globalRouting from '../assets/global_routing.png';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section: The Kinetic Prism */}
      <section className="relative min-h-[716px] flex items-center overflow-hidden py-24">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary-fixed/30 text-on-primary-fixed-variant px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide">
              <span className="material-symbols-outlined text-sm">verified</span>
              ESTABLISHED LOGISTICS EXCELLENCE
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface tracking-tighter leading-[1.1]">
              Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">Global Velocity</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed max-w-xl">
              KVS Universal Solutions is a premium professional service provider specialized in high-performance logistics support. We don't just move freight; we orchestrate complex global supply chains with kinetic precision.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-3 bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/10">
                <div className="w-10 h-10 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed-variant">
                  <span className="material-symbols-outlined">bolt</span>
                </div>
                <span className="font-bold">Reliable & Efficient</span>
              </div>
              <div className="flex items-center gap-3 bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/10">
                <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed-variant">
                  <span className="material-symbols-outlined">target</span>
                </div>
                <span className="font-bold">Focus on Accuracy</span>
              </div>
              <div className="flex items-center gap-3 bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-outline-variant/10">
                <div className="w-10 h-10 rounded-full bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant">
                  <span className="material-symbols-outlined">chat</span>
                </div>
                <span className="font-bold">Professional Communication</span>
              </div>
            </div>
          </div>
          {/* Prism Layout Visual */}
          <div className="relative">
            <div className="aspect-square relative rounded-[2.5rem] overflow-hidden shadow-2xl z-20 transform -rotate-2">
              <img className="w-full h-full object-cover" src={highTechWarehouse} alt="Modern high-tech logistics" />
            </div>
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-secondary rounded-[2rem] z-10 transform rotate-12 flex items-end p-8">
              <span className="text-6xl font-black text-on-secondary opacity-20">KVS</span>
            </div>
            <div className="absolute -bottom-8 -left-8 prism-blur bg-white/40 border border-white/20 p-8 rounded-[2rem] z-30 shadow-xl max-w-xs">
              <span className="text-primary font-black text-4xl block mb-2 tracking-tighter">99.9%</span>
              <p className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">Accuracy Delivery Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision: Tonal Layering */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="group bg-surface-container-lowest p-12 rounded-[2.5rem] transition-all duration-500 hover:translate-y-[-8px]">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-white text-3xl">rocket_launch</span>
              </div>
              <h2 className="text-3xl font-headline font-extrabold mb-6 text-on-surface">Our Mission</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                To empower global commerce through innovative, technology-driven logistics solutions. We bridge the gap between complex supply chain demands and seamless execution, ensuring every client experiences the highest standard of professional service and reliability.
              </p>
            </div>
            {/* Vision Card */}
            <div className="group bg-surface-container-lowest p-12 rounded-[2.5rem] transition-all duration-500 hover:translate-y-[-8px]">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-secondary/20">
                <span className="material-symbols-outlined text-on-secondary text-3xl">visibility</span>
              </div>
              <h2 className="text-3xl font-headline font-extrabold mb-6 text-on-surface">Our Vision</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                To be the global benchmark for kinetic logistics sophistication. We envision a future where intelligence and speed converge to create a frictionless global marketplace, anchored by KVS Universal Solutions' commitment to accuracy and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid: Excellence in Action */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight mb-6">Sophistication in <span className="text-primary">Every Step</span></h2>
            <p className="text-lg text-on-surface-variant">We bypass traditional rigid structures for a fluid, results-oriented approach that prioritizes your success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">
            {/* Large Feature */}
            <div className="md:col-span-8 md:row-span-2 bg-primary overflow-hidden rounded-[2.5rem] relative group">
              <img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src={globalRouting} alt="Global Routing" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10">
                <h3 className="text-3xl font-bold text-white mb-4">Precision Global Routing</h3>
                <p className="text-primary-fixed max-w-md">Our proprietary routing algorithms ensure your cargo takes the path of least resistance, maximum speed, and optimal safety.</p>
              </div>
            </div>
            {/* Small Feature 1 */}
            <div className="md:col-span-4 bg-secondary-container rounded-[2.5rem] p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-on-secondary-container text-4xl">shield_with_heart</span>
                <span className="bg-on-secondary-container/10 text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Safety First</span>
              </div>
              <h3 className="text-xl font-extrabold text-on-secondary-container">Guaranteed Integrity</h3>
            </div>
            {/* Small Feature 2 */}
            <div className="md:col-span-4 bg-tertiary-container rounded-[2.5rem] p-8 flex flex-col justify-between text-on-tertiary-container">
              <div className="flex justify-between items-start">
                <span className="material-symbols-outlined text-white text-4xl">timely</span>
                <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Real-time</span>
              </div>
              <h3 className="text-xl font-extrabold">Instant Telemetry</h3>
            </div>
            {/* Wide Feature */}
            <div className="md:col-span-12 md:row-span-1 bg-surface-container-highest rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-extrabold mb-4">The KVS Standard of Support</h3>
                <p className="text-on-surface-variant">Our dedicated account managers provide 24/7 proactive communication, ensuring you're never in the dark about your logistical operations.</p>
              </div>
              <div className="md:w-1/2 flex gap-4">
                <div className="h-16 w-1/3 bg-primary/10 rounded-2xl animate-pulse"></div>
                <div className="h-16 w-2/3 bg-secondary/10 rounded-2xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-primary to-primary-container rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-white mb-8 tracking-tight">Ready to accelerate your supply chain?</h2>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <a href="https://wa.me/918699417062?text=Hello%20KVS%20Team,%20I%20would%20like%20to%20request%20a%20quote%20for%20your%20logistics%20services." target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:brightness-110 active:scale-95 transition-all shadow-xl">
                  Partner With Us
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
