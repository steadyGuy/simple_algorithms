export type ListValue = number | string | { [key: string]: any };

export interface INode {
  value: ListValue;
  next: LinkedListNode | null;
  toString(fn?: Fn): string;
}

export type Fn = (value: { [key: string]: any }) => string;

class LinkedListNode implements INode {

  constructor(public value: ListValue, public next: LinkedListNode | null = null) { };

  toString(callback: Fn): string {
    return callback ? callback(this.value as { [ket: string]: any }) : `${this.value}`;
  }
}

export default LinkedListNode;
