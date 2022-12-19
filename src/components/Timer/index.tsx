import Button from "../Button";
import Clock from "./Clock";

export default function Timer() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <p className="text-center text-4xl">Escolha um card e inicie o cronometro</p>
      <Clock />
      <Button hover="hover:bg-red-600">Começar!</Button>
    </div>
  );
}
