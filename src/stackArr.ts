import { IStack } from './interface';

class StackArray<T> implements IStack<T> {
  private storage: T[] = [];
  private tos: number = -1;

  constructor(private capacity: number = Infinity) { }

  push(item: T): void {
    if (this.tos >= this.capacity - 1) {
      throw new Error("Стек достиг максимальной емкости, вы не можете добавить больше сущностей");
    }

    this.storage[++this.tos] = item;
  }

  pop(): T {
    if (this.tos === -1) {
      throw new Error("Стек пуст, вы не можете удалить сущность");
    }

    this.tos--;
    return this.storage.pop() as T;
    // return this.storage[this.tos--];
  }

  peek(): T {
    if (this.tos === -1) {
      throw new Error("Стек пуст, вы не можете получить сущность");
    }

    return this.storage[this.tos];
  }

  size(): number {
    return this.tos + 1;
  }

  toString(): string {
    return `{
      size: ${this.size()},
      stack: [${this.storage.slice(0, this.size())}]
    }`
  }
}

export default StackArray;
