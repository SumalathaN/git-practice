// src/pages/about/About.jsx
import React, { useRef } from 'react';

export default function Contact() {
  // 1. Create the ref
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // 3. Directly access the real DOM element to focus it
    inputEl.current.focus();
  };

  return (
    <div>
      <h2>Contact</h2>
      <p>We are a dedicated group of web developers and UI designers.</p>

      {/* Interactive section using useRef */}
      <div style={{ marginTop: '20px' }}>
        {/* 2. Attach the ref to the input element */}
        <input 
          ref={inputEl} 
          type="text" 
          placeholder="Click the button to focus me..." 
        />
        <button onClick={onButtonClick} style={{ marginLeft: '10px' }}>
          Focus the input
        </button>
      </div>
    </div>
  );
}