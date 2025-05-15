
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Volume2, Play, Settings2, Mic, Keyboard, Save } from 'lucide-react';
import ttsService from '@/services/ttsService';
import { useToast } from "@/hooks/use-toast";
import TwiKeyboard from './TwiKeyboard';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const TextInput: React.FC = () => {
  const [text, setText] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [rate, setRate] = useState(0.9);
  const [pitch, setPitch] = useState(1.0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [savedPhrases, setSavedPhrases] = useState<string[]>([]);
  const { toast } = useToast();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  const handleSpeak = () => {
    if (!text.trim()) {
      toast({
        title: "No text to speak",
        description: "Please enter some text first.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSpeaking(true);
    ttsService.speak(text, { rate, pitch });
    
    // Visual feedback on speak button duration
    toast({
      title: "Speaking",
      description: "Text is being spoken...",
      duration: 2000,
    });
    
    setTimeout(() => {
      setIsSpeaking(false);
    }, text.length * 80); // Rough calculation based on text length
  };

  const handleSavePhrase = () => {
    if (!text.trim()) {
      toast({
        title: "Cannot save empty phrase",
        description: "Please enter some text first.",
        variant: "destructive",
      });
      return;
    }

    if (!savedPhrases.includes(text)) {
      setSavedPhrases([...savedPhrases, text]);
      toast({
        title: "Phrase saved",
        description: "You can find it in your saved phrases.",
      });
    } else {
      toast({
        title: "Phrase already saved",
        description: "This phrase is already in your saved phrases.",
      });
    }
  };

  const handleCharSelect = (char: string) => {
    if (textareaRef.current) {
      const start = textareaRef.current.selectionStart;
      const end = textareaRef.current.selectionEnd;
      
      const newText = text.substring(0, start) + char + text.substring(end);
      setText(newText);
      
      // Focus back on textarea and set cursor position after inserted character
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.focus();
          textareaRef.current.setSelectionRange(start + 1, start + 1);
        }
      }, 10);
    } else {
      setText(text + char);
    }
  };

  const toggleKeyboard = () => {
    setShowKeyboard(!showKeyboard);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-ghana-gold/10 hover:border-ghana-gold/30 transition-all duration-300">
      <h2 className="text-xl font-semibold mb-3 text-ghana-black flex items-center">
        <Volume2 className="mr-2 text-ghana-green" size={20} />
        Text To Speech
      </h2>
      
      <div className="relative">
        <Textarea
          ref={textareaRef}
          placeholder="Type or paste text here to speak in Twi..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="mb-4 min-h-[120px] border-ghana-gold/30 focus:border-ghana-gold placeholder:text-ghana-black/30"
        />
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="absolute right-3 top-3 border-ghana-gold/50 bg-ghana-gold/5 hover:bg-ghana-gold hover:text-white transition-all"
                onClick={toggleKeyboard}
              >
                <Keyboard size={16} className="mr-1" />
                Twi Keys
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Click to insert special Twi characters</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        {showKeyboard && (
          <div className="absolute z-20 mt-1 right-0 animate-fade-in">
            <TwiKeyboard onCharSelect={handleCharSelect} onClose={() => setShowKeyboard(false)} />
          </div>
        )}
      </div>
      
      <div className="flex items-center justify-between mb-3">
        <Button
          onClick={() => setShowSettings(!showSettings)}
          variant="outline"
          size="sm"
          className={`text-xs flex items-center border-ghana-gold/20 hover:bg-ghana-gold/10 ${showSettings ? 'bg-ghana-gold/10' : ''}`}
        >
          <Settings2 size={14} className="mr-1" />
          {showSettings ? 'Hide Settings' : 'Voice Settings'}
        </Button>
        
        <div className="flex items-center space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-ghana-green/50 text-ghana-green hover:bg-ghana-green/10"
                  onClick={handleSavePhrase}
                >
                  <Save size={18} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Save this phrase for later use</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => {
                    // Future feature: Speech-to-text
                    toast({
                      title: "Coming Soon",
                      description: "Speech recognition feature will be available soon!",
                    });
                  }}
                  variant="outline"
                  size="icon"
                  className="border-ghana-green/50 text-ghana-green hover:bg-ghana-green/10"
                >
                  <Mic size={18} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Speech recognition (coming soon)</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <Button 
            onClick={handleSpeak} 
            disabled={isSpeaking}
            className={`bg-ghana-gold hover:bg-ghana-gold/90 text-white ${isSpeaking ? 'animate-pulse' : ''}`}
          >
            <Play size={16} className="mr-1" /> 
            {isSpeaking ? "Speaking..." : "Speak"}
          </Button>
        </div>
      </div>
      
      {showSettings && (
        <div className="p-4 bg-muted/30 rounded-lg mb-3 animate-fade-in border border-ghana-gold/10">
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Speaking Rate</span>
              <span className="text-xs">{rate.toFixed(1)}x</span>
            </div>
            <Slider 
              value={[rate]} 
              min={0.5}
              max={1.5}
              step={0.1}
              onValueChange={(value) => setRate(value[0])} 
              className="cursor-pointer"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>Slower</span>
              <span>Faster</span>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Pitch</span>
              <span className="text-xs">{pitch.toFixed(1)}</span>
            </div>
            <Slider 
              value={[pitch]} 
              min={0.5}
              max={1.5}
              step={0.1}
              onValueChange={(value) => setPitch(value[0])} 
              className="cursor-pointer"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>Lower</span>
              <span>Higher</span>
            </div>
          </div>
        </div>
      )}
      
      {savedPhrases.length > 0 && (
        <div className="mt-4 border-t border-ghana-gold/10 pt-3">
          <h3 className="text-sm font-medium mb-2">Your Saved Phrases:</h3>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {savedPhrases.map((phrase, index) => (
              <div key={index} className="flex justify-between items-center p-2 bg-ghana-gold/5 rounded hover:bg-ghana-gold/10 text-sm">
                <span className="truncate mr-2">{phrase}</span>
                <Button 
                  size="sm" 
                  variant="ghost"
                  className="h-7 px-2"
                  onClick={() => {
                    setText(phrase);
                    toast({
                      title: "Phrase loaded",
                      description: "Ready to speak",
                    });
                  }}
                >
                  Use
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TextInput;
