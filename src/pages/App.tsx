import { useState } from "react";
import Form from "../components/Form";
import List from "../components/Lista";
import Timer from "../components/Timer";
import { ITarefa } from "../types/tarefa";

export function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selected, setSelected] = useState<ITarefa>();

  function selectTask(selectedTask: ITarefa) {
    setSelected(selectedTask);
  }

  return (
    <div className="flex  w-full flex-col items-center gap-8 overflow-hidden rounded-xl bg-neutral-900 px-3 pt-20 pb-32 lg:p-16">
      <h1 className="mb-12 bg-gradient-to-r from-yellow-300 to-cyan-400 bg-clip-text text-center text-6xl text-transparent lg:text-7xl ">
        Planejador de estudos
      </h1>
      <div className="grid grid-cols-1 items-center justify-center gap-8 lg:grid-cols-2">
        <Form setTarefas={setTarefas} />
        <List tarefas={tarefas} selectTask={selectTask} />
      </div>
      <Timer />
    </div>
  );
}
