const mongoose = require('mongoose');

let newSchema = new mongoose.Schema({
    fullName:{type: 'string', required: true},
    email:{type:'string', required: true},
    organization:{type:'string', required: true},
    message:{type:'string', required: true},
    date: {type:'date', default: new Date}
})

let userModel = mongoose.model("User", newSchema);



module.exports = userModel