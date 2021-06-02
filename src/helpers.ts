export const getRandom = (min: number, max: number) => {
  let rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
}