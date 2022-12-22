import React from "react";
import { ITarefa } from "../../types/tarefa";
import Button from "../Button";

class Form extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}> {
  state = {
    tarefa: "",
    tempo: "00:00",
  };

  addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setTarefas((tarefasAntigas) => [...tarefasAntigas, { ...this.state }]);
  }

  render(): React.ReactNode {
    return (
      <form
        className="flex h-full flex-col justify-start gap-6 rounded-xl bg-yellow-300 p-6 text-xl text-neutral-900"
        onSubmit={this.addTask.bind(this)}
      >
        <div className="flex flex-col gap-3">
          <label className="text-4xl" htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input
            className="rounded-lg border-2 border-solid border-yellow-200 bg-yellow-200  p-2 text-neutral-900 outline-none duration-500 ease-in-out placeholder:text-neutral-900 hover:border-neutral-900 hover:shadow-2xl"
            type="text"
            name="tarefa"
            value={this.state.tarefa}
            onChange={(event) =>
              this.setState({ ...this.state, tarefa: event.target.value })
            }
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
            value={this.state.tempo}
            onChange={(event) =>
              this.setState({ ...this.state, tempo: event.target.value })
            }
            min="00:00:00"
            max="04:00:00"
            required
          />
        </div>
        <Button type="submit">Adicionar</Button>
      </form>
    );
  }
}

export default Form;
