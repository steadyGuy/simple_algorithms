import HashTableLinearP from './HashTableLinearP';
import faker from 'faker';
const table = new HashTableLinearP<string, string>(20);

for (let i = 0; i < 10; i++) {
  table.put(faker.address.city(), faker.name.findName());
}

table.showInConsole('PHONE/NAME');