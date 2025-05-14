
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2 text-ghana-green">About Ma Pa Speaks</h1>
          <div className="h-1 w-24 bg-ghana-gold mb-6"></div>
        </div>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
            <p className="text-gray-700">
              Ma Pa Speaks (Tɛkyerɛma Pa) is dedicated to bridging the communication gap for 
              individuals with speech impairments in Ghana through innovative text-to-speech 
              technology tailored for Ghanaian languages.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">The AT2030 Program</h2>
            <p className="text-gray-700 mb-3">
              Our project is part of AT2030, a program funded by UK Aid and led by the Global 
              Disability Innovation Hub. AT2030 aims to test "what works" in increasing access 
              to life-changing Assistive Technology (AT) for all.
            </p>
            <p className="text-gray-700">
              Through this initiative, we're working to make technology more accessible and 
              inclusive, focusing specifically on speech technologies for Ghanaian languages.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-3">Our Approach</h2>
            <p className="text-gray-700 mb-3">
              We believe that accessible communication is a fundamental right. Our approach combines:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Research into Ghanaian language speech patterns</li>
              <li>Development of accessible text-to-speech technology</li>
              <li>Collaboration with local communities and speech experts</li>
              <li>User-centered design for intuitive, culturally appropriate interfaces</li>
            </ul>
          </section>
          
          <div className="p-6 bg-ghana-gold/5 border border-ghana-gold/20 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">Get Involved</h2>
            <p className="text-gray-700 mb-4">
              We welcome contributions, feedback, and partnerships to make Ma Pa Speaks even better.
              Whether you're a developer, linguist, healthcare professional, or community member, 
              there are ways to help.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-5 py-2.5 bg-ghana-green text-white rounded-md hover:bg-ghana-green/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
