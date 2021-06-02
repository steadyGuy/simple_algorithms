export interface IStack<T> {
  push(item: T): void;
  pop(): T;
  peek(): T;
  size(): number;
}

export interface StackNode<T> {
  value: T | null
  next: StackNode<T> | null
}