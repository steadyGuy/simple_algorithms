export type hashGeneratorType = {
  <T>(item: T, size: number): number
  <T>(...items: T[]): number
}

export interface IHashTable<K, V> {
  get(key: K): V;
  put(key: K, value: V): void;
}

// interface ControlsMap {
//   [key: string]: AbstractControl;
// }