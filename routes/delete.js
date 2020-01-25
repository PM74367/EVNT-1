const express = require('express');
const router = express.Router();
const Evntpersonal = require('../models/Evntpersonal')
var nodemailer = require('nodemailer');


function mailer(Event, first_name) {
    

    Evntpersonal.find({}, function(err, users) {
        users.forEach(function(user) {
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'email@gmail.com',
                  pass: 'password'
                }
            });
        
            var mailOptions = {
                from: 'evntinc@gmail.com',
                to: `${user.email}`,
                subject: `${Event.name}`,
                html : `<h1>hi ${user.first_name} </h1><p> ${first_name} is organising an event on ${Event.date} <br>
                 Timing: ${Event.stime} to ${Event.etime} has been cancelled. Sorry for the inconvenience.<br> Description: ${Event.desc} <br> Venue: Evnt Club, Turing Block, Chitkara University, Chandigarh-Patiala Highway (NH-64) </p> `
            };
        
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
            });
        })
    })


}

router.post('/', function(req, res) {

    var userx;
    var Event;
    Evntpersonal.findOne({email: req.body.username},(err, response) => {
        userx = response; 
        userx.events = userx.events.filter((x) => {
            if(x._id == req.body._id) {
                Event = x;
                return false;
            }
            else {
                return true;
            }
        })

        Evntpersonal.findOneAndUpdate({email:req.body.username}, {$set: userx}).
        then(() => {
                mailer(Event, userx.first_name);
                res.send({err: false, flag:true})
        })
        .catch(err => {
            res.send({err: err, flag:false});
        })
    }).catch (error => {
        res.send({err: error, flag:false});
    })

})



module.exports = router
