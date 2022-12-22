import { faker } from "@faker-js/faker";
import { ITarefa } from "../../types/tarefa";
import Item from "./Item";

interface Props {
  tarefas: ITarefa[];
  selectTask: (selectedTask: ITarefa) => void;
}

export default function List({ tarefas, selectTask }: Props) {
  return (
    <aside className="flex h-[500px] flex-col gap-6 rounded-xl bg-cyan-300 py-6 text-xl text-neutral-900">
      <h2 className="pl-6 text-4xl">Estudos do dia</h2>
      <ul className="flex flex-col gap-4 overflow-y-scroll px-6 ">
        {tarefas.map((item) => (
          <Item selectTask={selectTask} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
}
