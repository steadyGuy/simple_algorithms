import { hashGenerator } from './hashGenerator';
import { hashGeneratorType, IHashTable } from './interfaces';
// HashTable with Linear Probing technique of collision-resolution.

class HashTableLinearP<K, V> implements IHashTable<K, V> {
  private table: Array<Map<K, V>>;
  private tableSize = 0;
  private pairCount = 0;
  private hashGenerator = hashGenerator;
  private loadFactor = 0.5;

  constructor(size: number = 137) {
    this.table = new Array(size);
    this.tableSize = size;
  }

  put(key: K, value: V) {
    let hash = this.hashGenerator(key, this.tableSize);
    console.log(hash);
    // console.log('pair', this.table[hash])
    while (hash < this.tableSize) {

      // если нашли ключ в таблице, возвращаем
      if (!this.table[hash]) {
        this.table[hash] = new Map([[key, value]]);
        this.pairCount++;
        return;
      }

      // если следующая ячейка в таблице пустая, значит
      // больше искать смысла
      if (this.table[hash].has(key)) {
        throw new Error('Ячейка с таким ключом уже существует');
      }

      hash++;
    }

    if (this.loadFactor <= this.tableSize / this.pairCount) {
      this.table[++hash] = new Map([[key, value]]);
      this.tableSize += this.tableSize * this.loadFactor;
      console.log('LOAD FACTOR');
      return;
    }

    throw new Error('Таблица заполнена!')

    // if (this._count >= 137) throw new Error('Больше за длину!');
  }

  get(key: K) {
    let hash = this.hashGenerator(key, this.tableSize);
    while (hash < this.tableSize) {

      // если нашли ключ в таблице, возвращаем
      if (this.table[hash].has(key)) {
        return this.table[hash].get(key);
      }

      // если следующая ячейка в таблице пустая, значит
      // больше искать смысла
      if (this.table[hash] === undefined) {
        throw new Error('Ключ не найден в хеш-таблице');
      }

      hash++;
    }

    throw new Error('Ключ не найден в хеш-таблице');
  }

  setHashGenerator(generator: hashGeneratorType) {
    this.hashGenerator = generator;
  }

  showInConsole(title: string) {
    console.log(title.toUpperCase() + ':');
    this.table.forEach(item => {
      if (item !== undefined) {
        let pair = item.entries().next().value;
        console.log(pair[0], ':', pair[1]);
      }
    })
  }
}

export default HashTableLinearP;
