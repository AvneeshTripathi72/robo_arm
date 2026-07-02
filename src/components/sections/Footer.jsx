import React from 'react';

export function Footer() {
  const clients = [
    "Tata Motors", "Mahindra & Mahindra", "Bajaj Auto", 
    "Bosch India", "Britannia Industries", "Hindustan Unilever", "Schneider Electric"
  ];

  return (
    <footer className="bg-neutral-100 dark:bg-black pt-24 pb-12 px-8 lg:px-24 border-t border-neutral-200 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100 dark:bg-blue-900/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Trusted By Marquee (Simplified as flex wrap for now) */}
        <div className="mb-24 text-center">
          <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-8">Trusted by Industry Leaders across India</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {clients.map((client, idx) => (
              <span key={idx} className="text-xl font-bold text-neutral-900 dark:text-white whitespace-nowrap">{client}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-neutral-300 dark:border-white/10">
          
          <div className="lg:col-span-2">
            <h4 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">Let's engineer your next breakthrough.</h4>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-md mb-8">
              We focus on delivering solutions that maximize productivity and minimize operational costs. Tell us about your project — our engineers will design a custom automation solution tailored to your line.
            </p>
            <button className="px-8 py-4 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
              Start a Project
            </button>
          </div>

          <div>
            <h5 className="text-neutral-900 dark:text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Info</h5>
            <ul className="space-y-4 text-neutral-600 dark:text-neutral-400">
              <li className="flex flex-col">
                <span className="text-xs text-neutral-500 mb-1">Phone</span>
                <span>+91 8551966166</span>
                <span>+91 8149069020</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs text-neutral-500 mb-1">Email</span>
                <a href="mailto:sales@probityautosystem.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">sales@probityautosystem.com</a>
              </li>
              <li className="flex flex-col">
                <span className="text-xs text-neutral-500 mb-1">Website</span>
                <a href="http://www.probityautosystem.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">www.probityautosystem.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-neutral-900 dark:text-white font-bold mb-6 uppercase tracking-wider text-sm">Address</h5>
            <address className="text-neutral-600 dark:text-neutral-400 not-italic leading-relaxed">
              GAT No. 558, Shinde Vasti,<br />
              Nighoje, Tal. Khed,<br />
              Dist. Pune<br />
              410501<br />
              Maharashtra, India
            </address>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>© 2026 Probity Autosystem Pvt Ltd. All rights reserved.</p>
          <p>Engineering Everything · Pune, India</p>
        </div>

      </div>
    </footer>
  );
}
