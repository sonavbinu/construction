import { Award, ChevronRight } from 'lucide-react';
import React from 'react';

const Hero = () => {
  return (
    <div>
      <section
        id="home"
        className="relative h-screen flex  items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Modern Construction"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-orange-500/20 border border-orange-500/30 text-orange-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-fade-in">
              <Award className="w-4 h-4" />
              <span>Celebrating 25+ Years of Excellance</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Crafting{' '}
              <span className="text-orange-500 font-serif italic">
                Your Legacy
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              Founded by Mr.Binu VT,Vaastukala Builders combines traditional
              Vaasthu principles with cutting-edge engineering to build homes
              that inspire.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-y-0 sm:space-x-4">
              <a
                href="#services"
                className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all flex items-center justify-center group"
              >
                Our Services
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform " />
              </a>
              <a
                href="#contact"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg  hover:ng-white/20 transition-all flex items-center justify-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
