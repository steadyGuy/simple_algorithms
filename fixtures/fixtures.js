import fs from 'fs'
import sort from '../mergeSort.js'

const arrays = {
  20: {
    randomly: [],
    sorted: [],
    reversed: [],
  },
  5000: {
    randomly: [],
    sorted: [],
    reversed: [],
  },
  50000: {
    randomly: [],
    sorted: [],
    reversed: [],
  },
  500000: {
    randomly: [],
    sorted: [],
    reversed: [],
  },
  5000000: {
    randomly: [],
    sorted: [],
    reversed: [],
  },
}

// Data generating

//обмеження в size/2 бо стек переповниться
const mix = 10000, arr = [];

// Set up
for (let i = 0; i < 20; i++) {
  arr[i] = Math.floor(i + Math.random() * mix - mix / 2)
}

arrays[20].randomly = arr.slice(0)
arrays[20].sorted = sort(arr.slice(0))
arrays[20].reversed = sort(arr.slice(0)).reverse()

for (let i = 0; i < 5000; i++) {
  arr[i] = Math.floor(i + Math.random() * mix - mix / 2)
}

arrays[5000].randomly = arr.slice(0)
arrays[5000].sorted = sort(arr.slice(0))
arrays[5000].reversed = sort(arr.slice(0)).reverse()

for (let i = 0; i < 50000; i++) {
  arr[i] = Math.floor(i + Math.random() * mix - mix / 2)
}

arrays[50000].randomly = arr.slice(0)
arrays[50000].sorted = sort(arr.slice(0))
arrays[50000].reversed = sort(arr.slice(0)).reverse()

for (let i = 0; i < 500000; i++) {
  arr[i] = Math.floor(i + Math.random() * mix - mix / 2)
}

arrays[500000].randomly = arr.slice(0)
arrays[500000].sorted = sort(arr.slice(0))
arrays[500000].reversed = sort(arr.slice(0)).reverse()

for (let i = 0; i < 5000000; i++) {
  arr[i] = Math.floor(i + Math.random() * mix - mix / 2)
}

arrays[5000000].randomly = arr.slice(0)
arrays[5000000].sorted = sort(arr.slice(0))
arrays[5000000].reversed = sort(arr.slice(0)).reverse()

fs.writeFileSync('arrays.json', JSON.stringify(arrays, null, 2))