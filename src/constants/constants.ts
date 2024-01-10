export const convertTimestampToTime = (timestampInSeconds: number): string => {
  const date = new Date(timestampInSeconds * 1000);

  let hours: string = String(date.getHours()).padStart(2, '0');
  let minutes: string = String(date.getMinutes()).padStart(2, '0');

  return `${hours}:${minutes}`;
};
