import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black animate-fade-in transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-32">
        <div className="mb-24 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary dark:text-white mb-6">Selected Works</h1>
          <p className="text-xl text-muted dark:text-gray-400 font-light leading-relaxed">
            A showcase of mechanical engineering projects ranging from autonomous systems to consumer electronics.
          </p>
        </div>

        <div className="space-y-24">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className="group grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Alternating layout for visual interest */}
              <div className={`aspect-[4/3] overflow-hidden bg-secondary dark:bg-zinc-900 rounded-sm ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>
              
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-xs font-medium uppercase tracking-wider text-muted dark:text-gray-400 border border-gray-200 dark:border-zinc-800 px-2 py-1 rounded-sm">
                            {tag}
                        </span>
                    ))}
                </div>
                <h2 className="text-3xl font-medium text-primary dark:text-white mb-4">{project.title}</h2>
                <p className="text-lg text-muted dark:text-gray-400 font-light leading-relaxed mb-8">
                  {project.description}
                </p>
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-sm font-medium text-primary dark:text-white hover:opacity-60 transition-opacity"
                >
                  View Case Study <ArrowUpRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;