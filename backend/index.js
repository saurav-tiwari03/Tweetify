const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()

app.use(express.json())
app.use(cors());

const PORT = process.env.PORT || 4000

app.listen(PORT,() => {
  console.log(`Server listening on ${PORT}`)
})

const router = require('./routes/route')
app.use('/api/v1',router)

require('./config/database')

app.get('/',(req,res) => {
  res.send(`<h1>Welcome to Tweetify Backend</h1>`)
})
