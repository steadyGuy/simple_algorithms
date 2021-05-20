import LinkedListNode, { Fn, Value } from './LinkedListNode';

export interface INodeList {
  head: LinkedListNode | null;
  // tail: LinkedListNode | null;
}

class LinkedList implements INodeList {
  public head: LinkedListNode | null = null;
  public tail: LinkedListNode | null = null;

  prepend(value: Value): this {
    const newNode = new LinkedListNode(value, this.head);

    // Переназначаем head на новый узел
    this.head = newNode;

    // // Если ещё нет tail, делаем новый узел tail.
    // if (!this.tail) {
    //   this.tail = newNode;
    // }

    // Возвращаем весь список.
    return this;
  }

  append(value: Value): this {
    // Создаём новый узел.
    const newNode = new LinkedListNode(value);

    // Если нет head или tail, делаем новым узлом head и tail.
    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }
    // Присоединяем новый узел к концу связного списка.
    // Берём последний узел и указываем, что его next будет новым узлом.
    this.tail.next = newNode;

    // Переназначаем tail на новый узел.
    this.tail = newNode;

    return this;
  }

  toArray(): LinkedListNode[] {
    const nodes = [];

    let currentNode = this.head;

    // Перебираем все узлы и добавляем в массив.
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    // Возвращаем массив из всех узлов.
    return nodes;
  }

  toString(): string {
    // Сначала создаём массив из всех узлов.
    return (
      this.toArray()
        // На каждом узле вызываем метод toString
        // что бы получить значение в виде строки.
        .map((node) => node.toString())
        // Вызываем метод toString на массиве строк.
        .toString()
    );
  }

  deleteHead(): LinkedListNode {
    if (!this.head) return null;

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      // this.tail = null;
    }

    return deletedHead;
  }

  delete(value: Value) {
    if (!this.head) return null;

    let deletedNode: LinkedListNode = null;

    while (this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    // Если нужно удалить хвост.
    // if (this.tail.value === value) {
    //   this.tail = currentNode;
    // }

    return deletedNode;
  }

}

export default LinkedList;
