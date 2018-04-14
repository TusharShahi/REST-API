var mongoose = require('mongoose'),
  User = mongoose.model('users'),
  jwt = require('jsonwebtoken');


exports.login =  function(req,res){
   User.findOne({username: req.body.username}, function(err, user) {
        if (err) {
            res.json({
                type: false,
                data: "Error occured: " + err
            });
        } else {
            console.log(req.body);
            if (user) {
                if(req.body.password == user.password)
                {
               let token = jwt.sign(user.toJSON(), 'supersecret', {
                expiresIn: 2000
                });
                res.json({
                    type : true,
                    data : user,
                    description: 'Sending the Access Token',
                    token: token
                });
            }
            else
            {
            res.json({
                    type: false,
                    data: "Incorrect password"
                });    
               
            }
            } else {
                res.json({
                    type: false,
                    data: "Incorrect username"
                });    
            }
        }
    });
 };