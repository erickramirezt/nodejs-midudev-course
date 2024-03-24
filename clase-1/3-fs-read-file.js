const fs = require('node:fs')

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, data) => {
  console.log('primer texto:', data)
})

console.log('Hacer cosas mientras uno lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (err, data) => {
  console.log('segundo texto:', data)
})
