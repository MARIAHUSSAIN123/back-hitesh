require('dotenv').config()
const express = require('express')
const app = express()

const PORT = 3000   // ✅ Correct PORT handling

app.get('/', (req, res) => {
  res.send('Hello World! its me maria')
})

app.get('/youtube', (req, res) => {
  res.send('Hello World! welcome to youtube')
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${PORT}`)  // ✅ Correct log
})
