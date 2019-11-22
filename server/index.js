const express = require('express')
const app = express()
const config = require('./config')[app.get('env')]
const Database = require('./db')

let db = new Database(config.db.host, config.db.port, config.db.dbName)

app.use(express.static('../client/public'))
app.use(express.static('../client/dist'))

app.get('/', function (req, res) {
    res.sendStatus(200)
})

db.connect(function (err, db) {
    if (err) throw err
    app.listen(config.port, function () {
        console.log(`Server started on port : ${config.port}`)
    })
})