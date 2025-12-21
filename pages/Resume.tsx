import React from 'react';
import { Download, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Resume: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pb-20 print:pb-0 print:bg-white transition-colors duration-300 animate-fade-in">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 pt-12 print:pt-0 print:px-0 print:max-w-none">
        
        {/* Actions */}
        <div className="flex justify-end mb-12 print:hidden">
          <button
            onClick={handlePrint}
            className="flex items-center text-sm font-medium text-muted dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors"
          >
            <Download className="mr-2 h-4 w-4" /> Save as PDF
          </button>
        </div>

        {/* Resume Content */}
        <div>
          {/* Header */}
          <header className="mb-16 print:mb-8">
            <h1 className="text-4xl font-semibold tracking-tight text-primary dark:text-white print:text-black mb-2">{RESUME_DATA.name}</h1>
            <p className="text-xl text-muted dark:text-gray-400 print:text-gray-600 font-light mb-6">{RESUME_DATA.title}</p>
            
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted dark:text-gray-500 print:text-gray-600">
              <span>{RESUME_DATA.contact.location}</span>
              <a href={`mailto:${RESUME_DATA.contact.email}`} className="hover:text-primary dark:hover:text-white print:text-black transition-colors">{RESUME_DATA.contact.email}</a>
              <span>{RESUME_DATA.contact.phone}</span>
              <a href={`https://${RESUME_DATA.contact.linkedin}`} className="hover:text-primary dark:hover:text-white print:text-black transition-colors">LinkedIn</a>
            </div>
          </header>

          <div className="space-y-16 print:space-y-8">
            {/* Summary */}
            <section>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted dark:text-gray-500 print:text-gray-500 mb-6 print:mb-3">About</h2>
              <p className="text-primary dark:text-gray-200 print:text-black leading-relaxed max-w-2xl">
                {RESUME_DATA.summary}
              </p>
            </section>

            {/* Experience */}
            <section>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted dark:text-gray-500 print:text-gray-500 mb-8 print:mb-4">Experience</h2>
              <div className="space-y-12 print:space-y-6">
                {RESUME_DATA.experience.map((job) => (
                  <div key={job.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 print:block">
                    <div className="text-sm text-muted dark:text-gray-500 print:text-gray-500 md:col-span-1 pt-1 print:mb-1">
                      {job.period}
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="font-medium text-lg text-primary dark:text-white print:text-black">{job.role}</h3>
                      <div className="text-muted dark:text-gray-400 print:text-gray-600 mb-4 print:mb-2">{job.company}</div>
                      <ul className="space-y-2">
                        {job.description.map((item, index) => (
                          <li key={index} className="text-base text-gray-600 dark:text-gray-300 print:text-gray-800 leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section className="print:break-inside-avoid">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted dark:text-gray-500 print:text-gray-500 mb-8 print:mb-4">Technical Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 print:grid-cols-3 print:gap-4">
                {RESUME_DATA.skills.map((skillGroup, idx) => (
                  <div key={idx}>
                    <h4 className="font-medium text-primary dark:text-white print:text-black mb-3 print:mb-1">{skillGroup.category}</h4>
                    <ul className="space-y-1 text-gray-600 dark:text-gray-400 print:text-gray-800">
                      {skillGroup.items.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="print:break-inside-avoid">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted dark:text-gray-500 print:text-gray-500 mb-8 print:mb-4">Education</h2>
              <div className="space-y-6">
                {RESUME_DATA.education.map((edu) => (
                  <div key={edu.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 print:block print:mb-4">
                     <div className="text-sm text-muted dark:text-gray-500 print:text-gray-500 md:col-span-1 print:mb-1">{edu.year}</div>
                     <div className="md:col-span-3">
                        <h3 className="font-medium text-primary dark:text-white print:text-black">{edu.institution}</h3>
                        <p className="text-gray-600 dark:text-gray-400 print:text-gray-800">{edu.degree}</p>
                     </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;