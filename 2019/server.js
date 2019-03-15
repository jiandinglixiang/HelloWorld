(async function () {
  const express = require('express')()
  const http = require('https')
  express.use('/sns/oauth2/access_token', function (request, ress) {
    const url = `https://api.weixin.qq.com${ request.url }`
    console.log(url)
    http.request({
        url,
        json: true
      },
      function (err, res, resbody) {
        console.log(1, err)
        if (err) return
        ress.json(resbody)
      })
  })
  express.listen(80)
  // http.createServer(function (request, req) {
  //   const path = new URL(request.url, 'http://172.16.3.30:6161/')
  //   const path1 = path.searchParams.get('path')
  //   path.searchParams.delete('path')
  //   https.request({
  //     protocol: 'https:',
  //     host: 'api.weixin.qq.com',
  //     method: 'GET',
  //     path: `${ path1 }?${ path.searchParams.toString() }`
  //   }, function (ress) {
  //     console.log(ress)
  //     ress.setEncoding('utf8')
  //     ress.on('data', (chunk) => {
  //       console.log(`响应主体: ${ chunk }`)
  //       req.write(chunk)
  //       req.end()
  //     })
  //   })
  //   // req.write(`chunk`)
  //   // req.end()
  // }).listen(80)
})()
