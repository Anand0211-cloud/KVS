import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/process' },
    { name: 'Contact', path: '/contact' },
  ];

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isMenuOpen ? 'bg-white shadow-lg' : 'bg-white/80 backdrop-blur-xl shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="KVS Universal Solutions" className="h-10 md:h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
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

        {/* Desktop/Tablet CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <a 
            href="https://wa.me/919877413558?text=Hello%20KVS%20Team,%20I%20would%20like%20to%20request%20a%20quote%20for%20your%20logistics%20services." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-bold active:scale-95 transition-transform hover:opacity-80 text-sm"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-cyan-700 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 top-20 bg-white z-40 transition-transform duration-500 ease-in-out md:hidden overflow-y-auto ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ height: 'calc(100vh - 5rem)' }}
      >
        <div className="flex flex-col p-8 space-y-8 h-full bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-3xl font-headline font-bold transition-all duration-300 ${
                location.pathname === link.path
                  ? 'text-cyan-700'
                  : 'text-slate-600'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-8 border-t border-slate-100 mt-auto">
            <p className="text-slate-400 text-sm mb-6 font-inter">Ready to optimize your supply chain?</p>
            <a 
              href="https://wa.me/919877413558?text=Hello%20KVS%20Team,%20I%20would%20like%20to%20request%20a%20quote%20for%20your%20logistics%20services." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-primary text-on-primary px-8 py-4 rounded-full font-bold active:scale-95 transition-transform hover:opacity-80 w-full text-center text-xl shadow-lg shadow-primary/20"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
