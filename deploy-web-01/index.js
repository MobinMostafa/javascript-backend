
require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('<h1>Login form </h1>')
})

app.get('/about', (req,res) => {
    res.send("<h1> This is about page </h1>")
}) 

app.get("/contact", (req, res) => {
    res.send("<h1> This is contact page </h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
