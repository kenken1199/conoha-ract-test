import { Routes, Route } from "react-router";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/counter" element={<h1>Counter</h1>} />

      <Route path="/todo" element={<h1>Todo</h1>} />

      <Route path="/weather" element={<h1>Weather</h1>} />

      <Route path="/chart" element={<h1>Chart</h1>} />

      <Route path="/api" element={<h1>API</h1>} />

      <Route path="/test" element={<h1>Test</h1>} />

      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
