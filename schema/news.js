var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var newsSchema = new Schema({
    type: String,
    publisher: String,
    title: String,
    content: String,
    time: Date,
    updateTime: Date
}, {
    collection: 'news'
});

newsSchema.pre('save', function(next) {
  this.time = new Date();
  next();
});

newsSchema.pre('findOneAndUpdate', function() {
  this.update({},{ $set: { updateTime: new Date() } });
});

var News = mongoose.model('News', newsSchema);

module.exports = News;