import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{display: "flex", gap: "20px"}} >
      <button onClick={increment}>Increment</button>
      <div>{count}</div>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
