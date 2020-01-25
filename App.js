const express = require('express');
const cors = require('cors');
var bodyParser = require("body-parser");
const session = require('express-session');
const routee = require('./routes/event');
const routel = require('./routes/login');
const routef = require('./routes/form');
const router = require('./routes/register');
const deleteq = require('./routes/delete');
const app = express();
// port no. of server
const port = 5000;
const whiltelist = ['http://localhost:3000'];
const corsOption = {
    credentails: true,
    origin: function(origin, callback) {
        if(whiltelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed By CORS'))
        }
    },credentials: true
}


app.use(bodyParser.json());
app.use(cors(corsOption));

app.use("*", function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin",'http://localhost:3000');
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization ,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "*");
    next();
})

app.use(session({
    key: 'passiskey',
    secret: 'passmusrbesecret',
    saveUninitialized: true,
    resave: 'false'
}))


const aunt = (req, res, next) => {
    if(req.session.email) {
        next();
    }
    else {
        // console.log('stop');
    }
}



// import routes
app.use('/login', routel); 
app.use('/register', router); 
app.use('/form', aunt,routef); 
app.use('/event', aunt, routee); 
app.use('/delete', deleteq); 


app.listen(port, () => {
    console.log('server is running on port' + port);
})



// killall node
