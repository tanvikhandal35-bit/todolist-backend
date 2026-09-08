const mongoose = require('mongoose')
const schema = mongoose.Schema({
    text: String
})
const schemamodel = mongoose.model('mydata', schema)
module.exports = schemamodel