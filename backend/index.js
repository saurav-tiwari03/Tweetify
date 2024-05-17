const express = require('express')
require('dotenv').config()
const app = express()

app.use(express.json())

const PORT = process.env.PORT || 4000

app.listen(PORT,() => {
  console.log(`Server listening on ${PORT}`)
})

const router = require('./routes/routes')
app.use('/api/v1',router)

require('./config/database')

app.get('/',(req,res) => {
  res.send(`<h1>Welcome to Tweetify Backend</h1>`)
})
