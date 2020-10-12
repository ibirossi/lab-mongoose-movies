const mongoose= require('mongoose')//to allow mongoose to run here
const CelebrityModel = require ('../models/celebrity.model')


//ensure database is connected
require('../configs/db.config')  //make sure path is correct!  needed '..' move out of folder

CelebrityModel.insertMany([
    { name: 'imran',occupation: 'student', catchPhrase:'catch me if you can' },
    { name: 'ross',occupation: 'unemployed', catchPhrase:'I am tired' }, 
    { name: 'lovro',occupation: 'chain smoker', catchPhrase:'its loading' },
    
])                                                      //this is a promise
    .then(() => {
        console.log('Data was added')
        mongoose.connection.close()  //closes connection as task is done.  Three ways of closing connection(choose)
    })

    .catch((err) => {
        console.log('something went wrong',err)
    })