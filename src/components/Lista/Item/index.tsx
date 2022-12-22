import { ITarefa } from "../../../types/tarefa";

interface Props extends ITarefa {
  selectTask: (selectedTask: ITarefa) => void;
}

export default function Item({ tarefa, tempo, selected, full, id, selectTask }: Props) {
  console.log({ tarefa, tempo, selected, full, id });
  return (
    <li
      className="rounded-lg border-2 border-solid border-cyan-200 bg-cyan-200  p-2 duration-500 ease-in-out hover:border-cyan-900 hover:shadow-2xl hover:shadow-cyan-900"
      onClick={() => selectTask({ tarefa, tempo, selected, full, id })}
    >
      <h3 className="font-bold">{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
