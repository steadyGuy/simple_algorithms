const DoublyLinkedListNode = require('./DoublyLinkedListNode');

module.exports = class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const newNode = new DoublyLinkedListNode(value, this.head);

    // Переназначаем head на новый узел
    this.head = newNode;

    // Если ещё нет tail, делаем новый узел tail.
    if (!this.tail) {
      this.tail = newNode;
    }

    // Возвращаем весь список.
    return this;
  }

  append(value) {
    const newNode = new DoublyLinkedListNode(value, null, this.tail);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    // Attach new node to the end of linked list.
    this.tail.next = newNode;

    // Set new node to be the tail of linked list.
    this.tail = newNode;

    return this;
  }

  toArray() {
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

  toString(callback) {
    // Сначала создаём массив из всех узлов.
    return (
      this.toArray()
        // На каждом узле вызываем метод toString
        // что бы получить значение в виде строки.
        .map((node) => node.toString(callback))
        // Вызываем метод toString на массиве строк.
        .toString()
    );
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

  deleteTail() {
    const deletedTail = this.tail;

    if (this.head === this.tail) {
      // только одна нода в списке
      this.head = null;
      this.tail = null;

      return deletedTail;
    }

    // Больше одной ноды в списке

    // Вернуться к последнему узлу и удалить «следующую» ссылку для узла перед последним.
    let currentNode = this.head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return deletedTail;
  }
};
