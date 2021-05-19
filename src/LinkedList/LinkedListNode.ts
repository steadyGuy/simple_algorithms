export type Value = number;

export interface INode {
  value: Value;
  next: LinkedListNode | null;
  toString(): number;
}

export type Fn = (value: { [key: string]: any }) => string;

class LinkedListNode implements INode {

  constructor(public value: Value, public next: LinkedListNode | null = null) { };

  toString() {
    return this.value;
  }
}

export default LinkedListNode;
