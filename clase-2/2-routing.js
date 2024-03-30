const http = require('http')

// commonjs -> modulos clasicos de node
const dittoJson = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(dittoJson))
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1>Página no encontrada</h1>')
      }
    case 'POST':
      switch (url) {
        case '/pokemon': {
          const body = ''
          break
        }
        case 'otro': {
          const body = ''
          break
        }
        default:
          break
      }
  }
}

const server = http.createServer(processRequest)

server.listen(3000, () => {
  console.log('Server started at http://localhost:3000/')
})
