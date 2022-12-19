export default function Item({ tarefa, tempo }: { tarefa: string; tempo: string }) {
  return (
    <li className="rounded-lg border-2 border-solid border-cyan-200 bg-cyan-200  p-2 duration-500 ease-in-out hover:border-cyan-900 hover:shadow-2xl hover:shadow-cyan-900">
      <h3 className="font-bold">{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
