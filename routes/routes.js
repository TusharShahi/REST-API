var verifyToken = require('./verifytoken.js');

module.exports = function(app) {
  
  var mystore = require('../controllers/apicontroller');
  var startpage = require('../controllers/startpagecontroller');

 
  app.route('/login')
  	.post(startpage.login);

 /* app.route('/signup')
  	.post(startpage.signup);
*/
 app.use('/token',verifyToken);

  app.route('/token/home')
    .get(mystore.showitems)
    .post(mystore.additem);



  app.route('/token/home/:itemId')
    .get(mystore.showdetails)
    .put(mystore.changedetails)
    .delete(mystore.deleteitem);


};