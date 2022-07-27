const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema(
    {
        name:{
            type:String,
            required:true
        },
        photo:{
            type:String,
            required:true
        },
        srno:{
            type:Number
        }  
    }
);
const Gallery = mongoose.model("gallery", schema);
module.exports = Gallery;