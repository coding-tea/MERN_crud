const mongoose = require('mongoose');

const connect = url => {
    mongoose.connect(url)
    .then(() => console.log('database is connected'))
    .catch(err => console.log('Error! ', err));
};

module.exports = connect;