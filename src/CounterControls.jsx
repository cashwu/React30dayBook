export default function CounterControls({ count, setCount }) {
  const decrement = () => setCount(count - 1);
  const increnemt = () => setCount(count + 1);
  const reset = () => setCount(0);

  return (
    <div>
      <button onClick={decrement}>-</button>
      <button onClick={increnemt}>+</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}
