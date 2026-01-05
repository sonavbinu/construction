import React from 'react';
import { SERVICES } from '../constants';

const Services = () => {
  return (
    <div>
      <section
        id="services"
        className="py-24 bg-indigo-950 text-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-orange-500 font-bold tracking-wider uppercase text-sm mb-4">
              Our Services
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Building Solutions
            </h3>

            <p className="text-slate-400 text-lg">
              {' '}
              From the initial blueprint to the final interior touch, we provide
              a full spectrum of construction services tailored to your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map(service => (
              <div
                key={service.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group hover:-translate-y-2"
              >
                <div className="text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
