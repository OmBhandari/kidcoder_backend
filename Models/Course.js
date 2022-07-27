const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        photo: {
            type: String,
            required: true
        },
        timing: {
            type: String,
            required: true
        },
        fees: {
            type: String,
            required: true
        },
        srno:{
            type:Number
        }
    }
);
const Course = mongoose.model("courses", schema);
module.exports = Course;