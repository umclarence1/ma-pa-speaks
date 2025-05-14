
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Volume2, Play, Settings2, Mic, Keyboard } from 'lucide-react';
import ttsService from '@/services/ttsService';
import { useToast } from "@/hooks/use-toast";
import TwiKeyboard from './TwiKeyboard';

const TextInput: React.FC = () => {
  const [text, setText] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [rate, setRate] = useState(0.9);
  const [pitch, setPitch] = useState(1.0);
  const [isSpeaking, setIsSpeaking] = useState(false);
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
    
    setTimeout(() => {
      setIsSpeaking(false);
    }, text.length * 80); // Rough calculation based on text length
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
    <div className="p-4 bg-white rounded-lg shadow-md border border-ghana-gold/10">
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
          className="mb-4 min-h-[100px] border-ghana-gold/30 focus:border-ghana-gold"
        />
        
        <Button
          variant="outline"
          size="sm"
          className="absolute right-3 top-3 border-ghana-gold/20"
          onClick={toggleKeyboard}
        >
          <Keyboard size={16} className="mr-1" />
          Twi Keys
        </Button>
        
        {showKeyboard && (
          <div className="absolute z-10 mt-1 right-0">
            <TwiKeyboard onCharSelect={handleCharSelect} onClose={() => setShowKeyboard(false)} />
          </div>
        )}
      </div>
      
      <div className="flex items-center justify-between mb-3">
        <Button
          onClick={() => setShowSettings(!showSettings)}
          variant="outline"
          size="sm"
          className="text-xs flex items-center border-ghana-gold/20 hover:bg-ghana-gold/10"
        >
          <Settings2 size={14} className="mr-1" />
          Voice Settings
        </Button>
        
        <div className="flex items-center space-x-2">
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
          
          <Button 
            onClick={handleSpeak} 
            disabled={isSpeaking}
            className="bg-ghana-gold hover:bg-ghana-gold/90 text-white"
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
            />
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
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TextInput;
