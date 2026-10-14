import { useState } from "react";

function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-md rounded-xl bg-white p-8 shadow">
        <h1 className="mb-6 text-3xl font-bold">Todo</h1>

        <div className="mb-6 flex gap-2">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Todoを入力"
            className="flex-1 rounded-lg border px-4 py-2"
          />

          <button
            onClick={() => {
              if (text.trim() === "") return;

              setTodos([...todos, text]);
              setText("");
            }}
            className="rounded-lg bg-gray-800 px-4 py-2 text-white"
          >
            追加
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between rounded-lg bg-gray-100 p-3"
            >
              <span>{todo}</span>
              <button
                onClick={() => {
                  setTodos(todos.filter((_, i) => i !== index));
                }}
                className="rounded-lg bg-red-500 px-3 py-1 text-white hover:bg-red-600"
              >
                削除
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
