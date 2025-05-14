
export interface Phrase {
  id: string;
  english: string;
  twi: string;
  category: string;
}

export interface PhraseCategory {
  id: string;
  name: string;
  icon: string;
}

export const categories: PhraseCategory[] = [
  { id: 'greetings', name: 'Greetings', icon: '👋' },
  { id: 'needs', name: 'Basic Needs', icon: '🥣' },
  { id: 'health', name: 'Health', icon: '🏥' },
  { id: 'emotions', name: 'Emotions', icon: '😊' },
  { id: 'emergency', name: 'Emergency', icon: '🚨' }
];

export const phrases: Phrase[] = [
  // Greetings
  { id: 'g1', english: 'Hello', twi: 'Mema wo akye', category: 'greetings' },
  { id: 'g2', english: 'Good morning', twi: 'Mema wo akye', category: 'greetings' },
  { id: 'g3', english: 'Good afternoon', twi: 'Mema wo aha', category: 'greetings' },
  { id: 'g4', english: 'Good evening', twi: 'Mema wo adwo', category: 'greetings' },
  { id: 'g5', english: 'How are you?', twi: 'Wo ho te sɛn?', category: 'greetings' },
  { id: 'g6', english: 'I am fine', twi: 'Me ho ye', category: 'greetings' },
  { id: 'g7', english: 'Thank you', twi: 'Medaase', category: 'greetings' },

  // Basic Needs
  { id: 'n1', english: 'I am hungry', twi: 'Ɛkɔm de me', category: 'needs' },
  { id: 'n2', english: 'I am thirsty', twi: 'Nsukɔm de me', category: 'needs' },
  { id: 'n3', english: 'I need water', twi: 'Me hia nsuo', category: 'needs' },
  { id: 'n4', english: 'I need food', twi: 'Me hia aduane', category: 'needs' },
  { id: 'n5', english: 'I need to rest', twi: 'Me hia ahome', category: 'needs' },
  { id: 'n6', english: 'I need to use the restroom', twi: 'Me hia sɛ me kɔ tiafi', category: 'needs' },

  // Health
  { id: 'h1', english: 'I need help', twi: 'Me hia mmoa', category: 'health' },
  { id: 'h2', english: 'I am in pain', twi: 'Me wɔ yaw', category: 'health' },
  { id: 'h3', english: 'I need medicine', twi: 'Me hia aduro', category: 'health' },
  { id: 'h4', english: 'I need a doctor', twi: 'Me hia dɔkta', category: 'health' },
  { id: 'h5', english: 'I feel sick', twi: 'Me wɔ yadeɛ', category: 'health' },
  
  // Emotions
  { id: 'e1', english: 'I am happy', twi: 'M\'ani agye', category: 'emotions' },
  { id: 'e2', english: 'I am sad', twi: 'Me werɛ aho', category: 'emotions' },
  { id: 'e3', english: 'I am tired', twi: 'Mabrɛ', category: 'emotions' },
  { id: 'e4', english: 'I am scared', twi: 'Me suro', category: 'emotions' },
  { id: 'e5', english: 'I love you', twi: 'Me dɔ wo', category: 'emotions' },

  // Emergency
  { id: 'em1', english: 'Help!', twi: 'Mmoa!', category: 'emergency' },
  { id: 'em2', english: 'Emergency!', twi: 'Ɔhaw kɛseɛ!', category: 'emergency' },
  { id: 'em3', english: 'Call an ambulance!', twi: 'Frɛ ambulance!', category: 'emergency' },
  { id: 'em4', english: 'I cannot breathe', twi: 'Mentumi nnhome', category: 'emergency' },
  { id: 'em5', english: 'I need help immediately', twi: 'Me hia mmoa seesei ara', category: 'emergency' }
];
