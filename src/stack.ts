import { IStack } from './stackList';

class Stack implements IStack {
  public stack: number[];
  constructor() {
    this.stack = [];
  }

  isEmpty() {
    return !this.stack.length;
  }

  // Возвращает объект, находящийся в начале Stack, без его удаления.
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.stack[0];
  }

  push(value: number) {
    // Вставляет объект как верхний элемент стека Stack.
    this.stack.push(value);
  }

  pop() {
    // Удаляет и возвращает объект, находящийся в начале Stack.
    return this.stack.shift();
  }

  popMin() {
    return Math.min(...this.stack.filter(el => el >= 0));
  }

  toString() {
    return this.stack.toString();
  }

  toArray() {
    return this.stack;
  }
}

export default Stack;