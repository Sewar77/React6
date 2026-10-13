import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const handleMinus = () => {
    if (counter < 1) {
      setCounter(0);
    }
    setCounter((c) => c - 1);
  };
  return (
    <>
      <div className="min-h-100 ">
        <button className="border p-1" onClick={() => setCounter((c) => c + 1)}>
          +
        </button>
        <button
          className="border p-1"
          onClick={() => setCounter((c) => c + 10)}
        >
          +10
        </button>
        <p>{counter}</p>
        <button onClick={handleMinus}>-</button>
        <br />
        <button onClick={() => setCounter((c) => c - 10)}>- 10</button>
        <br />
        <button onClick={() => setCounter(0)}>reset</button>
        <button onClick={() => setCounter(100)}>set 100</button>
      </div>
    </>
  );
}
