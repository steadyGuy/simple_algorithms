const smoothSort = (arr) => {
  let sizeList = createHeap(arr) //Создаём из массива кучу леонардовых куч
  //console.log('CREATED: ', sizeList)
  sortHeap(arr, sizeList)
  return arr
}

// Leonardo numbers.
const L = [
  1, 1, 3, 5, 9, 15, 25, 41, 67, 109, 177, 287, 465, 753,
  1219, 1973, 3193, 5167, 8361, 13529, 21891, 35421, 57313, 92735,
  150049, 242785, 392835, 635621, 1028457, 1664079, 2692537,
  4356617, 7049155, 11405773, 18454929, 29860703, 48315633, 78176337,
  126491971, 204668309, 331160281, 535828591, 866988873
];

/* 
  * изменяет массив на месте, чтобы создать кучу.
  * возвращает список размеров деревьев леонардо в лесу
*/
function createHeap(arr) {
  let sizeList = []

  for (let heapEnd = 0; heapEnd < arr.length; heapEnd++) {
    sizeList = addNewRoot(sizeList)
    //console.log('sizeList', sizeList)
    // Поменяйте местами корневые узлы деревьев. Return [индекс кучи, индекс размера]
    let [idx, sizeIdx] = fixRoots(arr, sizeList, heapEnd, sizeList.length - 1)
    //console.log('idx', 'sizeIdx', idx, sizeIdx)
    // исправить дерево, которое теперь имеет новый узел
    siftDown(arr, idx, sizeList[sizeIdx])

  }
  return sizeList
}

// обновляет список размеров деревьев леонардо в лесу после 
// добавления нового узла
function addNewRoot(sizeList) {
  // случай 1: Пустой лес. Добавьте дерево L_1.
  if (sizeList.length == 0) {
    sizeList.push(1)
    /*
      случай 2: 
        * Лес с двумя крайними правыми деревьями, 
        * отличающимися по размеру на 1. 
        * Замените последние два дерева размером L_k-1 и L_k-2 
        * на одно дерево размером L_k.
    */
  } else if (sizeList.length > 1 && sizeList[sizeList.length - 2] == sizeList[sizeList.length - 1] + 1) {
    sizeList[sizeList.length - 2] = sizeList[sizeList.length - 2] + 1
    sizeList.pop() //удаялем последний элемент
    // случай 3: Добавляем новое дерево, либо L_1, либо L_0
  } else {
    // случай 1: Самое правое дерево-это дерево L_1. Добавьте дерево L_0.
    if (sizeList[sizeList.length - 1] == 1) {
      sizeList.push(0)
      // случай 2: Самое правое дерево не является деревом L_1. Добавьте дерево L_1.
    } else {
      sizeList.push(1)
    }
  }
  return sizeList
}
//  модифицирует 'кучу' на месте, предполагая, что существует 
// неявная структура кучи Леонардо с деревьями, имеющими размеры 
// в порядке, заданном 'sizes' 
function fixRoots(heap, sizes, startHeapIdx, startSizeIdx) {
  // переменные в этой функции ссылаются на индексы
  let cur = startHeapIdx
  let sizeCur = startSizeIdx

  // продолжаем фиксировать корни, пока мы не окажемся у самого левого корня
  while (sizeCur > 0) {
    let next = cur - L[sizes[sizeCur]]
    // остановиться, если следующий корень не строго больше текущего корня
    if (heap[next] <= heap[cur]) break
    // остановиться, если следующий корень не больше обоих дочерних элементов текущего корня,
    // если эти дочерние элементы существуют, то есть размер текущего дерева не равен 0 или 1.

    if (sizes[sizeCur] > 1) {
      let right = cur - 1
      let left = right - L[sizes[sizeCur] - 2]
      if (heap[next] <= heap[right] || heap[next] <= heap[left]) break
    }

    // меняем текущий корень на следующий корень
    let temp = heap[cur]
    heap[cur] = heap[next]
    heap[next] = temp
    //продолжаем, начиная со следующего корня в качестве текущего корня
    sizeCur = sizeCur - 1
    cur = next
  }
  return [cur, sizeCur]
}

function siftDown(heap, rootIdx, treeSize) {
  let cur = rootIdx
  //console.log('heap, rootIdx, treeSize', heap, rootIdx, treeSize)
  while (treeSize > 1) {
    let right = cur - 1
    let left = cur - 1 - L[treeSize - 2]

    // корень по крайней мере такой же большой, как и оба ребенка

    if (heap[cur] >= heap[left] && heap[cur] >= heap[right]) {
      break
      // правый ребенок по крайней мере такой же большой, как и левый
    } else if (heap[right] >= heap[left]) {
      [heap[cur], heap[right]] = [heap[right], heap[cur]]
      cur = right
      treeSize = treeSize - 2
      // левый ребенок самый большой из трех
    } else {
      [heap[cur], heap[left]] = [heap[left], heap[cur]]
      cur = left
      treeSize = treeSize - 1
    }
  }
}

//сортирует максимальную кучу на месте. требуется список размеров деревьев леонардо в лесу
function sortHeap(heap, sizeList) {
  for (let heapSize = heap.length - 1; heapSize > 0; heapSize--) {
    dequeueMax(heap, sizeList, heapSize)
  }
}

// удаляет максимальное значение из графа
function dequeueMax(heap, sizeList, heapSize) {
  let removedSize = sizeList.pop()
  //случай 1: самое правое дерево имеет один узел
  if (removedSize == 0 || removedSize == 1) {
    let b = 2 + 2// случай 2: самое правое дерево имеет двух детей
  } else {
    // добавить размеры обратно
    sizeList.push(removedSize - 1)
    sizeList.push(removedSize - 2)
    // вычислить индексы левых и правых детей
    let leftIdx = heapSize - L[sizeList[sizeList.length - 1]] - 1
    let rightIdx = heapSize - 1
    let leftSizeIdx = sizeList.length - 2
    let rightSizeIdx = sizeList.length - 1;
    //console.log('leftIdx, rightIdx, leftSizeIdx, rightSizeIdx', leftIdx, rightIdx, leftSizeIdx, rightSizeIdx)
    //console.log('heap, sizeList, heapSize', heap, sizeList, heapSize)
    // fix left child
    let [idx, sizeIdx] = fixRoots(heap, sizeList, leftIdx, leftSizeIdx)
    siftDown(heap, idx, sizeList[sizeIdx]);
    // fix right child
    [idx, sizeIdx] = fixRoots(heap, sizeList, rightIdx, rightSizeIdx)
    siftDown(heap, idx, sizeList[sizeIdx])
  }
}

//console.log(smoothSort([23, 2, 1, 43, 3, 2, -3, 23, 3, 0, -22, -33, 0, 11]))
export default smoothSort