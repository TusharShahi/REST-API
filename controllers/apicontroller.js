var mongoose = require('mongoose'),
  Item = mongoose.model('items');

exports.showitems = function(req, res) {
  console.log("we are here");
  Item.find({}, function(err, item) {
    console.log(req.body);
    if (err)
      res.send(err);
    res.json(item);
  });
};


exports.additem = function(req, res) {
  var newitem = new Item(req.body);
  console.log(req.body);
  newitem.save(function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};


exports.showdetails = function(req, res) {
  console.log(req.params.itemId)
  Item.find({'itemId' : req.params.itemId}, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};


exports.changedetails = function(req, res) {
  Item.findOneAndUpdate({itemId: req.params.itemId}, req.body, {new: true}, function(err, item) {
    if (err)
      res.send(err);
    res.json(item);
  });
};

exports.deleteitem = function(req, res) {
  Item.remove({
    itemId: req.params.itemId
  }, function(err, item) {
    if (err)
      res.send(err);
    res.json({ message: 'Item successfully deleted' });
  });
};