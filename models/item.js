var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
    name : String,
   /* description : String,
    owner : String,
	price : Number, */
	itemId : Number

});

module.exports = mongoose.model('items', itemSchema);
