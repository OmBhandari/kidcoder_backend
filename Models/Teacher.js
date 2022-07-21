const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema(
    {
        name:{
            type:String,
            required:true
        },
        profession:{
            type:String,
            required:true
        },
        photo:{
            type:String,
            required:true
        },
        twitterlink:{
            type:String,
            required:true
        },
        facebooklink:{
            type:String,
            required:true
        },
        LinkedInlink:{
            type:String,
            required:true
        }
    }
);
const Teacher = mongoose.model("teachers", schema);
module.exports = Teacher;