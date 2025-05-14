
import React from 'react';
import Header from '@/components/Header';
import InfoBanner from '@/components/InfoBanner';
import PhraseSection from '@/components/PhraseSection';
import TextInput from '@/components/TextInput';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDF6E3]">
      <Header />
      
      <main className="flex-1 max-w-4xl mx-auto w-full">
        <div className="py-4">
          <InfoBanner />
          
          <div className="px-4 mb-6">
            <TextInput />
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold px-4 mb-3 text-ghana-black">
              Common Phrases in Twi
            </h2>
            <PhraseSection />
          </div>
          
          <div className="px-4">
            <div className="p-6 bg-ghana-gold/5 border border-ghana-gold/20 rounded-lg">
              <h2 className="text-xl font-semibold mb-3 text-ghana-black">
                About This Project
              </h2>
              <p className="text-gray-700 mb-4">
                Ma Pa Speaks is designed to help individuals with speech impairments communicate 
                effectively in Ghanaian languages. Part of the AT2030 program funded by UK Aid, 
                this project aims to bridge communication gaps through technology.
              </p>
              <div className="flex flex-wrap gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="People using technology"
                  className="rounded-md h-40 object-cover flex-1 min-w-[200px]"
                />
                <img 
                  src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                  alt="Communication through technology"
                  className="rounded-md h-40 object-cover flex-1 min-w-[200px]"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
