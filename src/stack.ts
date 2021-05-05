import LinkedList from "./LinkedList";
import { Fn, ListValue } from "./LinkedList/LinkedListNode";

interface IStack {
  arr: number[];
  isEmpty(): boolean;
  push(value: number): void;
  pop(): number;
  peek(): number;
  toString(): string;
}

class Stack implements IStack {
  public arr: number[];
  constructor() {
    this.arr = [];
  }

  isEmpty() {
    return !this.arr.length;
  }

  // Возвращает объект, находящийся в начале Stack, без его удаления.
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.arr[0];
  }

  push(value: number) {
    // Вставляет объект как верхний элемент стека Stack.
    this.arr.push(value);
  }

  pop() {
    // Удаляет и возвращает объект, находящийся в начале Stack.
    return this.arr.shift();
  }

  popMin() {
    return Math.min(...this.arr.filter(el => el >= 0));
  }

  toString() {
    return this.arr.toString();
  }
}

export default Stack;