
import React from 'react';
import { Button } from "@/components/ui/button";
import { Volume, Info, Settings } from "lucide-react";

const Header = () => {
  return (
    <header className="p-4 border-b border-ghana-gold/30 bg-gradient-to-r from-white to-ghana-gold/5 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 rounded-full bg-ghana-gold flex items-center justify-center">
          <Volume className="text-white" size={20} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-ghana-black">
            <span className="text-ghana-green">Ma Pa</span> 
            <span className="text-ghana-black"> Speaks</span>
          </h1>
          <p className="text-xs text-muted-foreground">Tɛkyerɛma Pa - Ghanaian TTS Solution</p>
        </div>
      </div>
      <div className="flex space-x-2">
        <Button variant="ghost" size="icon">
          <Info size={20} />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings size={20} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
