console.log(require('os').cpus().length)
const fs = require('fs')
const asd = './asd.txt'
fs.watch(asd, { encoding: 'buffer' }, (eventType, filename) => {
  if (filename) {
    console.log(filename)
    // 打印: <Buffer ...>
    fs.writeFile(asd, filename, function (err) {
      if (err) {
        return console.error(err)
      }
      console.log('ok')
    })
  }
})

function ff (time) {
  console.log(bubbleSort(new Array(parseInt(Math.random() * 10000)).fill(1).map(function (i) {
    return Math.random() * 1000
  })).length)
}

function bubbleSort (arr) {
  var len = arr.length
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {        //相邻元素两两对比
        var temp = arr[j + 1]        //元素交换
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

setInterval(ff, 1000)
