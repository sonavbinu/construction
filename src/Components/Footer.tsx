import React from 'react';
import { NAV_ITEMS } from '../constants';

const Footer = () => {
  return (
    <div>
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-bold tracking-tighter mb-6 block">
                VAASTUKALA{' '}
                <span className="text-orange-500 font-serif">BUILDERS</span>
              </span>
              <p className="text-slate-400 max-w-sm mb-8">
                Premium construction and architectural firm with 25+ years of
                experience in creating homes that blend modern engineering with
                traditional wisdom.
              </p>
            </div>

            <div>
              <h5 className="font-bold mb-6">Quick Links</h5>
              <ul className="space-y-4 text-slate-400">
                {NAV_ITEMS.map(item => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="hover:text-orange-500 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-6">Our Expertise</h5>
              <ul className="space-y-4 text-slate-400">
                <li>Vaasthu Consulting</li>
                <li>Architectural Planning</li>
                <li>Interior Design</li>
                <li>Civil Construction</li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-slate-800 flex flex-col md:row items-center justify-between text-slate-500 text-sm">
            <p>
              © {new Date().getFullYear()} Vaastukala Builders. All rights
              reserved.
            </p>
            <p className="mt-4 md:mt-0">Founded & Managed by Mr. Binu VT</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
