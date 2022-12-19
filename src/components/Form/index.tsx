import React from "react";
import Button from "../Button";

class Form extends React.Component {
  render(): React.ReactNode {
    return (
      <form className="flex h-full flex-col justify-start gap-6 rounded-xl bg-yellow-300 p-6 text-xl text-neutral-900">
        <div className="flex flex-col gap-3">
          <label className="text-4xl" htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input
            className="rounded-lg border-2 border-solid border-yellow-200 bg-yellow-200  p-2 text-neutral-900 outline-none duration-500 ease-in-out placeholder:text-neutral-900 hover:border-neutral-900 hover:shadow-2xl"
            type="text"
            name="tarefa"
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
            min="00:00:00"
            max="04:00:00"
            required
          />
        </div>
        <Button>Adicionar</Button>
        <img src="" alt="" />
      </form>
    );
  }
}

export default Form;
