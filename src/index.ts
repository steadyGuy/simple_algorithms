import HashTable from './HashTable';
import HashTableLinearP from './HashTableLinearP';

const table = new HashTableLinearP();

for (let i = 0; i < 500; i++) {
  table.put({ key: i, value: Math.random() });
}

table.showDistro();
