import React from 'react';
import { Card } from "../ui/card";

export function Infrastructure() {
  const shopFloor = [
    { title: "Assembly Unit", desc: "End-to-end assembly setup for precision build & seamless integration." },
    { title: "Fabrication Division", desc: "Advanced welding & cutting capabilities (MIG, TIG, Arc) for durable structures." },
    { title: "Tooling & Machining", desc: "Equipped with VMC, Lathe, Milling & precision tools." },
    { title: "Inspection Lab", desc: "Accurate measurement & validation ensuring zero-defect output." },
    { title: "Control Panel Assembly", desc: "In-house PLC panel design, wiring & programming." },
    { title: "Smart Storage", desc: "Organized inventory management ensuring zero downtime." },
  ];

  return (
    <section className="py-24 px-8 lg:px-24 bg-neutral-50 dark:bg-neutral-950 relative border-t border-neutral-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest mb-4">Infrastructure</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">Our Manufacturing Ecosystem</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl">
            Integrated Shop Floor Capabilities — built for precision, speed and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Engineering Facility */}
          <div className="space-y-8">
            <h4 className="text-2xl font-bold text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-white/10 pb-4">Our Engineering Facility</h4>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-lg bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-500 font-bold">01</div>
                <div>
                  <h5 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">Design & Simulation</h5>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">Advanced engineering design & simulation capabilities ensuring accuracy before execution.</p>
                  <span className="text-xs font-semibold text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-500/10 px-2 py-1 rounded">20+ Skilled Engineers</span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-lg bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-500 font-bold">02</div>
                <div>
                  <h5 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">Electrical, Control & IT Systems</h5>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">Integrated control systems, PLC programming & smart automation solutions.</p>
                  <span className="text-xs font-semibold text-indigo-700 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-500/10 px-2 py-1 rounded">20+ Specialists</span>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-lg bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-500 font-bold">03</div>
                <div>
                  <h5 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">Application Engineering</h5>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">On-ground implementation, testing & optimization for real-world performance.</p>
                  <span className="text-xs font-semibold text-purple-700 dark:text-purple-400 bg-purple-100 dark:bg-purple-500/10 px-2 py-1 rounded">5+ Engineers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Shop Floor */}
          <div>
            <h4 className="text-2xl font-bold text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-white/10 pb-4 mb-8">Shop Floor Capabilities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {shopFloor.map((item, index) => (
                <Card key={index} className="p-5 bg-white dark:bg-white/5 border-neutral-200 dark:border-white/10 hover:bg-neutral-50 dark:hover:bg-white/10 transition-colors">
                  <h5 className="text-neutral-900 dark:text-white font-bold mb-2">{item.title}</h5>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-500/20 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 transition-colors duration-300">
          <div>
            <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Workflow Advantage</h4>
            <p className="text-neutral-600 dark:text-neutral-300">Fabrication → Machining → Assembly → Quality Check → Dispatch</p>
          </div>
          <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
            Take a Tour
          </button>
        </div>
      </div>
    </section>
  );
}
