import "./App.css";
import { useStore } from "./store/store";

export function App() {
  const { count, increment, decrement, reset } = useStore();
  // const counter = useStore((state) => state.count);
  // const increment = useStore((state) => state.increment);
  // const decrement = useStore((state) => state.decrement);

  return (
    <>
      <h1>Zustand Counter: {count}</h1>
      <button onClick={decrement}>one down</button>
      <button onClick={reset}>reset</button>
      <button onClick={increment}>one up</button>
    </>
  );
}
