const mongoose = require('mongoose');
const Cat = require('./models/Cat');

async function main() {

mongoose.set('strictQuery', false)
 await mongoose.connect('mongodb://127.0.0.1:27017/test');
 console.log("Database connected!");

}


const newCat = new Cat({
    "name": "Shoshko",
    "age": 5,
    "breed": "Persian"
})

async function saveCat(name) {
    await newCat.save();
    const data = await Cat.find({name});
    console.log(data);
}

saveCat(newCat.name)

main();