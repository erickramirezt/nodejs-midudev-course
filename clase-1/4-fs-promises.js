// Esto sólo en los módulos nativos
// que no tienen promesas
// const { promisify } = require('node:util')
// const readFilePromise = promisify(fs.readFile)

const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8').then(data => {
  console.log('primer texto:', data)
})

console.log('Hacer cosas mientras uno lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8').then(data => {
  console.log('segundo texto:', data)
})
