import { hashGenerator } from './hashGenerator';
import HashTable from './HashTable';
// HashTable with Linear Probing technique of collision-resolution.

class HashTableLinearP<T> {
  #table: Array<T>;

  constructor(size: number = 137) {
    this.#table = new Array(size);
    // this._count = 0;
  }

  put(data) {
    let pos = hashGenerator(data.key, this.#table.length);
    // if (this._count >= 137) throw new Error('Больше за длину!');
    if (this.table[pos] === undefined) {
      this.#table[pos] = key;
      this.values[pos] = data;
      this._count++;
    } else {
      while (this.table[pos] !== undefined) {
        pos++;
      }
      this.#table[pos] = key;
      this.values[pos] = data;
      this._count++;
    }
  }

  get(key) {
    const hash = this.hash(key);
    if (hash > -1) {
      for (let i = hash; this.table[i] !== undefined; i++) {
        if (this.table[i] === key) {
          return this.values[i];
        }
      }
    }
    return undefined;
  }

  showDistro() {
    console.log(this.values);
    for (const key in this.table) {
      if (this.table[key] !== undefined) {
        console.log(key, ' : ', this.values[key]);
      }
    }
  }
}

export default HashTableLinearP;
