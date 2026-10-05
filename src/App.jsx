import { Routes, Route, Link } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="p-8">
      <nav className="mb-8 space-x-4">
        <Link to="/" className="text-blue-500 hover:underline">
          ホーム
        </Link>

        <Link to="/about" className="text-blue-500 hover:underline">
          About
        </Link>

        <Link to="/contact" className="text-blue-500 hover:underline">
          お問い合わせ
        </Link>
        <a href="/" className="text-blue-500 hover:underline">
          トップページ
        </a>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
