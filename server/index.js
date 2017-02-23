const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const server = require('http').Server(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

app.set('port', process.env.PORT || 3001)


server.listen(app.get('port'), () => {
  console.log(`Express server is running on ${app.get('port')}.`)
})

module.exports = { server, app }
