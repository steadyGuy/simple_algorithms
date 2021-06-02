import { getRandom } from './helpers';
import { IStack } from './interface';
import StackArray from './stackArr';
import StackList from './stackList';
import Task12 from './task';

const STACK_SIZE = 10;

let stackArray: IStack<number> = new StackArray(STACK_SIZE);
let listStack: IStack<number> = new StackList(STACK_SIZE);

for (let i = 0; i < STACK_SIZE; i++) {
  stackArray.push(i);
  listStack.push(i);
}

let task = new Task12(stackArray);
task.removeMin(new StackArray(STACK_SIZE));

task = new Task12(listStack);
task.removeMin(new StackList(STACK_SIZE));

