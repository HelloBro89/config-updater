import React, { useState } from 'react';

export default function HomePage() {
  const [message, setMessage] = useState('');
  const [showText, setShowText] = useState(false);

  const handleClick = async () => {
    if (window.api) {
      const response = await window.api.getMessage();
      setMessage(response);
      setShowText((prev) => !prev);
    } else {
      console.error('API is not available');
    }
  };

  return (
    <div>
      <h1>Главная страница</h1>
      <button onClick={handleClick}>TEST</button>
      {showText && <p>{message}</p>}
    </div>
  );
}
