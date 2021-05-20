import Stack from './stack';
import StackList from './stackList';
const stack = new Stack();

[...Array(10)].map(() => Math.floor(10 + Math.random() * (20 + 1 - 10))).forEach((el) => {
  stack.push(el);
});

// console.log(stack.toString());
console.log(stack.toArray());
console.log('Minimal element', stack.popMin());
// console.log(stack.toString());
console.log(stack.toArray());