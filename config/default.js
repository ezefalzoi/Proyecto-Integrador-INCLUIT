
const config = require('config');
const mongoUser = process.env.MONGO_USER;
const mongoPass = process.env.MONGO_PASSWORD;

module.exports ={
    services: {
        nasa: {
            basepath: "https://api.nasa.gov",
            apod: "/planetary/apod",
            marts: "/mars-photos/api/v1/rovers/"
        }
        
    },
    dataBase:{
        host:`mongodb+srv://${mongoUser}:${mongoPass}@cluster0.khivw.mongodb.net/?retryWrites=true&w=majority`
    },
}  