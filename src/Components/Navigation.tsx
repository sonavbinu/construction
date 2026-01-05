import React, { useEffect, useState } from 'react';
import { CONTACT_INFO, NAV_ITEMS } from '../constants';
import { Menu, MessageCircle, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const throttled = () => requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', throttled);
    return () => window.removeEventListener('scroll', throttled);
  }, []);
  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="flex justify-evenly px-2">
        <div>
          <span
            className={`text-2xl font-bold tracking-tighter ${
              isScrolled ? 'text-indigo-900' : 'text-white'
            }`}
          >
            VAASTUKALA{' '}
            <span className="text-orange-500 font-sherif">BUILDERS</span>
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map(item => (
            <a
              href={item.href}
              key={item.label}
              className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                isScrolled ? 'text-slate-700' : 'text-white/90'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={CONTACT_INFO.whatsappurl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30"
          >
            Get a Quote
          </a>
        </div>
      </div>
      {/* //desktop Navigation */}

      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={isScrolled ? 'text-slate-900' : 'text-white'}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white fixed inset-0 z-50 flex flex-col pt-20 px-6">
          <button onClick={() => setIsMenuOpen(false)}>
            <X size={32} />
          </button>
          {NAV_ITEMS.map(item => (
            <a
              href={item.href}
              key={item.label}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-bold text-slate-900 py-4 border-b border-slate-100"
            >
              {item.label}
            </a>
          ))}
          <div>
            <a
              href={CONTACT_INFO.whatsappurl}
              className="flex items-center justify-center space-x-2 bg-green-500 text-white w-full py-4 rounded-xl font-bold text-lg"
            >
              <MessageCircle />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
