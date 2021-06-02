import { IStack } from './interface';
import { LinkedList, ListNode } from './LinkedList';

class StackList<T> implements IStack<T> {
  private storage: LinkedList<T> = new LinkedList<T>();
  private topEntity: ListNode<T> | null = this.storage.head;

  constructor(private capacity: number = Infinity) { }

  push(item: T): void {
    if (this.storage.size >= this.capacity) {
      throw Error("Стек достиг максимальной емкости, вы не можете добавить больше сущностей");
    }

    this.topEntity = this.storage.prepend(item);
  }

  pop(): T {
    if (this.topEntity === null) {
      throw Error("Стек пуст, вы не можете удалить сущность");
    }

    let deleted = this.storage.deleteHead();
    this.topEntity = deleted.next;
    return deleted?.value as T;
  }

  peek(): T {
    if (this.topEntity === null) {
      throw new Error("Стек пуст, вы не можете получить сущность");
    }

    return this.topEntity.value;
  }

  size(): number {
    return this.storage.size;
  }

  toString(): string {
    return `{
      size: ${this.size()},
      stack: [${this.storage.toArray().slice(0, this.size()).map(item => item.value).reverse()}]
    }`
  }

}

export default StackList;
