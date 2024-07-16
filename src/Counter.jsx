import { useState } from "react";
import CounterControls from "./CounterControls";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>counter value : {count}</p>
      <CounterControls count={count} setCount={setCount} />
    </div>
  );
}
