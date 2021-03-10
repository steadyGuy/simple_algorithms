const mergeSort1 = (array) => {

  function merge(left, right) {
    var result = [];
    var il = 0;
    var ir = 0;
    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
    }

    //merge what is left
    return result.concat(left.slice(il)).concat(right.slice(ir));
  }
  function mergeSort(items) {
    //well it is only 1 element
    if (items.length < 2) {
      return items;
    }
    var middle = Math.floor(items.length / 2);
    //create two arrays
    var left = items.slice(0, middle);
    var right = items.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
  }
  return mergeSort(array);
};

const mergeSort2 = function (array) {
  function merge(arr, aux, lo, mid, hi) {

    for (var k = lo; k <= hi; k++) {
      aux[k] = arr[k];
    }
    var i = lo;
    var j = mid + 1;
    for (var k = lo; k <= hi; k++) {
      if (i > mid) arr[k] = aux[j++];
      else if (j > hi) arr[k] = aux[i++];
      else if (aux[j] < aux[i]) arr[k] = aux[j++];
      else arr[k] = aux[i++];
    }
  }
  //iter 1: lo=0, hi=7
  //iter 2: lo=0, hi=7
  function sort(array, aux, lo, hi) {
    if (hi <= lo) return;
    let mid = Math.floor(lo + (hi - lo) / 2);

    sort(array, aux, lo, mid);
    sort(array, aux, mid + 1, hi);

    merge(array, aux, lo, mid, hi);
  }

  function mergeSort(array) {
    const arrCopy = array.slice(0);
    sort(array, arrCopy, 0, array.length - 1);
    return array;
  }

  return mergeSort(array);

};

const mergeSort3 = function (arr) {
  if (arr.length > 1) {
    let mid = Math.floor(arr.length / 2)
    let L = arr.slice(0, mid)
    let R = arr.slice(mid)

    mergeSort3(L)
    mergeSort3(R)

    let i = 0, j = 0, k = 0
    // console.log('LEFT: ', L)
    // console.log('RIGHT: ', R)
    // console.log('ARR: ', arr)
    while (i < L.length && j < R.length) {
      if (L[i] < R[j]) {
        arr[k] = L[i]
        i++
      } else {
        arr[k] = R[j]
        j++
      }
      k++
    }

    while (i < L.length) {
      arr[k] = L[i]
      i += 1
      k += 1
    }

    while (j < R.length) {
      arr[k] = R[j]
      j += 1
      k += 1
    }
  }
  return arr
};


export default mergeSort3