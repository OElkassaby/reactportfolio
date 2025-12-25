import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { RESUME_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-100 dark:border-white/10 py-16 print:hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-muted dark:text-gray-500">
          &copy; {new Date().getFullYear()} Osama Elkassaby. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a 
            href={`https://${RESUME_DATA.contact.linkedin}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted dark:text-gray-500 hover:text-primary dark:hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          {/* <a 
            href={`https://${RESUME_DATA.contact.github}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted dark:text-gray-500 hover:text-primary dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a> */}
          <a 
            href={`mailto:${RESUME_DATA.contact.email}`} 
            className="text-muted dark:text-gray-500 hover:text-primary dark:hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;