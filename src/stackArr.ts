import LinkedList from "./LinkedList";
import { Fn, ListValue } from "./LinkedList/LinkedListNode";

interface IStack {
  linkedList: LinkedList;
  isEmpty(): boolean;
  push(value: number): void;
  pop(): ListValue;
  peek(): ListValue;
  toArray(): number[];
  toString(callback?: Fn): string;
}

class Stack implements IStack {
  public linkedList: LinkedList;
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() {
    return !this.linkedList.head;
  }

  // Возвращает объект, находящийся в начале Stack, без его удаления.
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.linkedList.head.value;
  }

  push(value: number) {
    // Вставляет объект как верхний элемент стека Stack.
    this.linkedList.prepend(value);
  }

  pop() {
    // Удаляет и возвращает объект, находящийся в начале Stack.
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  popMin() {
    let current = this.linkedList.head;
    const minPositive = [];

    if (!current) return NaN;
    if (current === this.linkedList.tail) return this.linkedList.delete(current.value).value < 0 ? NaN : current.value;

    while (current.next) {
      if (current.value >= 0) minPositive.push(current.value)
      current = current.next;
    }
    let res = this.linkedList.delete(Math.min(...minPositive));
    return res === null ? NaN : res.value;
  }

  toArray(): number[] {
    return this.linkedList
      .toArray()
      .map((linkedListNode) => linkedListNode.value) as number[];
  }

  toString(callback) {
    return this.linkedList.toString(callback);
  }
}

export default Stack;