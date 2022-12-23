export function timeToSecond(time: string) {
  const [hour = "0", minute = "0", second = "0"] = time.split(":");

  const hourInSecond = Number(hour) * 3600;
  const minuteInSecond = Number(minute) * 60;
  return hourInSecond + minuteInSecond + Number(second);
}

export function secondToHourMinuteSecond(second: number) {
  if (second) {
    const result = new Date(second * 1000).toISOString().slice(11, 19)
    
    return result;
  }
  return "00:00:00";
}
