import React from 'react';
import { CONTACT_INFO } from '../constants';
import { MessageCircle } from 'lucide-react';

const WhatsApp = () => {
  return (
    <div className="bg-red-500">
      <a
        href={CONTACT_INFO.whatsappurl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on Whatsapp"
        className="flex fixed bottom-6 right-6 z-50
        bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-transform duration-200 hover:scale-110 active:scale-95 flex items-center justify-center "
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  );
};

export default WhatsApp;
