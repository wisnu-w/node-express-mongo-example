const express = require('express')
const bodyParser = require('body-parser')
const { init } = require('./db')
const routes = require('./routes')

const app = express()
app.use(bodyParser.json())
app.use(routes)

init().then(() => {
  console.log('starting server on port 3002')
  app.listen(3002)
})
