
// TTS service to handle speech generation

export interface TTSOptions {
  voice: string;
  pitch: number;
  rate: number;
  volume: number;
}

class TTSService {
  private synth: SpeechSynthesis;
  private defaultOptions: TTSOptions = {
    voice: "en-US", // Default voice language
    pitch: 1.0,
    rate: 0.9,
    volume: 1.0
  };

  constructor() {
    this.synth = window.speechSynthesis;
  }

  public getVoices(): SpeechSynthesisVoice[] {
    return this.synth.getVoices();
  }

  public getVoicesByLanguage(): Record<string, SpeechSynthesisVoice[]> {
    const voices = this.getVoices();
    const voicesByLang: Record<string, SpeechSynthesisVoice[]> = {};
    
    voices.forEach(voice => {
      const lang = voice.lang.split('-')[0];
      if (!voicesByLang[lang]) {
        voicesByLang[lang] = [];
      }
      voicesByLang[lang].push(voice);
    });
    
    return voicesByLang;
  }

  public speak(text: string, options: Partial<TTSOptions> = {}): void {
    // Wait for voices to be loaded if they aren't already
    if (this.getVoices().length === 0) {
      this.synth.addEventListener('voiceschanged', () => {
        this.performSpeak(text, options);
      }, { once: true });
    } else {
      this.performSpeak(text, options);
    }
  }
  
  private performSpeak(text: string, options: Partial<TTSOptions> = {}): void {
    // Combine default options with provided options
    const speechOptions = { ...this.defaultOptions, ...options };
    
    // Create utterance
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Get available voices
    const voices = this.getVoices();
    
    // Try to find an exact match for the voice
    let selectedVoice = voices.find(voice => voice.lang.includes(speechOptions.voice));
    
    // If no exact match, try to find a voice with the same language prefix
    if (!selectedVoice) {
      const langPrefix = speechOptions.voice.split('-')[0];
      selectedVoice = voices.find(voice => voice.lang.startsWith(langPrefix));
    }
    
    // Fallback to default voice if still no match
    utterance.voice = selectedVoice || null;
    
    // Set utterance properties
    utterance.pitch = speechOptions.pitch;
    utterance.rate = speechOptions.rate;
    utterance.volume = speechOptions.volume;
    
    // Improve pronunciation for Twi language
    if (text.includes('ɛ') || text.includes('ɔ') || text.includes('Ɛ') || text.includes('Ɔ')) {
      // Special handling for Twi characters
      // Slow down slightly when special characters are detected
      utterance.rate = Math.max(0.75, speechOptions.rate - 0.1);
    }
    
    // Cancel any ongoing speech
    this.synth.cancel();
    
    // Speak the text
    this.synth.speak(utterance);
  }

  public stop(): void {
    this.synth.cancel();
  }

  public isPaused(): boolean {
    return this.synth.paused;
  }

  public isSpeaking(): boolean {
    return this.synth.speaking;
  }
}

const ttsService = new TTSService();
export default ttsService;
