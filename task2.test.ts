import LinkedList from './src/LinkedList';

test('если последовательность одна', () => {
  const list = new LinkedList();
  list.append(3);
  list.append(2);
  list.append(1);
  expect(list.myTask2GetData()).toEqual([[3, 2, 1]]);
});

test('Если последовательностей несколько', () => {
  const list = new LinkedList();
  list.append(4);
  list.append(3);
  list.append(1);
  list.append(4);
  list.append(2);
  list.append(1);
  expect(list.myTask2GetData()).toEqual([
    [4, 3, 1],
    [4, 2, 1],
  ]);
});

test('если последовательность одна', () => {
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  expect(list.myTask2GetData()).toEqual([[1], [2], [3]]);
});

test('если список пустой', () => {
  const list = new LinkedList();
  expect(list.myTask2GetData()).toEqual([]);
});

test('Если последовательность по центру', () => {
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.append(4);
  list.append(5);
  list.append(3);
  list.append(2);
  list.append(5);
  list.append(7);
  list.append(9);
  list.append(10);
  list.append(11);
  expect(list.myTask2GetData()).toEqual([[5, 3, 2]]);
});

test('Если последовательность в конце', () => {
  const list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  list.append(3);
  list.append(3);
  list.append(2);
  list.append(1);
  list.append(0);
  expect(list.myTask2GetData()).toEqual([[3, 2, 1, 0]]);
});
