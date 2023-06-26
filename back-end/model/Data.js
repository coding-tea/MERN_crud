const mongoose = require('mongoose');

const data = mongoose.model('data', {
    title : String,
    description : String,
    date : {
        type : Date,
        default : new Date()
    }
});

module.exports = data;