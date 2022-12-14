import { faker } from "@faker-js/faker";
import React, { useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Button from "../Button";

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

export default function Form({ setTarefas }: Props) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      { tarefa, tempo, selected: false, done: false, id: faker.datatype.uuid() },
    ]);
    setTarefa("");
    setTempo("00:00");
  }

  return (
    <form
      className="flex h-full flex-col justify-start gap-6 rounded-xl bg-yellow-300 p-6 text-xl text-neutral-900"
      onSubmit={addTask}
    >
      <div className="flex flex-col gap-3">
        <label className="text-4xl" htmlFor="tarefa">
          Adicione um novo estudo
        </label>
        <input
          className="rounded-lg border-2 border-solid border-yellow-200 bg-yellow-200  p-2 text-neutral-900 outline-none duration-500 ease-in-out placeholder:text-neutral-900 hover:border-neutral-900 hover:shadow-2xl"
          type="text"
          name="tarefa"
          value={tarefa}
          onChange={(event) => setTarefa(event.target.value)}
          id="tarefa"
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className="flex flex-col gap-3">
        <label className="text-4xl" htmlFor="tempo">
          Tempo
        </label>
        <input
          className="rounded-lg border-2 border-solid border-yellow-200 bg-yellow-200  p-2 text-neutral-900 outline-none duration-500 ease-in-out placeholder:text-neutral-900 hover:border-neutral-900 hover:shadow-2xl"
          type="time"
          step="1"
          name="tempo"
          value={tempo}
          onChange={(event) => setTempo(event.target.value)}
          min="00:00:00"
          max="04:00:00"
          required
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
}
