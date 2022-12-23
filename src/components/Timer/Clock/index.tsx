import { secondToHourMinuteSecond } from "../../common/utils/time";

interface Props {
  time: number | undefined;
}

export default function Clock({ time = 0 }: Props) {
  const hourMinuteSecondString = secondToHourMinuteSecond(time);

  return (
    <div className="bg-gradient-to-r from-yellow-300 to-cyan-400 bg-clip-text text-center text-7xl font-bold tracking-widest text-transparent">
      <span>{hourMinuteSecondString[0]}</span>
      <span>{hourMinuteSecondString[1]}</span>
      <span>:</span>
      <span>{hourMinuteSecondString[3]}</span>
      <span>{hourMinuteSecondString[4]}</span>
      <span>:</span>
      <span>{hourMinuteSecondString[6]}</span>
      <span>{hourMinuteSecondString[7]}</span>
    </div>
  );
}
