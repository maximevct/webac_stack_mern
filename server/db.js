const MongoClient = require('mongodb').MongoClient

class Db {
    constructor(host, port, dbName) {
        this.url = `mongodb://${host}:${port}`
        this.dbName = dbName
        this.mongo = new MongoClient(this.url)
        this.client = null
    }

    destructor() {
        this.mongo.close()
    }

    connect(cb) {
        this.mongo.connect((err, client) => {
            if (err)
                cb('Cannot connect to db')
            this.client = client
            cb(null, this.client)
        })
    }
}

module.exports = Db