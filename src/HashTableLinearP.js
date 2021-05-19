import HashTable from './HashTable';
// HashTable with Linear Probing technique of collision-resolution.

String.prototype.hashCode = function () {
  var hash = 0,
    i,
    chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr = this.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

class HashTableLinearP {
  constructor() {
    this.table = new Array(137);
    this.values = [];
    // this._count = 0;
    this._rand = Math.random();
  }

  put(key, data) {
    let pos = this.hash(key);
    // if (this._count >= 137) throw new Error('Больше за длину!');
    if (this.table[pos] === undefined) {
      this.table[pos] = key;
      this.values[pos] = data;
      this._count++;
    } else {
      while (this.table[pos] !== undefined) {
        pos++;
      }
      this.table[pos] = key;
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

  hash(item) {
    let hash;
    if (typeof item === 'string') {
      hash = Math.floor(((item.hashCode() * this._rand) % 1) * 137);
    } else {
      hash = Math.floor(((item * this._rand) % 1) * 137);
    }
    return hash;
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
