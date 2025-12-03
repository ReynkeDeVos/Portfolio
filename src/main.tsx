import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import { consoleImage } from './assets/console/hello-there.ts';
import './index.css';

// Console easter egg for fellow developers
console.log(
  '%c ',
  `font-size: 1px; padding: 150px 200px; background: url(${consoleImage}) no-repeat center; background-size: contain; line-height: 1;`,
);

console.log(
  '%c...fellow dev! 👋',
  'font-size: 18px; font-weight: bold; color: #10b981; margin-top: 10px;',
);
console.log(
  '%cThanks for checking out my portfolio!',
  'font-size: 14px; color: #6b7280; margin-bottom: 8px;',
);
console.log(
  '%cLooking for the source code? Check out: https://github.com/ReynkeDeVos/Portfolio',
  'font-size: 12px; color: #9ca3af; font-style: italic;',
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
