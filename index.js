const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.static('static'))

app.get('/', (req, res) => {
  res.sendFile('./index.html', { root: __dirname })
})

app.get('/hello', (req, res) => {
  res.json({ hello: "hello" })
})

app.listen(process.env.PORT || 3000, () => {
  console.log("App running")
})
