const mongoose = require('mongoose')

const authorSchema = mongoose.Schema(
    {
        name: {type: String},
        age: { type: Number}
    }
)

module.exports = mongoose.model('Author', authorSchema)    


