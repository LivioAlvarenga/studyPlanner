import { ITarefa } from "../../../types/tarefa";

interface Props extends ITarefa {
  selectTask: (selectedTask: ITarefa) => void;
}

export default function Item({ tarefa, tempo, selected, done, id, selectTask }: Props) {
  const selectedStyle = done
    ? "border-cyan-500 bg-cyan-500"
    : selected
    ? "border-cyan-200 bg-cyan-200 border-cyan-900 shadow-2xl shadow-cyan-900"
    : "border-cyan-200 bg-cyan-200 hover:border-cyan-900 hover:shadow-2xl hover:shadow-cyan-900";

  const checkStyle = done ? "opacity-100" : "opacity-0";

  return (
    <li
      className={`relative cursor-pointer rounded-lg border-2 border-solid p-2 duration-500 ease-in-out ${selectedStyle}`}
      onClick={() => !done && selectTask({ tarefa, tempo, selected, done, id })}
    >
      <h3 className="font-bold">{tarefa}</h3>
      <span>{tempo}</span>
      <svg
        className={`absolute right-3 top-1/2 -translate-y-1/2 fill-cyan-900 opacity-100 duration-300 ease-in-out ${checkStyle}`}
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
      </svg>
    </li>
  );
}
