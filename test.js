const mongoose = require('mongoose');

async function main() {

mongoose.set('strictQuery', false)
 await mongoose.connect('mongodb://127.0.0.1:27017/test');
 console.log("Database connected!");

}

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

main();