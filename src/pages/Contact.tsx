import { Mail, MessageCircle, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import ContactForm from '../Components/ContactForm';

const Contact = () => {
  return (
    <div>
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row ">
            <div className="lg:w-2/5 bg-indigo-900 p-12 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
                <p className="text-indigo-200 mb-12">
                  {' '}
                  Ready to start your next project? Our team is here to help you
                  every step of the way.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-indigo-800 p-3 rounded-xl">
                      <Phone className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm text-indigo-300">Call Us</p>
                      <p className="text-xl font-semibold">
                        +91 {CONTACT_INFO.phone}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6 mb-8">
                    <div className="bg-indigo-800 p-3 rounded-xl">
                      <Mail className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm text-indigo-300">Email Us</p>
                      <p className="text-xl font-semibold">
                        {CONTACT_INFO.email}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="bg-indigo-800 p-3 rounded-xl">
                    <MessageCircle className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-indigo-300">WhatsApp</p>
                    <a
                      href={CONTACT_INFO.whatsappurl}
                      target="_blank"
                      rel="reopener noreferrer"
                      className="text-xl font-semibold hover:text-orange-500"
                    >
                      Click to Message
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-16 pt-8 border-t border-indigo-800">
                <p className="text-indigo-400 text-sm">Founded by</p>
                <p className="text-xl font-serif italic text-white">
                  {CONTACT_INFO.founder}
                </p>
              </div>
            </div>{' '}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
