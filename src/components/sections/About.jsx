import React from 'react';
import { Card } from "../ui/card";

export function About() {
  return (
    <section className="py-24 px-8 lg:px-24 bg-white dark:bg-black relative transition-colors duration-300">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-3/4 right-0 w-1/2 h-1/2 bg-indigo-100 dark:bg-indigo-900/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Who We Are */}
          <div className="flex-1 space-y-6">
            <h2 className="text-sm font-bold text-blue-600 dark:text-blue-500 uppercase tracking-widest">Who We Are</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white leading-tight">
              A rapidly growing engineering & automation company.
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
              Probity Autosystem Pvt Ltd specializes in advanced industrial automation and fabrication solutions. We deliver high-quality, customized systems designed to meet each client's unique operational needs. Our expert team combines innovative design with practical engineering to enhance efficiency and productivity.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
              With a strong focus on quality, we ensure every project meets industry standards and exceeds expectations. Our skilled workforce and certified quality inspection processes guarantee precision and reliability in every output.
            </p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              {[
                "Strong design & engineering team",
                "Customized solutions as per client",
                "Focus on quality, precision & reliability",
                "Competitive and cost-effective",
                "On-time delivery with support",
                "Continuous innovation & upgrade"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Mission & Vision */}
          <div className="flex-1 space-y-8">
            <Card className="p-8 bg-neutral-50 dark:bg-white/5 border-neutral-200 dark:border-white/10 backdrop-blur-sm transition-colors duration-300">
              <h4 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-3">
                <span className="p-2 bg-blue-100 dark:bg-blue-500/20 rounded-lg text-blue-600 dark:text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                </span>
                Our Mission
              </h4>
              <p className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-2">Integrated automation that's safer, smarter, greener.</p>
              <p className="text-neutral-600 dark:text-neutral-400">
                We deliver state-of-the-art integrated automation and control solutions that optimally invest all available resources for an easier, safer, and environmentally friendly life.
              </p>
            </Card>

            <Card className="p-8 bg-neutral-50 dark:bg-white/5 border-neutral-200 dark:border-white/10 backdrop-blur-sm transition-colors duration-300">
              <h4 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 flex items-center gap-3">
                <span className="p-2 bg-purple-100 dark:bg-purple-500/20 rounded-lg text-purple-600 dark:text-purple-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M12 2v20"/><path d="m4.93 4.93 14.14 14.14"/><path d="m19.07 4.93-14.14 14.14"/></svg>
                </span>
                Our Vision
              </h4>
              <p className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-2">Top 10 automation solutions providers in the region.</p>
              <p className="text-neutral-600 dark:text-neutral-400">
                We deliver energy efficient industrial solutions and help the environment go green while offering a safe and healthy life to people.
              </p>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
