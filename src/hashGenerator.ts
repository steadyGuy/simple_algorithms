type hashGeneratorType = {
  <T>(item: T, size: number): number;
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

const RANDOM_CONSTANT = Math.random();

export const hashGenerator: hashGeneratorType = (data: unknown, size: number) => {
  if (typeof data === 'string' || (typeof data === 'object' && data !== null)) {
    return Math.floor(((hashCode(data.toString()) * RANDOM_CONSTANT) % 1) * size);
  }

  return Math.floor(((Number(data) * RANDOM_CONSTANT) % 1) * size);
}

// 2. Організувати хеш - таблицю з відкритою адресацією, використовуючи метод пошуку і вставки по ключу.
// Для формування хеш - адреси використовувати хеш - функцію отриману методом множення і процедуру лінійного впорядкування 
// для вирішення колізії.