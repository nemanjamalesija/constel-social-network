export default function formatTime(time: number) {
  let minutes: any = Math.round(time / 60);
  let secs: any = Math.round(time % 60);

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  if (secs < 10) {
    secs = '0' + secs;
  }

  return minutes + ':' + secs;
}
