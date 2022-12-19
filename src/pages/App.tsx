import Form from "../components/Form";
import Lista from "../components/Lista";

export function App() {
  return (
    <div className="flex flex-col items-center gap-8 rounded-xl bg-neutral-900 p-16 pb-32">
      <h1 className="mb-12 bg-gradient-to-r from-yellow-300 to-cyan-400 bg-clip-text text-7xl text-transparent">
        Planejador de estudos
      </h1>
      <div className="grid grid-cols-2 items-center justify-center gap-8">
        <Form />
        <Lista />
      </div>
    </div>
  );
}
