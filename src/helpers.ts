export const getRandom = (min: number, max: number) => {
  let rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
}

// https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
// Java’s String.hashCode()
export const hashCode = (str: string) => {
  let hash = 0, i, chr;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
    // hash += str.charCodeAt(i);
  }
  // console.log(hash);
  return Math.abs(hash);
};