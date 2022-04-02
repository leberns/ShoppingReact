import { useState } from 'react';

const Counter = () => {

  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount(c => c + 1);
  }

  return (
    <div>
      <h1>Counter</h1>

      <p aria-live="polite">Current count with Hooks: <strong>{count}</strong></p>

      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export { Counter };