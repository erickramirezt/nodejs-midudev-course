const http = require('node:http')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request received', req.url)
  res.end('Hello Node.js')
})

server.listen(desiredPort, () => {
  console.log(`Server started at http://localhost:${server.address().port}/`)
})
