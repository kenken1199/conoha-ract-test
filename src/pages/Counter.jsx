import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-md rounded-xl bg-white p-8 text-center shadow">
        <h1 className="mb-6 text-3xl font-bold">Counter</h1>

        <p className="mb-6 text-5xl font-bold">{count}</p>
        <p>{count % 2 === 0 ? "偶数" : "奇数"}</p>
        <p className="text-lg">Click Count: {clickCount}</p>
        <p>{clickCount >= 10 && "Great job! You've clicked 10 times!"}</p>

        <div className="flex justify-center gap-3">
          <button
            onClick={() => {
              if (count > 0) {
                setCount(count - 1);
              }
            }}
            className="rounded-lg bg-gray-200 px-5 py-2 hover:bg-gray-300"
          >
            −1
          </button>

          <button
            onClick={() => {
              setCount(0);
              setClickCount(0);
            }}
            className="rounded-lg bg-gray-200 px-5 py-2 hover:bg-gray-300"
          >
            Reset
          </button>

          <button
            onClick={() => {
              setCount(count + 1);
              setClickCount(clickCount + 1);
            }}
            disabled={clickCount >= 10}
            className="rounded-lg bg-gray-800 px-5 py-2 text-white hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            ＋1
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
