
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Listen for system dark mode preference
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const handleDarkModeChange = (e: MediaQueryListEvent | MediaQueryList) => {
  if (e.matches) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// Set initial dark mode based on system preference
handleDarkModeChange(darkModeMediaQuery);

// Listen for changes in system dark mode preference
darkModeMediaQuery.addEventListener('change', handleDarkModeChange);

createRoot(document.getElementById("root")!).render(<App />);
