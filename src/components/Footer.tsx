
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="p-4 border-t border-ghana-gold/30 mt-4 bg-gradient-to-r from-white to-ghana-gold/5">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-3 md:mb-0 text-center md:text-left">
          <h3 className="text-sm font-semibold">
            <span className="text-ghana-green">Ma Pa</span> 
            <span className="text-ghana-black"> Speaks</span>
          </h3>
          <p className="text-xs text-muted-foreground">
            Bridging communication gaps through technology
          </p>
        </div>
        
        <div className="flex items-center space-x-4 text-sm">
          <Link to="/about" className="text-ghana-green hover:text-ghana-green/80">About</Link>
          <Link to="/contact" className="text-ghana-green hover:text-ghana-green/80">Contact</Link>
          <a 
            href="https://at2030.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-ghana-green hover:text-ghana-green/80"
          >
            AT2030 Program
          </a>
        </div>
      </div>
      
      <div className="mt-4 text-center text-xs text-muted-foreground">
        <p>Part of the AT2030 program funded by UK Aid</p>
        <p>© 2025 Ma Pa Speaks - Tɛkyerɛma Pa - Ghanaian TTS Solution</p>
      </div>
    </footer>
  );
};

export default Footer;
