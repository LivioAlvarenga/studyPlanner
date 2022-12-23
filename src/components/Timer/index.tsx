import { useEffect, useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Button from "../Button";
import { timeToSecond } from "../common/utils/time";
import Clock from "./Clock";

interface Props {
  selected: ITarefa | undefined;
}

export default function Timer({ selected }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.tempo) {
      setTime(timeToSecond(selected.tempo));
    }
  }, [selected]);

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <p className="text-center text-4xl">Escolha um card e inicie o cronometro</p>
      <Clock time={time}/>
      <Button hover="hover:bg-red-600">Começar!</Button>
    </div>
  );
}
