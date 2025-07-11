import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './mobile-icons.css'; 
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import both filled and outlined versions for better compatibility
import '@material-design-icons/font/filled.css';
import '@material-design-icons/font/outlined.css';

// Add a fallback font loading check
const checkFontLoading = () => {
  if (document.fonts) {
    document.fonts.ready.then(() => {
      console.log('Material Icons loaded successfully');
    }).catch((error) => {
      console.warn('Material Icons failed to load:', error);
    });
  }
};

// Disable React.StrictMode temporarily to check if it's causing issues with hooks
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);

// Check font loading after render
checkFontLoading();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 