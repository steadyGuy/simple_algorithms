import LinkedListNode, { Fn, ListValue } from './LinkedListNode';

class LinkedList {
  public head: LinkedListNode | null = null;

  prepend(value: ListValue): this {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;

    return this;
  }

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

  find(value: ListValue): LinkedListNode | null {
    if (!this.head) return null;

    let currentNode: LinkedListNode | null = this.head;

    while (currentNode) {
      if (currentNode.value === value) {

        if (currentNode.next && currentNode.next.next) {
          let tmp = currentNode.next.next.next;
          [currentNode.next, currentNode.next.next] = [currentNode.next.next, currentNode.next];
          currentNode.next.next.next = tmp;
        }
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  myTask2GetData() {

    if (!this.head) return [];

    let currentNode: LinkedListNode | null = this.head;
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
    let currentStart: LinkedListNode | null = this.head;
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

    return (results).reduce((prev, current) => {
      const newArr = [];
      while (current[0].value !== current[1].value) {
        newArr.push(current[0].value)
        current[0] = current[0].next;
      }
      newArr.push(current[1].value);
      return [...prev, newArr]
    }, []);

  }

  delete(value: ListValue) {
    if (!this.head) return null;

    let deletedNode: LinkedListNode | null = null;

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

  }
}

export default LinkedList;
