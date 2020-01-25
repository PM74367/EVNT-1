const express = require('express');
const router = express.Router();
const Evntpersonal = require('../models/Evntpersonal')


router.post('/', function(req, res) {
    Evntpersonal.findOne({email: req.body.username}).then(user => {
        res.send({result : user.events, flag:true});
    }).catch(err => {
        res.send({err: err, flag:false});
    })

})


module.exports = router