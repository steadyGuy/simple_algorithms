function HashTable(size) {
  const _store = [];
  const _size = size;

  function hash(string) {
    let index = 0;
    for (let i = 0; i < string.length; i++) {
      index += string.charCodeAt(i) * i + 1;
    }

    return index % _size;
  }

  function findMatchIndex(list, key) {
    for (let i = 0; i < list.length; i++) {
      if (list[i][0] === key) return i;
    }
  }

  return {
    dump() {
      console.dir(_store);
    },
    setElement(key, element) {
      if (!_store[hash(key)]) {
        _store[hash(key)] = [
          [key, element]
        ];
      }
      else {
        const list = _store[hash(key)];
        const index = findMatchIndex(list, key);

        if (index) {
          return list[index] = [key, element];
        }

        list.push([key, element]);
      }
    },
    getElement(key) {
      if (_store[hash(key)]) {
        const list = _store[hash(key)];
        const index = findMatchIndex(list, key);
        if (index) return list[index][1]
      }

      return;
    }
  };
}