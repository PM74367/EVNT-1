const express = require('express');
const router = express.Router();
const Evntpersonal = require('./models/Evntpersonal')


router.post('/', function(req, res) {

    var userx;
    Evntpersonal.findOne({email: req.body.username},(err, response) => {
        userx = response; 
        userx.events = userx.events.filter((x) => {
            if(x._id == req.body._id) {
                return false;
            }
            else {
                return true;
            }
        })

        Evntpersonal.findOneAndUpdate({email:req.body.username}, {$set: userx}).
        then(() => {
                res.send({err: false, flag:true})
        })
        .catch(err => {
            res.send({err: err, flag:false});
        })
    }).catch (error => {
        res.send({err: error, flag:false});
    })

    // console.log(userx);
    // userx.events = userx.events.filter((x) => {
    //     if(x._id == req.body._id) {
    //         return false;
    //     }
    //     else {
    //         return true;
    //     }
    // })

    // console.log(userx);
    // Evntpersonal.findOneAndUpdate({email:req.body.username}, {$set: userx}).
    // then(() => {
    //         res.send({err: false, flag:true})
    // })
    // .catch(err => {
    //     res.send({err: err, flag:false});
    // })
    // Evntpersonal.findOneAndUpdate({email:req.body.username}, {$set: {first_name: userx.first_name,
    //     last_name: userx.last_name, email: userx.email,password: userx.password,admin: userx.admin,events: x}}).
    // then(() => {
    //         res.send({err: false, flag:true})
    // })
    // .catch(err => {
    //     res.send({err: err, flag:false});
    // })
})



module.exports = router