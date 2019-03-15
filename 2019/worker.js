
function ff (time) {
  return bubbleSort(new Array(parseInt(Math.random() * 10)).fill(1).map(function (i) {
    return Math.random() * 1000
  })).length
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

process.on('message', (msg) => {
  console.log('[Worker] Received message from master: ' + msg)
  process.send(ff())
})
