export default function formatTime(time: number) {
  const minutes = Math.round(time / 60);
  const secs = Math.round(time % 60);

  const paddedMinutes = minutes < 10 ? '0' + minutes : minutes.toString();
  const paddedSeconds = secs < 10 ? '0' + secs : secs.toString();

  return paddedMinutes + ':' + paddedSeconds;
}
