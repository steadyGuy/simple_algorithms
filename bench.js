import mergeSort from './mergeSort.js'
import smoothSort from './smoothSort.js'
import fs from 'fs'


const arrays = JSON.parse(fs.readFileSync('./fixtures/arrays.json'))

const getBenchmark = (name, func, array) => {
  let start = new Date
  const arr = func(array)
  // console.log(arr)
  let end = new Date
  console.log(name, ':', end - start, 'ms');
}
console.log('\n')

getBenchmark('Smooth sort 20 random elements', smoothSort, arrays[20].randomly.slice(0))
getBenchmark('Smooth sort 20 sorted elements', smoothSort, arrays[20].sorted.slice(0))
getBenchmark('Smooth sort 20 reverse sorted elements', smoothSort, arrays[20].reversed.slice(0))


getBenchmark('Smooth sort 5000 random elements', smoothSort, arrays[5000].randomly.slice(0))
getBenchmark('Smooth sort 5000 sorted elements', smoothSort, arrays[5000].sorted.slice(0))
getBenchmark('Smooth sort 5000 reverse sorted elements', smoothSort, arrays[5000].reversed.slice(0))

getBenchmark('Smooth sort 50000 random elements', smoothSort, arrays[50000].randomly.slice(0))
getBenchmark('Smooth sort 50000 sorted elements', smoothSort, arrays[50000].sorted.slice(0))
getBenchmark('Smooth sort 50000 reverse sorted elements', smoothSort, arrays[50000].reversed.slice(0))


getBenchmark('Smooth sort 500000 random elements', smoothSort, arrays[500000].randomly.slice(0))
getBenchmark('Smooth sort 500000 sorted elements', smoothSort, arrays[500000].sorted.slice(0))
getBenchmark('Smooth sort 500000 reverse sorted elements', smoothSort, arrays[500000].reversed.slice(0))

getBenchmark('Smooth sort 5000000 random elements', smoothSort, arrays[5000000].randomly.slice(0))
getBenchmark('Smooth sort 5000000 sorted elements', smoothSort, arrays[5000000].sorted.slice(0))
getBenchmark('Smooth sort 5000000 reverse sorted elements', smoothSort, arrays[5000000].reversed.slice(0))

getBenchmark('Merge sort 20 random elements', mergeSort, arrays[20].randomly.slice(0))
getBenchmark('Merge sort 20 sorted elements', mergeSort, arrays[20].sorted.slice(0))
getBenchmark('Merge sort 20 reverse sorted elements', mergeSort, arrays[20].reversed.slice(0))


getBenchmark('Merge sort 5000 random elements', mergeSort, arrays[5000].randomly.slice(0))
getBenchmark('Merge sort 5000 sorted elements', mergeSort, arrays[5000].sorted.slice(0))
getBenchmark('Merge sort 5000 reverse sorted elements', mergeSort, arrays[5000].reversed.slice(0))

getBenchmark('Merge sort 50000 random elements', mergeSort, arrays[50000].randomly.slice(0))
getBenchmark('Merge sort 50000 sorted elements', mergeSort, arrays[50000].sorted.slice(0))
getBenchmark('Merge sort 50000 reverse sorted elements', mergeSort, arrays[50000].reversed.slice(0))


getBenchmark('Merge sort 500000 random elements', mergeSort, arrays[500000].randomly.slice(0))
getBenchmark('Merge sort 500000 sorted elements', mergeSort, arrays[500000].sorted.slice(0))
getBenchmark('Merge sort 500000 reverse sorted elements', mergeSort, arrays[500000].reversed.slice(0))

getBenchmark('Merge sort 5000000 random elements', mergeSort, arrays[5000000].randomly.slice(0))
getBenchmark('Merge sort 5000000 sorted elements', mergeSort, arrays[5000000].sorted.slice(0))
getBenchmark('Merge sort 5000000 reverse sorted elements', mergeSort, arrays[5000000].reversed.slice(0))