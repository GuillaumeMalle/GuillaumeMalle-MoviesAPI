const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/moviesdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to movies DB...');
}).catch((err) => {
    console.error(`Failed to connect to movies DB... ${err}`);
});

module.exports.Movie = require('./movie');