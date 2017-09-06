var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var loginSchema = new Schema({
    userid: String,
    userpwd: String,
}, {
    collection: 'users'
});

var Login = mongoose.model('users', loginSchema);

module.exports = Login;