import LinkedList from './LinkedList';
import DoublyLinkedList from './DoublyLinkedList';

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.append(7);
list.append(8);
list.prepend(0);

console.log('Список: ', list);
console.log('Список в виде массива: ', list.toArray());
console.log('Список значений в виде строки: ', list.toString());

list.find(0);
console.log('первый элемент', list.toString());

list.find(7);
console.log('пред-последний элемент', list.toString());

list.find(8);
console.log('последний элемент', list.toString());

list.find(5);
console.log('середина', list.toString());

// const list = new DoublyLinkedList();
// list.append(1);
// list.append(2);
// list.append(3);
// list.append(4);
// list.append(5);
// list.append(6);
// list.append(7);

// console.log(list.toArray());
// console.log(list.toString());
// console.log(list.find(2));
// console.log('Value', list.find(2).toString());
