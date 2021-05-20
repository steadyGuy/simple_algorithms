type hashGeneratorType = {
  <T>(item: T): number;
}

const hashCode = (str: string) => {
  var hash = 0, i, chr;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

export const hashGenerator: hashGeneratorType = (item) => {
  if (typeof item === 'string' || (typeof item === 'object' && item !== null)) {
    return Math.floor(((hashCode(item.toString()) * this._rand) % 1) * 137);
  } else {
    return Math.floor(((Number(item) * this._rand) % 1) * 137);
  }
}