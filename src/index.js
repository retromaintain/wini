import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ParallaxProvider } from 'react-scroll-parallax';

const root = ReactDOM.createRoot(document.getElementById('root'));



// Function to check if the screen width indicates a mobile device.
const isMobile = () => window.innerWidth <= 768; // Adjust the threshold as needed.

root.render(
  <React.StrictMode>
    <ParallaxProvider isDisabled={isMobile()}>
    
    <App />
    </ParallaxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
