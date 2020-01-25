const express = require('express');
const router = express.Router();
const validateRegisterInput = require('../validation/Register');
const Evntpersonal = require('../models/Evntpersonal')
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hash;



router.post('/', function(req, res) {
    const x = validateRegisterInput(req.body);
    if(x.isValid === true) {
        Evntpersonal.findOne({email: req.body.email}).then(user => {
            if(user) {
                res.send({unique: 'Email already exists',err: false, flag:false});
            }
            else {
                hash = bcrypt.hashSync(req.body.password1, salt); 
                const newrecord = new Evntpersonal({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    password: hash,
                    admin: false,
                    islooged: false,
                });
        
                newrecord.save().then(data => {
                    res.send({err: false, unique: false, flag:true});
                }).catch(err => {
                    throw err;
                })
            }
        }).catch(error => {
            res.send({err: error, unique: false, flag:false});
        })

    }
    else {
        res.send({err: x.errors.password, unique: false, flag:false});
    }
})

module.exports = router