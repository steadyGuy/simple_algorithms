import { IStack } from './interface';

class Task12 {

  protected stack: IStack<number>;

  constructor(stack: IStack<number>) {
    this.stack = stack;
  }

  public removeMin(stack: IStack<number>) {
    const len = this.stack.size();

    if (len === 0) {
      throw new Error("Невозможно найти удалить минимальный елемент если стек пустой");
    }

    let cloneStack: IStack<number> = stack;

    let [current, min] = [0, +Infinity];
    for (let i = 0; i < len; i++) {
      current = this.stack.pop();
      if (current >= 0) {
        min = current < min ? current : min;
      }
      cloneStack.push(current);
    }
    console.log('stackBefore:', cloneStack.toString());
    if (min === Infinity) {
      throw new Error("Вы пытаетесь найти минимальный положительный элемент среди отрицательных чисел");
    }

    for (let i = 0; i < len; i++) {
      current = cloneStack.pop();
      if (current !== min) {
        this.stack.push(current)
      }
    }

    console.log('Min: ', min);
    console.log('stackAfter:', this.stack.toString());
    return this.stack;
  }


}

export default Task12;