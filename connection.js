const mongoose = require('mongoose');

const url = "mongodb+srv://vijayadashmi999:vijayadatabase777@cluster0.xei4npp.mongodb.net/mern12sept?retryWrites=true&w=majority"

mongoose.connect(url)
.then((result) => {
    console.log('database connected')
}).catch((err) => {
    console.log(err);
});
module.exports = mongoose;