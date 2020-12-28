const express = require('express')

const app = express()

app.use(express.static('static'))

app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname })
})

app.listen(process.env.PORT || 3000, () => {
  console.log("App running")
})
