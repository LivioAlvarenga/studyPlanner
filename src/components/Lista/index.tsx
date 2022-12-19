export default function Lista() {
  const tarefas = [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "JavaScript",
      tempo: "01:00:00",
    },
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "JavaScript",
      tempo: "01:00:00",
    },
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "JavaScript",
      tempo: "01:00:00",
    },
  ];

  return (
    <aside className="flex h-[500px] flex-col gap-6 rounded-xl bg-cyan-300 py-6 text-xl text-neutral-900">
      <h2 className="pl-6 text-4xl">Estudos do dia</h2>
      <ul className="flex flex-col gap-4 overflow-y-scroll px-6 ">
        {tarefas.map((item, i) => (
          <li
            className="rounded-lg border-2 border-solid border-cyan-200 bg-cyan-200  p-2 duration-500 ease-in-out hover:border-cyan-900 hover:shadow-2xl hover:shadow-cyan-900"
            key={i}
          >
            <h3 className="font-bold">{item.tarefa}</h3>
            <span>{item.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
