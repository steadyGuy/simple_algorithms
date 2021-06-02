import { getRandom } from '../helpers';
import StackArr from '../stackArr';
import StackList from '../stackList';
import Task12 from '../task';

const Stack = StackList;

describe('Работа стека', () => {
  const stack = new Stack<number>(5);

  test('Только-что созданный, пустой стек', () => {
    expect(stack.size()).toBe(0);
  });

  test('вставлен элемент со значением 1', () => {
    stack.push(1);
    expect(stack.size()).toBe(1);
  });

  test('возвращает значение 1 после peek и не очищается', () => {
    expect(stack.peek()).toBe(1);
    expect(stack.size() === 0).toBe(false);
  });

  test('опустошен после удаления единственного елемента', () => {
    expect(stack.pop()).toBe(1);
    expect(stack.size() === 0).toBe(true);
  });

  test('заполнен на 5 елементов', () => {
    expect(stack.size() === 0).toBe(true);

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);

    expect(stack.size() === 5).toBe(true);
  });

  test('stack overflow', () => {
    expect(stack.size() === 5).toBe(true);
    expect(() => stack.push(6)).toThrow(
      new Error("Стек достиг максимальной емкости, вы не можете добавить больше сущностей")
    );
  });


  test('пуст после 5 раз использования, возвращает 5, 4, 3, 2, 1', () => {
    expect(stack.size() === 5).toBe(true);

    expect(stack.pop()).toBe(5);
    expect(stack.pop()).toBe(4);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);

    expect(stack.size() === 0).toBe(true);
  });

  test('stack underflow', () => {
    expect(stack.size() === 0).toBe(true);
    console.log('STACKKKK', stack);
    expect(() => stack.pop()).toThrow(
      new Error("Стек пуст, вы не можете удалить сущность")
    );
  });

  test('peek при 0 елементов', () => {
    expect(stack.size() === 0).toBe(true);

    expect(() => stack.peek()).toThrow(
      new Error("Стек пуст, вы не можете получить сущность")
    );
  });

});

describe('Задание 12 в списке', () => {
  let stack = new Stack<number>(5);
  let task = new Task12(stack);

  test('если пустой, ошибка', () => {
    expect(() => task.removeMin(new StackList(5))).toThrow(
      new Error("Невозможно найти удалить минимальный елемент если стек пустой")
    );
  });

  test('если все елементы в списке отрицательные', () => {
    stack = new Stack<number>(10);
    task = new Task12(stack);
    for (let i = 0; i < 10; i++) {
      stack.push(getRandom(-10, -1));
    }
    expect(() => task.removeMin(new StackList(10))).toThrow(
      new Error("Вы пытаетесь найти минимальный положительный элемент среди отрицательных чисел")
    );
  });

  test('если минимальных елементов может быть несколько', () => {
    const expectedStack = new Stack<number>(10);
    expectedStack.push(2);
    expectedStack.push(3);
    expectedStack.push(2);
    expectedStack.push(5);
    stack = new Stack<number>(10);
    task = new Task12(stack);
    [1, 1, 1, 2, 3, 2, 1, 1, 1, 5].forEach(i => stack.push(i))
    expect(task.removeMin(new StackList(10))).toStrictEqual(expectedStack);
  });

  test('если элементы идут от 0 до 100', () => {
    const expectedStack = new Stack<number>(100);
    stack = new Stack<number>(100);
    task = new Task12(stack);
    for (let i = 0, j = 1; i < 100; i++, j++) {
      expectedStack.push(j);
      stack.push(i);
    }
    expectedStack.pop(); // нужно удалить 100-й елемент
    expect(task.removeMin(new StackList(100))).toStrictEqual(expectedStack);
  });

});

describe('Работает ли стек со строками (reverse string with stack)', () => {
  const text = 'Hello, World!';

  const stack = new Stack<string>(text.length);

  test('text is reversed', () => {
    text.split('').forEach(c => stack.push(c));

    let reversed: string[] = [];

    while (stack.size() !== 0) {
      reversed = reversed.concat(stack.pop());
    }

    expect(reversed.join('')).toBe('!dlroW ,olleH');
  });
});