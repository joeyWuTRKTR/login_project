const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/user-list', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => console.log('Connection Error!'))
db.once('open', () => console.log('MongoDB Connected!'))

module.exports = db