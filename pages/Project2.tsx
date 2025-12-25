import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Project2: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black pt-24 px-6 sm:px-8 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <Link to="/portfolio" className="inline-flex items-center text-muted dark:text-gray-400 hover:text-primary dark:hover:text-white mb-8 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
        </Link>

        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-6">
          Project2
        </h1>
        
        {/* Main Image */}
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-zinc-800 mb-12">
          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" 
            alt="Rover Suspension" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4 text-primary dark:text-white">Project Overview</h2>
          <p className="text-lg text-muted dark:text-gray-400 leading-relaxed mb-8">
            Designed a 6-wheel rocker-bogie suspension system for an autonomous agricultural rover. 
            This project required navigating uneven terrain while maintaining a stable platform for onboard sensors.
          </p>
          
          <h3 className="text-xl font-medium mb-3 text-primary dark:text-white">Key Challenges</h3>
          <ul className="list-disc pl-5 space-y-2 text-muted dark:text-gray-400 mb-8">
            <li>Optimizing weight distribution for steep inclines.</li>
            <li>Selecting materials to withstand corrosive agricultural environments.</li>
            <li>Integrating motor mounts directly into the suspension arms.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project2;