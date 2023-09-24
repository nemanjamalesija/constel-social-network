export default function formatTime(secs: number) {
  const minutes = Math.round(secs / 60);
  const seconds = Math.round(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${returnedSeconds}`;
}
