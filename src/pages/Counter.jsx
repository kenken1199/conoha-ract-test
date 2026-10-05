import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-md rounded-xl bg-white p-8 text-center shadow">
        <h1 className="mb-6 text-3xl font-bold">Counter</h1>

        <p className="mb-6 text-5xl font-bold">{count}</p>

        <div className="flex justify-center gap-3">
          <button
            onClick={() => setCount(count - 1)}
            className="rounded-lg bg-gray-200 px-5 py-2 hover:bg-gray-300"
          >
            −
          </button>

          <button
            onClick={() => setCount(0)}
            className="rounded-lg bg-gray-200 px-5 py-2 hover:bg-gray-300"
          >
            Reset
          </button>

          <button
            onClick={() => setCount(count + 1)}
            className="rounded-lg bg-gray-800 px-5 py-2 text-white hover:bg-gray-700"
          >
            ＋
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
