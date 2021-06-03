'use strict';

import HashTableLinearP from './HashTableLinearP';
import faker from 'faker';
const hashTable = new HashTableLinearP<string, string>(1000);

const table = document.getElementById('table');

function createNode() {

  for (let i = 0; i < 100; i++) {
    hashTable.put(faker.address.city(), faker.name.findName());
  }

  let tr = document.createElement('tr');
  let [first, second] = [document.createElement('td'), document.createElement('td')];
  first.innerHTML = faker.address.city();
  second.innerHTML = faker.name.findName();
  tr.append(first, second);
  table.append(tr);
}

createNode();