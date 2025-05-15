
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Volume, Info, Settings, Menu } from "lucide-react";
import { 
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose
} from "@/components/ui/sheet";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [speechRate, setSpeechRate] = useState("normal");

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    // Apply dark mode to document
    if (checked) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className="p-4 border-b border-ghana-gold/30 bg-gradient-to-r from-white to-ghana-gold/5 flex items-center justify-between sticky top-0 z-10 shadow-sm">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 rounded-full bg-ghana-gold flex items-center justify-center shadow-md hover:scale-105 transition-transform">
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
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon" className="hover:bg-ghana-gold/10 relative overflow-hidden group">
              <Info size={20} />
              <span className="absolute -bottom-10 left-0 w-full text-xs opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 transition-all duration-300">Info</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center text-ghana-black">
                <Info size={18} className="mr-2 text-ghana-green" />
                About Ma Pa Speaks
              </DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <div className="mt-2 space-y-3">
                <p>Ma Pa Speaks is a Text-to-Speech application designed to help individuals with speech impairments communicate effectively in Ghanaian languages.</p>
                <p>This project is part of the AT2030 program funded by UK Aid and led by the Global Disability Innovation Hub.</p>
                <h4 className="font-medium text-ghana-black mt-4">How to use:</h4>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Type or paste text in the text area</li>
                  <li>Use the Twi Keys button to insert special Twi characters</li>
                  <li>Adjust voice settings if needed</li>
                  <li>Press the Speak button to hear the text</li>
                </ol>
                <p className="text-xs text-muted-foreground mt-2">Version 1.0.0</p>
              </div>
            </DialogDescription>
            <DialogFooter className="sm:justify-start">
              <DialogClose asChild>
                <Button type="button" variant="default">Close</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="hover:bg-ghana-gold/10 relative overflow-hidden group">
              <Settings size={20} />
              <span className="absolute -bottom-10 left-0 w-full text-xs opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 transition-all duration-300">Settings</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Settings</SheetTitle>
              <SheetDescription>
                Configure your Ma Pa Speaks experience
              </SheetDescription>
            </SheetHeader>
            <div className="py-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="dark-mode" className="text-sm font-medium">
                    Dark Mode
                  </Label>
                  <p className="text-xs text-muted-foreground">
                    Switch to dark theme
                  </p>
                </div>
                <Switch
                  id="dark-mode"
                  checked={darkMode}
                  onCheckedChange={toggleDarkMode}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="speech-rate" className="text-sm font-medium">
                  Default Speech Rate
                </Label>
                <select 
                  id="speech-rate" 
                  className="w-full p-2 border rounded-md"
                  value={speechRate}
                  onChange={(e) => setSpeechRate(e.target.value)}
                >
                  <option value="slow">Slow</option>
                  <option value="normal">Normal</option>
                  <option value="fast">Fast</option>
                </select>
              </div>
              
              <div className="border-t pt-4">
                <h4 className="text-sm font-medium mb-2">About</h4>
                <p className="text-xs text-muted-foreground">
                  Ma Pa Speaks v1.0.0
                </p>
                <p className="text-xs text-muted-foreground">
                  Part of the AT2030 program funded by UK Aid
                </p>
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="outline">Close</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
