import React, { useState } from 'react';

export default function HomePage() {
  const [showText, setShowText] = useState(false);
  const handleClick = () => {
    setShowText((prev) => !prev);
  };
  return (
    <div>
      <h1>Главная страница</h1>
      <button onClick={handleClick}>TEST</button>
      {showText && <p>TEST</p>}
    </div>
  );
}
