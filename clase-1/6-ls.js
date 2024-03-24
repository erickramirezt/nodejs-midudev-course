const fs = require('node:fs/promises')

fs.readdir('.')
  .then((files) => {
    for (const file of files) {
      console.log(file)
    }
  })
  .catch((err) => {
    if (err) {
      console.error('Error:', err)
      return
    }
  })
