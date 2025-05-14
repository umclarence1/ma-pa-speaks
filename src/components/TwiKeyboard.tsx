
import React from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface TwiKeyboardProps {
  onCharSelect: (char: string) => void;
  onClose: () => void;
}

const TwiKeyboard: React.FC<TwiKeyboardProps> = ({ onCharSelect, onClose }) => {
  // Twi special characters
  const twiChars = [
    'Ɛ', 'ɛ', 'Ɔ', 'ɔ', 'Ŋ', 'ŋ',
    'Ɩ', 'ɩ', 'Ʊ', 'ʊ', 'Ƴ', 'ƴ'
  ];

  return (
    <div className="bg-white p-3 rounded-lg shadow-lg border border-ghana-gold/30 animate-fade-in">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium text-ghana-black">Twi Characters</h3>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-6 w-6" 
          onClick={onClose}
        >
          <X size={16} />
        </Button>
      </div>
      <div className="grid grid-cols-6 gap-1">
        {twiChars.map((char) => (
          <Button
            key={char}
            variant="outline"
            size="sm"
            className="h-10 text-lg font-medium hover:bg-ghana-gold hover:text-white border-ghana-gold/20"
            onClick={() => onCharSelect(char)}
          >
            {char}
          </Button>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-2">Click a character to insert</p>
    </div>
  );
};

export default TwiKeyboard;
