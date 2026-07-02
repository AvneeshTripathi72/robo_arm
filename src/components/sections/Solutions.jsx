import React from 'react';
import { Card } from "../ui/card";

export function Solutions() {
  const solutions = [
    { title: "Special Purpose Machines (SPM)", desc: "Custom-built machines for unique industrial needs — Assembly, Leak Testing, Forming, Punching & more." },
    { title: "Turnkey Automation & EPIC", desc: "Complete end-to-end automation projects tailored to your unique specifications." },
    { title: "Material Handling & Gantry", desc: "Smart robotic handling, gantry systems & palletizing solutions to optimize production flow." },
    { title: "Industrial Conveyors", desc: "Free flow, flat belt, mesh, roller, plastic modular, backlit, telescopic, and magnetic conveyors." },
    { title: "Assembly Line Automation", desc: "Custom-designed assembly line solutions built for speed, accuracy & scalability." },
    { title: "Robotic Integration", desc: "End-to-end automation for machine loading/unloading with Delta, SCARA, 4-axis, & 6-axis robots." },
    { title: "Machine Vision Systems", desc: "Smart vision for critical applications: Fault detection, dimension measurement and defect inspection." },
    { title: "Traceability & Data Systems", desc: "Complete production traceability with real-time data tracking & quality control integration." },
  ];

  return (
    <section className="py-24 px-8 lg:px-24 bg-neutral-50 dark:bg-neutral-950 relative border-t border-neutral-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest mb-4">Our Core Solutions</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">Custom-engineered systems for the highest throughput</h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg">
            We deliver customized automation solutions tailored to each client's production requirements, ensuring speed and accuracy across production lines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol, index) => (
            <Card key={index} className="p-6 bg-white dark:bg-white/[0.02] border-neutral-200 dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-white/[0.05] transition-colors group cursor-pointer h-full flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-xl font-bold">{index + 1}</span>
              </div>
              <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">{sol.title}</h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed flex-1">
                {sol.desc}
              </p>
              <div className="mt-6 flex items-center text-blue-600 dark:text-blue-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <span className="ml-2">→</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
