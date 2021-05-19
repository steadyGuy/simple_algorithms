import LinkedList from "./LinkedList";

export interface IStack {
  stack: LinkedList | Array<number>;
  isEmpty(): boolean;
  push(value: number): void;
  pop(): number;
  peek(): number;
  toArray?(): number[];
  toString(): string;
}

class Stack implements IStack {
  public stack: LinkedList;
  constructor() {
    this.stack = new LinkedList();
  }

  isEmpty() {
    return !this.stack.head;
  }

  // Возвращает объект, находящийся в начале Stack, без его удаления.
  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.stack.head.value;
  }

  push(value: number) {
    // Вставляет объект как верхний элемент стека Stack.
    this.stack.prepend(value);
  }

  pop() {
    // Удаляет и возвращает объект, находящийся в начале Stack.
    const removedHead = this.stack.deleteHead();
    return removedHead ? removedHead.value : null;
  }

  popMin() {
    let current = this.stack.head;
    const minPositive = [];

    if (!current) return NaN;
    if (current === this.stack.tail) return this.stack.delete(current.value).value < 0 ? NaN : current.value;

    while (current.next) {
      if (current.value >= 0) minPositive.push(current.value)
      current = current.next;
    }
    let res = this.stack.delete(Math.min(...minPositive));
    return res === null ? NaN : res.value;
  }

  toArray(): number[] {
    return this.stack
      .toArray()
      .map((node) => node.value) as number[];
  }

  toString() {
    return this.stack.toString();
  }
}

export default Stack;