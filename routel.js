const express = require('express');
const router = express.Router();
const Evntpersonal = require('./models/Evntpersonal')
var bcrypt = require('bcryptjs');


router.post('/', function(req, res) {
    var x = false;
    Evntpersonal.findOne({email: req.body.username}).then(user => {
        if(user) {
            if(bcrypt.compareSync(req.body.password, user.password)) {
                req.session.email = user.email;
                // req.session.save();
                res.send({password: false, username: false, flag:true});
            }
            else {
                res.send({password: 'Enter password correctly', username: false, flag:false});
            }
        }
        else {
            res.send({username: 'Username not found', password: false, flag:false});
        }  
    }).catch (error => {
        res.send({password: false, username: error, flag:false});
    })
})



module.exports = router