import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="KVS Universal Solutions" className="h-12 w-auto" />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-headline tracking-tight font-bold transition-all duration-300 ${
                location.pathname === link.path
                  ? 'text-cyan-700 border-b-2 border-cyan-700 pb-1'
                  : 'text-slate-600 hover:text-cyan-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <a href="https://wa.me/919877413558?text=Hello%20KVS%20Team,%20I%20would%20like%20to%20request%20a%20quote%20for%20your%20logistics%20services." target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-bold active:scale-95 transition-transform hover:opacity-80">
            Get Quote
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
