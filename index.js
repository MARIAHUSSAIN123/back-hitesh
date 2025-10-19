require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000   // ✅ Correct PORT handling

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/youtube', (req, res) => {
  res.send('Hello World! welcome to youtube')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)  // ✅ Correct log
})
