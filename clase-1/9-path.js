const http = require('node:http')
const { findAvailablePort } = require('./10-free-port.js')

console.log(process.env)

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hello Node.js')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`Server started at http://localhost:${port}/`)
  })
})

// server.listen(0, () => {
//   console.log(`Server started at http://localhost:${server.address().port}/`)
// })
