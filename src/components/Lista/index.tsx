import { faker } from "@faker-js/faker";
import { ITarefa } from "../../types/tarefa";
import Item from "./Item";

export default function List({ tarefas }: { tarefas: ITarefa[] }) {
  return (
    <aside className="flex h-[500px] flex-col gap-6 rounded-xl bg-cyan-300 py-6 text-xl text-neutral-900">
      <h2 className="pl-6 text-4xl">Estudos do dia</h2>
      <ul className="flex flex-col gap-4 overflow-y-scroll px-6 ">
        {tarefas.map((item) => (
          <Item key={faker.datatype.uuid()} {...item} />
        ))}
      </ul>
    </aside>
  );
}
