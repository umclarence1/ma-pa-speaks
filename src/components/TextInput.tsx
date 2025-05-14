
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Volume2, Play, Settings2, Mic } from 'lucide-react';
import ttsService from '@/services/ttsService';
import { useToast } from "@/hooks/use-toast";

const TextInput: React.FC = () => {
  const [text, setText] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [rate, setRate] = useState(0.9);
  const [pitch, setPitch] = useState(1.0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { toast } = useToast();

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

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-3 text-ghana-black flex items-center">
        <Volume2 className="mr-2 text-ghana-green" size={20} />
        Text To Speech
      </h2>
      
      <Textarea
        placeholder="Type or paste text here to speak in Twi..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="mb-4 min-h-[100px] border-ghana-gold/30 focus:border-ghana-gold"
      />
      
      <div className="flex items-center justify-between mb-3">
        <Button
          onClick={() => setShowSettings(!showSettings)}
          variant="outline"
          size="sm"
          className="text-xs flex items-center"
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
            className="border-ghana-green/50 text-ghana-green"
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
        <div className="p-4 bg-muted/30 rounded-lg mb-3 animate-fade-in">
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
