const {Schema, model} = require('../connection');

const myschema = new Schema({
    //key value pairs
    fullname : String,
    bio : String,
    facebook : String,
    linkedin : String,
    image : String,
    skills : String,
    createdAt : Date
   
});

module.exports = model( 'portfolio', myschema);