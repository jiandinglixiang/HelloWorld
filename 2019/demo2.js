function f (fc) {
// new 做了什么
  const obj2 = {}
  obj2.__proto__ = fc.prototype
  fc.call(obj)
}

function f1 (arr) {
  // 冒泡排序
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        f2(arr, j, j + 1)
      }
    }
  }
  return arr
}

(function () {
  // 寄生组合继承
  function f (name) {
    this.name = name
  }

  f.prototype.click = function () {
    console.log(this.name)
    return this.name
  }

  function init (sup, fc) {
    const prototype = Object.create(sup.prototype)
    prototype.constructor = fc
    fc.prototype = prototype
  }

  function f5 (name) {
    f.call(this, name)
  }

  init(f, f5)
  new f5('名字').click()
})()

function f3 (arr, val, low, hig) {
  let index = low + (hig - 1) / 2
  if (arr[index] === val) {
    return index
  } else if (arr[index] > val) {
    index--
    return f3(arr, val, low, index)
  } else if (arr[index] < val) {
    index++
    return f3(arr, val, index, hig)
  }
}

function f2 (arr, l, r) {
  const q = arr[l]
  arr[l] = arr[r]
  arr[r] = q
}

function f4 (arr, l, r) {
  let index = l + 1//基准
  for (let i = index; i <= r; i++) {
    if (arr[i] < arr[l]) {
      f2(arr, i, index)
      index++
    }
  }
  index--
  f2(arr, l, index)
  return index
}

function quick (arr, l, r) {
  let index
  if (l < r) {
    index = f4(arr, l, r)
    quick(arr, l, index - 1)
    quick(arr, index + 1, r)
  } else {
    return arr
  }
}

quick([1, 2, 8, 4, 745, 2, 7, 122, 653, 65], 0, [1, 2, 8, 4, 745, 2, 7, 122, 653, 65].length - 1)
