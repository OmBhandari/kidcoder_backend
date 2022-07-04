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
        skypelink:{
            type:String,
            required:true
        },
        facebooklink:{
            type:String,
            required:true
        },
        instagramlink:{
            type:String,
            required:true
        }
    }
);
const teachersdata = mongoose.model("teachersdata", schema);
module.exports = teachersdata;