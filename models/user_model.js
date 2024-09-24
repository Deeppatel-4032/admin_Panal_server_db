const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true,
    },
    Contact : {
        type : Number,
        required : true
    },
    role : {
        type : String,
        required : true
    },
    path : {
        type : String,
        required : true
    }

})

const user_Model = mongoose.model("users", userSchema);

module.exports = user_Model;