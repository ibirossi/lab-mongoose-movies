const mongoose = require('mongoose')

//create your schema here

let CelebritySchema = new mongoose.Schema({
    name: String,
    occupation: String, 
    catchPhrase: String,
})

//create your model here
let CelebrityModel = mongoose.model('myCelebrity', CelebritySchema) //1st param= collection 2nd=the schema (above)


// do not forget to export your model
module.exports = CelebrityModel