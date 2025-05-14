
import React, { useState } from 'react';
import { phrases, categories, Phrase } from '@/data/phrases';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Volume2 } from 'lucide-react';
import ttsService from '@/services/ttsService';

const PhraseSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [speaking, setSpeaking] = useState<string | null>(null);

  const handleSpeak = (phrase: Phrase) => {
    setSpeaking(phrase.id);
    ttsService.speak(phrase.twi, { rate: 0.8 });
    
    // Reset the speaking state after animation completes
    setTimeout(() => {
      setSpeaking(null);
    }, 2000);
  };

  return (
    <div className="py-4">
      <Tabs defaultValue={categories[0].id} value={activeCategory} onValueChange={setActiveCategory}>
        <div className="mb-4 px-4">
          <TabsList className="grid w-full grid-cols-5">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex items-center gap-2"
              >
                <span>{category.icon}</span>
                <span className="hidden md:inline">{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {phrases
                .filter((phrase) => phrase.category === category.id)
                .map((phrase) => (
                  <div 
                    key={phrase.id}
                    className={`phrase-button flex items-center justify-between ${
                      speaking === phrase.id ? 'bg-ghana-gold/20' : ''
                    }`}
                    onClick={() => handleSpeak(phrase)}
                  >
                    <div className="flex flex-col items-start">
                      <p className="text-sm font-normal text-gray-500">{phrase.english}</p>
                      <p className="text-lg font-medium">{phrase.twi}</p>
                    </div>
                    <Button 
                      size="sm" 
                      variant="ghost"
                      className={`ml-2 ${speaking === phrase.id ? 'animate-pulse-gentle' : ''}`}
                    >
                      <Volume2 size={18} className="opacity-80" />
                    </Button>
                  </div>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default PhraseSection;
