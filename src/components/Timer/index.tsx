import { useEffect, useState } from "react";
import { timeToSecond } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import Button from "../Button";
import Clock from "./Clock";

interface Props {
  selected: ITarefa | undefined;
  endTask: () => void;
}

export default function Timer({ selected, endTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.tempo) {
      setTime(timeToSecond(selected.tempo));
    }
  }, [selected]);

  function startCounter(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return startCounter(counter - 1);
      }
      endTask();
    }, 1000);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <p className="text-center text-4xl">Escolha um card e inicie o cronometro</p>
      <Clock time={time} />
      <Button hover="hover:bg-red-600" onClick={() => startCounter(time)}>
        Começar!
      </Button>
    </div>
  );
}
