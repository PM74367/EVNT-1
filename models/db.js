const mongoose = require('mongoose');
const { mongourl } = require('../config/keys');

mongoose.connect(mongourl,{useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });

module.exports = mongoose;