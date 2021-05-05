import LinkedListNode, { Fn, ListValue } from './LinkedListNode';

export interface INodeList {
  head: LinkedListNode | null;
  tail: LinkedListNode | null;
}

class LinkedList implements INodeList {
  public head: LinkedListNode | null = null;
  public tail: LinkedListNode | null = null;

  prepend(value: ListValue): this {
    const newNode = new LinkedListNode(value, this.head);

    // Переназначаем head на новый узел
    this.head = newNode;

    // Если ещё нет tail, делаем новый узел tail.
    if (!this.tail) {
      this.tail = newNode;
    }

    // Возвращаем весь список.
    return this;
  }

  append(value: ListValue): this {
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

  toString(callback?: Fn): string {
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

  find(value?: ListValue): LinkedListNode | null {
    // Если нет head значит список пуст.
    if (!this.head) {
      return null;
    }

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
    let [startNode, endNode] = [this.head, this.head];
    const results = [];

    while (currentNode) {

      if (currentNode.next && currentNode.value > currentNode.next.value) {
        len++;
        endNode = currentNode.next;
      } else {
        if (len === maxLen) {
          results.push([startNode, currentNode]);
          startNode = currentNode.next;
          len = 1;
        }
        startNode = currentNode.next;
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
