const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send("Hello World")
})

app.listen(process.env.port || 400, ({ url }) => {
  console.log(`App running at ${ url }`)
})
