import React from 'react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section with Prism Flow */}
        <div className="relative mb-24">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl"></div>
          <div className="absolute top-48 -left-24 w-72 h-72 bg-secondary-container/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">Contact Our Team</span>
            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-8">
              Let's Sync Your <span className="text-primary">Global Logistics</span>
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-12 max-w-xl">
              Experience kinetic sophistication in freight management. Our experts are ready to streamline your supply chain with precision and integrity.
            </p>
          </div>
        </div>
        {/* Bento Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form Section (Left-Center) */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 shadow-[0px_4px_20px_rgba(0,31,38,0.06)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
              Send a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-on-surface-variant px-1">Name</label>
                  <input className="w-full bg-surface-container-highest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary-fixed transition-all" placeholder="John Doe" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-on-surface-variant px-1">Email</label>
                  <input className="w-full bg-surface-container-highest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary-fixed transition-all" placeholder="john@company.com" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-on-surface-variant px-1">Phone</label>
                <input className="w-full bg-surface-container-highest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary-fixed transition-all" placeholder="+1 (555) 000-0000" type="tel" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-on-surface-variant px-1">Message</label>
                <textarea className="w-full bg-surface-container-highest border-none rounded-xl p-4 focus:ring-2 focus:ring-primary-fixed transition-all" placeholder="Tell us about your logistics needs..." rows="4"></textarea>
              </div>
              <button className="w-full bg-primary text-on-primary py-5 rounded-full font-bold text-lg hover:bg-primary-container transition-all duration-300 shadow-lg shadow-primary/20 flex items-center justify-center gap-2" type="submit">
                Initialize Protocol
                <span className="material-symbols-outlined">trending_flat</span>
              </button>
            </form>
          </div>
          {/* Info Cards Section (Right) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Global Details Card */}
            <div className="bg-surface-container-low rounded-[2rem] p-10 space-y-8">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-6">Contact Matrix</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-primary">mail</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-on-surface-variant">Email</p>
                      <a href="mailto:kvs.opc1@gmail.com?subject=Inquiry%20regarding%20KVS%20Services&body=Hello%20KVS%20Team,%0A%0AI%20would%20like%20to%20inquire%20about%20your%20services..." className="text-lg font-semibold text-on-surface hover:text-primary transition-colors">kvs.opc1@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-primary">call</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-on-surface-variant">Phone</p>
                      <a href="tel:+919877413558" className="text-lg font-semibold text-on-surface hover:text-primary transition-colors">+91 98774-13558</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-primary">verified</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-on-surface-variant">CIN</p>
                      <p className="text-lg font-semibold text-on-surface">U52292PB2026OPC067449</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-8 border-t border-outline-variant/30">
                <h3 className="text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-4">Immediate Actions</h3>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:+919877413558" className="flex-1 min-w-[160px] bg-primary text-on-primary py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all">
                    <span className="material-symbols-outlined text-sm">phone_in_talk</span>
                    Call Now
                  </a>
                  <a href="https://wa.me/919877413558?text=Hello%20KVS%20Team,%20I%20am%20interested%20in%20your%20logistics%20services." target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[160px] bg-secondary text-on-secondary py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
            {/* Visual Accent Card */}
            <div className="relative h-64 rounded-[2rem] overflow-hidden group">
              <img className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_bpjdfon99r41OtX1spL9a4aPuCJAL8ol16heY4thVMky1N6DcW8nibyjBhN8GsCsK2sCYux_Dx1yjiIssDmm3gZABMEB7ovE0XmjzWmKjdC1GMA-TimgK8P8CZWKf6yBszMweuP1OIxTgz9mvqQMftTJImqmCjFd6K9uP6xAIzxezniF71GgyPryWqfrbRUuVAC9koKTh4VAzLqp9gS4V30Im4Xwechx4wAbxog_IZWwEZU07Fx3RPJVDYEqWd50Zo4yntoFTg" alt="Global Reach" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                <div>
                  <p className="text-white font-bold text-2xl">Global Reach</p>
                  <p className="text-white/80 text-sm">Real-time tracking available across 180+ countries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Kinetic Prism Decorative Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-container-low p-8 rounded-3xl group hover:bg-surface-container transition-all">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
              <span className="material-symbols-outlined">schedule</span>
            </div>
            <h4 className="text-xl font-bold mb-2">24/7 Support</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">Our kinetic response team is active across all time zones, ensuring your cargo never sleeps.</p>
          </div>
          <div className="bg-surface-container-low p-8 rounded-3xl group hover:bg-surface-container transition-all">
            <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mb-6 text-secondary">
              <span className="material-symbols-outlined">public</span>
            </div>
            <h4 className="text-xl font-bold mb-2">Carrier Portal</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">Direct digital interface for our partner network to manage loads with absolute transparency.</p>
          </div>
          <div className="bg-surface-container-low p-8 rounded-3xl group hover:bg-surface-container transition-all">
            <div className="w-10 h-10 bg-tertiary/10 rounded-lg flex items-center justify-center mb-6 text-tertiary">
              <span className="material-symbols-outlined">shield</span>
            </div>
            <h4 className="text-xl font-bold mb-2">Secure Transit</h4>
            <p className="text-on-surface-variant text-sm leading-relaxed">Multi-layered security protocols for high-value logistics and sensitive tech freight.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
