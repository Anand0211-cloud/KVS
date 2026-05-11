import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-12">
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2 space-y-6">
            <Link to="/" className="inline-block">
              <img src={logo} alt="KVS Universal Solutions" className="h-14 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
            </Link>
            <p className="text-slate-500 max-w-sm font-inter antialiased text-sm">
              Providing kinetic sophistication in logistics and business support since 2009. We transform supply chains into competitive advantages.
            </p>
            <div className="text-xs font-bold text-slate-400 tracking-widest uppercase">
              CIN: U52292PB2026OPC067449
            </div>
          </div>
          <div>
            <h5 className="font-headline font-bold text-cyan-900 mb-6">Our Services</h5>
            <ul className="space-y-4">
              <li><Link className="text-slate-500 hover:text-cyan-600 transition-colors font-inter text-sm antialiased" to="/services">Transport & Logistics</Link></li>
              <li><Link className="text-slate-500 hover:text-cyan-600 transition-colors font-inter text-sm antialiased" to="/services">Dispatch Management</Link></li>
              <li><Link className="text-slate-500 hover:text-cyan-600 transition-colors font-inter text-sm antialiased" to="/services">Business Support</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-headline font-bold text-cyan-900 mb-6">Legal & Support</h5>
            <ul className="space-y-4">
              <li><Link className="text-slate-500 hover:text-cyan-600 transition-colors font-inter text-sm antialiased" to="/privacy">Privacy Policy</Link></li>
              <li><Link className="text-slate-500 hover:text-cyan-600 transition-colors font-inter text-sm antialiased" to="/terms">Terms of Service</Link></li>
              <li><Link className="text-slate-500 hover:text-cyan-600 transition-colors font-inter text-sm antialiased" to="/contact">Support Center</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 font-inter text-sm antialiased">
            © 2026 KVS Universal Solutions. Kinetic Sophistication in Logistics.
          </p>
          <div className="flex gap-6">
            <a className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined text-xl">share</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined text-xl">public</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
