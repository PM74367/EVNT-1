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
                  user: 'evntinc@gmail.com',
                  pass: 'evnt@1234'
                }
            });
        
            var mailOptions = {
                from: 'evntinc@gmail.com',
                to: `${user.email}`,
                subject: `${Event[0].name}`,
                html : `<h1>hi ${user.first_name} </h1><p> ${first_name} is organising an event on ${Event[0].date} <br>
                 Timing: ${Event[0].stime} to ${Event[0].etime} <br> Description: ${Event[0].desc} <br> Venue: Evnt Club, Turing Block, Chitkara University, Chandigarh-Patiala Highway (NH-64) </p> `
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
    let y = null;
    let x = null;
    var times = req.body.stime.slice(16, 21);
    var timee = req.body.etime.slice(16, 21);
    var x1 = parseInt(times);
    var y1 = parseInt(timee);

    if(x1 > 12) {
        x1 = (x1 - 12).toString();
        x1 = x1.concat(req.body.stime.slice(18, 21));
        x1 = x1.concat(' PM');
        times = x1;
    }
    else {
        times = times.concat(' AM');
    }

    if(y1 > 12) {
        y1 = (y1 - 12).toString();
        y1 = y1.concat(req.body.etime.slice(18, 21));
        y1 = y1.concat(' PM');
        timee = y1;
    }  
    else {
        timee = timee.concat(' AM');
    }
    Evntpersonal.findOne({email: req.body.username}).then(user => { 
        if(user) {
            var Event = [{name: req.body.ename, desc: req.body.msg, owner: req.body.username,
                date: req.body.date, stime: times, etime: timee}];
            
            mailer(Event, user.first_name);
            

            x = user.events;
            x = x.concat(Event);
            y = user
            Evntpersonal.findOneAndUpdate({email:req.body.username}, {$set: {first_name: y.first_name,
                last_name: y.last_name, email: y.email,password: y.password,admin: y.admin,events: x}}).
            then(() => {
                    res.send({err: false, flag:true})
            })
            .catch(err => {
                res.send({err: err, flag:false});
            })
        }
        else {
            console.log('else');
        }
    }).catch(err => {
        res.send({err: err, flag:false});
    })

})


module.exports = router