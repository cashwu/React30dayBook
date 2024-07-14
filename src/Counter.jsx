import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const drcrementBtnClick = () => {
    setCount(count - 1);
  };

  const incrementBtnClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={drcrementBtnClick}>-</button>
      <span>{count}</span>
      <button onClick={incrementBtnClick}>+</button>
    </div>
  );
}
