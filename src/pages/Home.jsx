import { Link } from "react-router";

const experiments = [
  {
    path: "/counter",
    title: "Counter",
    description: "useStateを使ってカウンターを作る",
  },
  {
    path: "/todo",
    title: "Todo",
    description: "Todoアプリを作る",
  },
  {
    path: "/weather",
    title: "Weather",
    description: "APIから天気情報を取得する",
  },
  {
    path: "/chart",
    title: "Chart",
    description: "データをグラフで表示する",
  },
  {
    path: "/api",
    title: "API",
    description: "API通信を実験する",
  },
  {
    path: "/test",
    title: "Test",
    description: "自由にいろいろ試す",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-2 text-4xl font-bold">React Lab</h1>

        <p className="mb-8 text-gray-600">Reactでいろいろ試してみる実験場</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experiments.map((experiment) => (
            <Link
              key={experiment.path}
              to={experiment.path}
              className="rounded-xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h2 className="mb-2 text-xl font-bold">{experiment.title}</h2>

              <p className="text-gray-600">{experiment.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
