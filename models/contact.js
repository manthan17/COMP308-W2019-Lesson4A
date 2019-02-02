let mongoose = require('mongoose');

//create model class
let contactSchema = mongoose.Schema({
    FirstName: String,
    LastName: String,
    age: Number
},
{
    collection: "first"
});

module.exports = mongoose.model('demo', contactSchema);