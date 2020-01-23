const mongoose = require('./db');
const Schema = mongoose.Schema;


var EvntUser = Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: String,
        required: false
    },
    events: {
        type: [{
                name: {
                    type: String,
                    required: true
                },
                desc: {
                    type: String,
                    required: false
                },
                owner: {
                    type: String,
                    required: false
                },
                guest: {
                    type: [{
                        type: String,
                    }]
                },
                date: {
                    type: String,
                    required: false
                },
                stime: {
                    type: String,
                    required: false
                },
                etime: {
                    type: String,
                    required: false
                },
        }],
        required: true
    }
});

module.exports = Evntpersonal = mongoose.model("Evnt", EvntUser)



// password: {
//     type: {
//         iv: {
//             type: String
//         },
//         encryptedData: {
//             type: String
//         }
//     },
//     required: true
// },