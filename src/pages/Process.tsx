import React from 'react';

const Process = () => {
  return (
    <div>
      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-indigo-900 font-bold tracking-wider uppercase text-sm mb-4">
              How We Work
            </h2>
            <h3 className="text-4xl font-bold text-slate-900">
              {' '}
              Your Journey to a Dream Home
            </h3>
          </div>

          <div>
            <div></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {[
                {
                  step: '01',
                  title: 'Consultation',
                  desc: 'Discussing your vision and Vaasthu requirements.',
                },
                {
                  step: '02',
                  title: 'Planning',
                  desc: 'Creating blueprints and getting K-Smart approvals.',
                },
                {
                  step: '03',
                  title: 'Construction',
                  desc: 'Building with precision and high-grade materials.',
                },
                {
                  step: '04',
                  title: 'Handover',
                  desc: 'Final finishing and welcoming you to your new home.',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white text-center">
                  <div className="w-16 h-16 bg-indigo-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl shadow-indigo-900/20 ring-8 ring-white">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
