
import React from 'react';
import { AlertCircle } from 'lucide-react';

const InfoBanner: React.FC = () => {
  return (
    <div className="bg-ghana-gold/10 border-l-4 border-ghana-gold p-4 rounded-r-md flex items-start space-x-3 mb-4 mx-4">
      <AlertCircle className="text-ghana-gold flex-shrink-0" size={20} />
      <div>
        <h3 className="font-medium text-ghana-black">About This Project</h3>
        <p className="text-sm text-muted-foreground">
          Ma Pa Speaks is part of the AT2030 program, creating accessible 
          text-to-speech technology for Ghanaian languages. This tool helps individuals 
          with speech impairments communicate effectively in their native language.
        </p>
      </div>
    </div>
  );
};

export default InfoBanner;
