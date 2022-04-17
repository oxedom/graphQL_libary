const mongoose = require('mongoose')

const bookSchema = mongoose.Schema(
    {
        name: {type: String},
        genre: { type: String},
        authorID: { type: String}
    }
)

module.exports = mongoose.model('Book', bookSchema)    


