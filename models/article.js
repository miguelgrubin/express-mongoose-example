var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ArticleSchema   = new Schema({
    title: String,
    content: String,
    active: { type: Boolean, default: false },
    publisher: { type: Schema.Types.ObjectId, ref: 'User' },
    modified: { type: Date, default: Date.now },
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Article', ArticleSchema);
