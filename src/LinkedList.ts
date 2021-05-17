import LinkedListNode, { Fn, ListValue } from './LinkedListNode';

export interface INodeList {
  head: LinkedListNode | null;
  // tail: LinkedListNode | null;
}

class LinkedList implements INodeList {
  public head: LinkedListNode | null = null;
  public tail: LinkedListNode | null = null;

  prepend(value: ListValue): this {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    // if (!this.tail) this.tail = newNode;
    return this;
  }

  // append(value: ListValue): this {
  //   const newNode = new LinkedListNode(value);

  //   if (!this.head) {
  //     this.head = newNode;
  //     // this.tail = newNode;

  //     return this;
  //   }

  //   // this.tail.next = newNode;
  //   // this.tail = newNode;

  //   return this;
  // }

  append(value: ListValue): this {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      return this;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
    return this;
  }

  toArray(): LinkedListNode[] {
    const nodes: LinkedListNode[] = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  toString(callback?: Fn): string {
    return (
      this.toArray()
        .map((node) => node.toString(callback))
        .toString()
    );
  }

  find(value?: ListValue): LinkedListNode | null {
    if (!this.head) return null;

    let currentNode = this.head;

    // Перебираем все узлы в поиске значения.
    while (currentNode) {
      // Если указано значение, пробуем сравнить его по значению.
      if (value !== undefined && currentNode.value === value) {
        //МОДИФИФИРУЕМ
        if (currentNode.next && currentNode.next.next) {
          //берем 1
          let tmp = currentNode.next.next.next; // ссилка на null
          [currentNode.next, currentNode.next.next] = [currentNode.next.next, currentNode.next]; // 2 = 3, 3 = 2
          currentNode.next.next.next = tmp;
        }
        return currentNode;
      }

      // Перематываем на один узел вперед.
      currentNode = currentNode.next;
    }

    return null;
  }

  myTask2GetData() {

    if (!this.head) return [];

    let currentNode = this.head;
    let [len, maxLen] = [1, 1];
    while (currentNode) {

      if (currentNode.next && currentNode.value > currentNode.next.value) {
        len++;
      } else {
        if (len > maxLen) maxLen = len;
        len = 1;
      }

      currentNode = currentNode.next;
    }

    currentNode = this.head;
    len = 1;
    let currentStart = this.head;
    const results = [];

    while (currentNode) {

      if (currentNode.next && currentNode.value > currentNode.next.value) {
        len++;
      } else {
        if (len === maxLen) {
          results.push([currentStart, currentNode]);
          currentStart = currentNode.next;
          len = 1;
        }
        currentStart = currentNode.next;
      }
      currentNode = currentNode.next;
    }

    return results.reduce((prev, current) => {
      const newArr = [];
      while (current[0].value !== current[1].value) {
        newArr.push(current[0].value)
        current[0] = current[0].next;
      }
      newArr.push(current[1].value);
      return [...prev, newArr]
    }, []);

  }
}

export default LinkedList;
