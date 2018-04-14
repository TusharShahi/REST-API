var jwt = require('jsonwebtoken');

module.exports = function(req,res,next) {
  //  console.log(req.headers);
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
    if (token) {
    // verifies secret and checks exp
        jwt.verify(token, 'supersecret', function(err, decoded) {
            if (err) { //failed verification.
           //     console.log('token is ' + token);
             //   console.log(err);
                return res.json({"error": true});
            }
            //we find our token using x-access-token
            console.log('token is ' + token);
//            req.decoded = decoded;
            next(); //no error, proceed
        });
    } else {
        // forbidden without token
                        //console.log('token is not there');
                        //console.log(req.body);
                        //console.log(req);
        return res.status(403).send({
            "error": true,
            "message" : "no token provided"
        });
    }
}