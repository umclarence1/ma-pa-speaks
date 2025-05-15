
import React from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface TwiKeyboardProps {
  onCharSelect: (char: string) => void;
  onClose: () => void;
}

const TwiKeyboard: React.FC<TwiKeyboardProps> = ({ onCharSelect, onClose }) => {
  // Twi special characters with pronunciation hints
  const twiChars = [
    { char: 'Ɛ', hint: 'eh (as in "bet")' },
    { char: 'ɛ', hint: 'eh (lowercase)' },
    { char: 'Ɔ', hint: 'aw (as in "saw")' },
    { char: 'ɔ', hint: 'aw (lowercase)' },
    { char: 'Ŋ', hint: 'ng (as in "sing")' },
    { char: 'ŋ', hint: 'ng (lowercase)' },
    { char: 'Ɩ', hint: 'ih (like "i" in "bit")' },
    { char: 'ɩ', hint: 'ih (lowercase)' },
    { char: 'Ʊ', hint: 'uh (as in "book")' },
    { char: 'ʊ', hint: 'uh (lowercase)' },
    { char: 'Ƴ', hint: 'y (glottalized)' },
    { char: 'ƴ', hint: 'y (lowercase)' }
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-xl border border-ghana-gold/30 animate-fade-in max-w-md">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-base font-medium text-ghana-black">Twi Special Characters</h3>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-6 w-6" 
          onClick={onClose}
        >
          <X size={16} />
        </Button>
      </div>
      
      <div className="bg-ghana-gold/5 p-3 rounded mb-3">
        <p className="text-sm text-ghana-black mb-2">How to use:</p>
        <ol className="text-xs list-decimal list-inside space-y-1 text-muted-foreground">
          <li>Click on a character to insert it at your cursor position</li>
          <li>Hover over a character to see its pronunciation</li>
        </ol>
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        {twiChars.map((item) => (
          <Button
            key={item.char}
            variant="outline"
            size="sm"
            title={item.hint}
            className="h-10 text-lg font-medium group transition-all duration-300 hover:bg-ghana-gold hover:text-white border-ghana-gold/20 relative"
            onClick={() => onCharSelect(item.char)}
          >
            <span>{item.char}</span>
            <span className="absolute -bottom-8 left-0 w-full text-xs bg-black text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">{item.hint}</span>
          </Button>
        ))}
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <p className="text-xs text-muted-foreground">Hover for pronunciation hints</p>
        <Button 
          variant="default"
          size="sm"
          className="text-xs bg-ghana-green text-white hover:bg-ghana-green/90"
          onClick={onClose}
        >
          Done
        </Button>
      </div>
    </div>
  );
};

export default TwiKeyboard;
