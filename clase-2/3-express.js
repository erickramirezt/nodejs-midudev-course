const ditto = require('./pokemon/ditto.json')
const express = require('express')

const PORT = process.env.PORT ?? 3000

const app = express()
app.disable('x-powered-by')

app.use(express.json())

// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') {
//     return next()
//   }
//   // solo llega acá si es un POST y el content-type es application/json

//   let body = ''

//   req.on('data', (chunk) => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     // mutar la request y meter la información en el req.body
//     req.body = data
//     next()
//   })
// })

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  let body = ''

  req.on('data', (chunk) => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    data.timestamp = Date.now()
    res.status(201).json(data)
  })
})

// la última a la que va a llegar
app.use((req, res, next) => {
  res.status(404).send('<h1>Not found</h1>')
})

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}/`)
})
