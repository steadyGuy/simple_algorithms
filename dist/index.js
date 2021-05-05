"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("./LinkedList");
const list = new LinkedList_1.default();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.find(1);
console.log('первый элемент', list.toString());
list.find(5);
console.log('пред-последний элемент', list.toString());
list.find(5);
console.log('последний элемент', list.toString());
list.find(2);
console.log('середина', list.toString());
//# sourceMappingURL=index.js.map