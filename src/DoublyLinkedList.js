import DoublyLinkedListNode from './DoublyLinkedListNode';

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    const newNode = new DoublyLinkedListNode(value, this.head);

    this.head = newNode;

    return this;
  }

  append(value) {
    const newNode = new DoublyLinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      return this;
    }

    let [current, prev] = [this.head, null];
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
    newNode.previous = current;
    return this;
  }

  toArray() {
    const nodes = [];

    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  toString(callback) {
    return this.toArray()
      .map((node) => node.toString(callback))
      .toString();
  }

  find(value) {
    if (!this.head) return null;

    let currentNode = this.head;

    while (currentNode) {
      if (value !== undefined && currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }
}

export default DoublyLinkedList;
