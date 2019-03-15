function ff (fc) {
  const obj = {}
  obj.__proto__ = fc.prototype
  fc.call(obj)
}

function swap (arr, i, j) {
  const a = arr[i]
  arr[i] = arr[j]
  arr[j] = a
}

function quick (array, left, right) {
  function f1 (arr, l, r) {
    let index = l + 1
    for (let i = index; i <= r; i++) {
      if (arr[i] < arr[l]) {
        swap(arr, i, index)
        index++
      }
    }
    index--
    swap(arr, l, index)
    return index
  }

  return function (arr, l, r) {
    let index
    if (l < r) {
      index = f1(arr, l, r)
      quick(arr, l, index - 1)
      quick(arr, index + 1, r)
    } else {
      return arr
    }
  }(array, left, right)
}

(function () {
  function f1 (name) {
    this.name = name
  }

  f1.prototype.click = function () {
    console.log(this.name)
    return this.name
  }

  function init (Super, sub) {
    const prototype = Object.create(Super.prototype)
    prototype.constructor = sub
    sub.prototype = prototype
  }

  init(f1, f2)
  init(f1, f3)

  function f2 (name) {
    f1.call(this, name)
  }

  function f3 (name) {
    f1.call(this, name)
  }

  new f2(111).click()
  new f3(444).click()
})()

function momo (arr) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j + 1] > arr[j]) {
        swap(arr, j, j + 1)
      }
    }
  }
  return arr
}

function cha (arr, val, low, hig) {
  let index = low + (hig - 1) / 2
  if (arr[index] === val) {
    return index
  } else if (arr[index] > val) {
    return cha(arr, val, low, index - 1)
  } else if (arr[index] < val) {
    return cha(arr, val, index + 1, hig)
  }
}
