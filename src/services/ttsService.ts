
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
    voice: "en-US",
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

  public speak(text: string, options: Partial<TTSOptions> = {}): void {
    // Combine default options with provided options
    const speechOptions = { ...this.defaultOptions, ...options };
    
    // Create utterance
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set utterance properties
    utterance.voice = this.getVoices().find(voice => voice.lang.includes(speechOptions.voice)) || null;
    utterance.pitch = speechOptions.pitch;
    utterance.rate = speechOptions.rate;
    utterance.volume = speechOptions.volume;
    
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
