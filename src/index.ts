import Stack from './stack';
import StackArr from './stackArr';
const stack = new StackArr();
const data = [...Array(10)].map(() => -10 + Math.floor(Math.random() * 20 + 1)).forEach((el) => {
  stack.push(el);
})

console.log(stack.toArray());
console.log('Minimal element', stack.popMin());
console.log(stack.toArray());
