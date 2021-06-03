import { hashCode } from './helpers';
import { hashGeneratorType } from './interfaces';

/**
 * 
 * Для мультипликативного хеширования используется следующая формула:
 * h(K) = [M * ((C * K) mod 1)]
 * 
 * Здесь производится умножение ключа на некую константу С, лежащую в интервале [0..1].
 * После этого берется дробная часть этого выражения и умножается на некоторую константу M,
 * выбранную таким образом, чтобы результат не вышел за границы хеш-таблицы
 * Оператор [ ] возвращает наибольшее целое, которое меньше аргумента.
 * 
 * Если константа С выбрана верно, то можно добиться очень хороших результатов, однако,
 * этот выбор сложно сделать.
 * 
**/

const RANDOM_CONSTANT = Math.random();

export const hashGenerator: hashGeneratorType = (data: unknown, size: number) => {

  if (typeof data === 'string' || (typeof data === 'object' && data !== null)) {
    return Math.floor(((hashCode(data.toString()) * RANDOM_CONSTANT) % 1) * size);
  }

  return Math.floor(((Number(data) * RANDOM_CONSTANT) % 1) * size);
}