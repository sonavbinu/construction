import { CONTACT_INFO, SERVICES } from '../constants';

const ContactForm = () => {
  return (
    <div>
      <div className="lg:w-3/5 p-12">
        <h4 className="text-2xl font-bold text-slate-900 mb-8">
          Send us a Message
        </h4>
        <form className="space-y-6" onSubmit={e => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
                placeholder="Your Phone"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Service Interested In
            </label>
            <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none appearance-none">
              <option>Select a Service</option>
              {SERVICES.map(s => (
                <option key={s.id}>{s.title}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Message
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all outline-none"
              placeholder="Tell us about your project"
            ></textarea>
          </div>
          <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20">
            Request Consultation
          </button>
          <p className="text-center text-slate-400 text-sm mt-4">
            Or directly open{' '}
            <a
              href={CONTACT_INFO.whatsappurl}
              className="text-green-600 font-bold"
            >
              WhatsApp
            </a>{' '}
            for a faster response.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
