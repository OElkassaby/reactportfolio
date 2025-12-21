import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in transition-colors duration-300">
      {/* Hero Section */}
      <section className="pt-32 pb-40 px-6 sm:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-primary dark:text-white mb-8 leading-[1.1]">
            Engineering with <br className="hidden md:block" />
            <span className="text-muted dark:text-gray-500">precision and purpose.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted dark:text-gray-400 font-light leading-relaxed max-w-2xl mb-12">
            I’m {RESUME_DATA.name}, a Mechanical Engineer specializing in product design, thermal analysis, and bringing complex hardware from concept to reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <Link
              to="/portfolio"
              className="group inline-flex items-center text-lg font-medium text-primary dark:text-white hover:opacity-70 transition-opacity"
            >
              View Portfolio 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <Link
              to="/resume"
              className="group inline-flex items-center text-lg font-medium text-primary dark:text-white hover:opacity-70 transition-opacity"
            >
              View Resume 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Minimalist Grid Section */}
      <section className="py-24 bg-secondary dark:bg-zinc-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-sm font-semibold text-primary dark:text-white uppercase tracking-wider mb-4">Focus</h3>
              <p className="text-muted dark:text-gray-400 leading-relaxed">
                Design for Manufacturing (DFM) and Assembly (DFA). Ensuring every part is not just functional, but producible at scale.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-primary dark:text-white uppercase tracking-wider mb-4">Tools</h3>
              <p className="text-muted dark:text-gray-400 leading-relaxed">
                Advanced proficiency in SolidWorks, Ansys, and rapid prototyping technologies to iterate faster and validate designs sooner.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-primary dark:text-white uppercase tracking-wider mb-4">Philosophy</h3>
              <p className="text-muted dark:text-gray-400 leading-relaxed">
                Form follows function. I believe the most elegant engineering solutions are often the simplest ones that work reliably.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Simple */}
      <section className="py-32 px-6 sm:px-8 max-w-7xl mx-auto text-center">
         <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-primary dark:text-white">Ready to collaborate?</h2>
         <Link to="/resume" className="inline-block px-8 py-4 bg-primary dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-black dark:hover:bg-gray-200 transition-colors transform hover:scale-105 duration-200">
            View Resume & Contact
         </Link>
      </section>
    </div>
  );
};

export default Home;