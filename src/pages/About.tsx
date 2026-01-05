import { ArrowRight, ShieldCheck, Users } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const About = () => {
  return (
    <div>
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div>
              <img
                src="/interior.webp"
                alt="Architectural Planning"
                className="w-full h-[500px] object-cover border-slate-500 rounded-2xl"
              />
            </div>
            <div>
              <h2 className="text-indigo-900 font-bold tracking-wider uppercase text-sm mb-4">
                Our Story
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Building trust since
                <span className="text-orange-500">1999</span>
              </h3>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                {' '}
                Vaastukala Builders was established with a singular vision: to
                create living spaces that harmonize with nature and the cosmic
                energy of Vaasthu. Founded by <strong>Mr. Binu VT</strong>, our
                journey over the last two and a half decades has been defined by
                uncompromising quality and architectural innovation.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                {' '}
                Whether it's a modest dream home or a sprawling commercial
                complex, we bring the same level of passion, precision, and
                personal attention to every brick we lay.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                    <ShieldCheck className="w-6 h-6" />{' '}
                  </div>{' '}
                  <div>
                    <h4 className="font-bold text-slate-900">
                      Reliable Quality
                    </h4>
                    <p className="text-sm text-slate-500">
                      Premium materials and skilled labor.
                    </p>
                  </div>
                </div>
                <div></div>
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Expert Team</h4>
                    <p className="text-sm text-slate-500">
                      Engineers and Vaasthu consultants.
                    </p>
                  </div>
                </div>
              </div>
              <a
                href={CONTACT_INFO.whatsappurl}
                className="inline-flex items-center text-orange-600 font-bold text-;g hover:underline"
              >
                Talk to Mr.Binu VT <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
