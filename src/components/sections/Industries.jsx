import React from 'react';
import { Card } from "../ui/card";

export function Industries() {
  const industries = [
    { name: "Automotive (2W & 4W)", desc: "End-to-end automation solutions for automotive manufacturing, including assembly lines, material handling, welding, and inspection systems." },
    { name: "FMCG & Packaging", desc: "High-speed automation systems for packaging, sorting, and product handling, ensuring faster throughput and consistent quality." },
    { name: "Electronics & White Goods", desc: "Precision-driven automation for electronics and appliance manufacturing, including assembly, testing, and inspection." },
    { name: "Heavy Industry", desc: "Robust and durable automation solutions built to handle heavy loads and harsh industrial environments." },
    { name: "Medical & Healthcare", desc: "Clean, accurate, and quality-focused automation systems for medical devices and inspection processes requiring high precision." },
    { name: "General Manufacturing", desc: "Customized special purpose machines (SPM) and turnkey automation solutions tailored to diverse industrial applications." },
  ];

  return (
    <section className="py-24 px-8 lg:px-24 bg-white dark:bg-black relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest mb-4">Industries</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">Industries We Empower</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg">
              End-to-end automation solutions across the most demanding industrial sectors.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, index) => (
            <Card key={index} className="p-8 bg-neutral-50 dark:bg-neutral-900/50 border-neutral-200 dark:border-white/5 hover:border-blue-500/50 transition-colors group cursor-pointer">
              <h4 className="text-xl font-bold text-neutral-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{ind.name}</h4>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                {ind.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
