const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  if (req.url === '/') {
    res.end('<h1>Bienvenido a mi página de inicio</h1>')
  } else if (req.url === '/imagen-super-bonita.webp') {
    fs.readFile('./imagen.webp', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>Internal server error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/webp')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.end('<h1>Bienvenido a mi página de contacto</h1>')
  } else {
    res.statusCode = 404
    res.end('<h1>Página no encontrada</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Server started at http://localhost:${server.address().port}/`)
})
