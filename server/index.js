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

const mockGrudges = [
    {
        "name": "Joe Schmo",
        "offense": "Looked at me funny",
        "date": "2017-02-16",
        "id": 1487877281983,
        "forgiven": false
    },
    {
        "name": "Sassy Suzy",
        "offense": "Looks funny",
        "date": "2017-02-08",
        "id": 1487877305718,
        "forgiven": true
    },
    {
        "name": "Joshing Josh",
        "offense": "Is too funny",
        "date": "2017-02-08",
        "id": 1487877318793,
        "forgiven": false
    }
]

app.locals.grudges = mockGrudges
const grudges = app.locals.grudges

app.post('/api/grudge', (req, res) => {
  grudges.push(req.body)
  res.json(grudges)
})

app.get('/api/grudge', (req, res) => {
  res.json(grudges)
})

app.set('port', process.env.PORT || 3001)

server.listen(app.get('port'), () => {
  console.log(`Express server is running on ${app.get('port')}.`)
})

module.exports = { server, app }
