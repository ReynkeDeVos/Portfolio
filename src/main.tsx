import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import './index.css';

// Console easter egg for fellow developers
console.log('%c👋 Hello fellow dev!', 'font-size: 20px; font-weight: bold; color: #3b82f6;');
console.log('%cThanks for checking out my portfolio! 🚀', 'font-size: 14px; color: #10b981;');
console.log(
  '%cLooking for the source code? Check out: https://github.com/ReynkeDeVos/Portfolio',
  'font-size: 12px; color: #6b7280; font-style: italic;',
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
