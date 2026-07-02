import React from 'react';
import { SplineScene } from "../ui/splite";
import { CardSpotlight } from "../ui/card-spotlight";
import { Spotlight } from "../ui/spotlight";
import { Sun, Moon } from "lucide-react";

export const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-white/80 dark:bg-black/50 backdrop-blur-md border-b border-neutral-200 dark:border-white/10 transition-colors duration-300">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-4 text-neutral-900 dark:text-white font-bold text-xl">
          <span className="text-blue-600 dark:text-blue-500">PROBITY</span>
          <div className="w-[1px] h-6 bg-neutral-300 dark:bg-white/20"></div>
          <span className="text-sm font-medium tracking-wide hidden sm:block">Autosystem Pvt Ltd</span>
        </div>
        <ul className="hidden lg:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
          <li className="hover:text-neutral-900 dark:hover:text-white cursor-pointer transition-colors">About</li>
          <li className="hover:text-neutral-900 dark:hover:text-white cursor-pointer transition-colors">Vision</li>
          <li className="hover:text-neutral-900 dark:hover:text-white cursor-pointer transition-colors">Solutions</li>
          <li className="hover:text-neutral-900 dark:hover:text-white cursor-pointer transition-colors">Industries</li>
          <li className="hover:text-neutral-900 dark:hover:text-white cursor-pointer transition-colors">Contact</li>
        </ul>
      </div>
      
      <div className="flex items-center gap-4 text-neutral-900 dark:text-white">
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors"
          aria-label="Toggle dark mode"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button className="hidden md:flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-medium transition-colors">
          Get Quote
        </button>
      </div>
    </nav>
  );
};

export function Hero() {
  return (
    <CardSpotlight className="w-full min-h-screen bg-neutral-50 dark:bg-black/[0.96] relative overflow-hidden border-none rounded-none pt-20 transition-colors duration-300">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 hidden dark:block"
        fill="white"
      />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 block dark:hidden"
        fill="black"
      />
      
      <div className="flex flex-col lg:flex-row h-full min-h-[calc(100vh-5rem)]">
        {/* Left content */}
        <div className="flex-1 p-8 lg:p-24 relative z-10 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-white/5 border border-blue-100 dark:border-white/10 w-fit mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse"></span>
            <span className="text-xs font-medium text-neutral-600 dark:text-neutral-300 tracking-wider uppercase">Engineering Everything</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 dark:from-neutral-50 dark:to-neutral-500 leading-tight">
            We design & manufacture special purpose advance machines
          </h1>
          
          <p className="mt-8 text-neutral-600 dark:text-neutral-400 max-w-xl text-lg leading-relaxed">
            Assembly line automation • Welding line automation • Special purpose machine • Complete line traceability system • Gluing & spraying applications
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
              Explore Solutions <span>→</span>
            </button>
            <button className="px-8 py-4 rounded-full bg-white border border-neutral-200 text-neutral-900 dark:bg-white/5 dark:text-white font-semibold hover:bg-neutral-50 dark:hover:bg-white/10 transition-colors dark:border-white/10 flex items-center gap-2">
              Contact Us <span>⧉</span>
            </button>
          </div>

          <div className="flex gap-8 mt-16 pt-8 border-t border-neutral-200 dark:border-white/10">
            <div>
              <div className="text-3xl font-bold text-neutral-900 dark:text-white">8+</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">Years of Innovation</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neutral-900 dark:text-white">50+</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">Automation Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neutral-900 dark:text-white">100%</div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">Custom Built</div>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative min-h-[500px] lg:min-h-auto">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full absolute inset-0"
          />
        </div>
      </div>
    </CardSpotlight>
  )
}
