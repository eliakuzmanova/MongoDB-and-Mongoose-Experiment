const mongoose = require('mongoose');

const catsSchema = new mongoose.Schema({
    "name": {
        "type":String,
        "required": true
    },
    "age": Number,
    "breed": {
        "type" : String,
        "enum": ["EKH", "British", "Persian", "Angora"]
    }
})

const Cat = mongoose.model("Cat", catsSchema)

module.exports = Cat