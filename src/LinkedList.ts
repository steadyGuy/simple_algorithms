export class LinkedList<T> {
  public head: ListNode<T> | null = null;
  public size: number = 0;

  prepend(value: T): ListNode<T> {
    const newNode = new ListNode<T>(value, this.head);

    this.head = newNode;
    this.size++;

    return this.head;
  }

  toArray(): ListNode<T>[] {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  deleteHead() {
    if (!this.head) return null;

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
    }
    this.size--;
    return deletedHead;
  }

}

export class ListNode<T> {
  constructor(public value: T, public next: ListNode<T> | null = null) { };

  toString() {
    return this.value;
  }
}