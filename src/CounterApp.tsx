// CounterApp.tsx

import { useState } from 'react';

export default function CounterApp() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <p>You clicked {count} times.</p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}