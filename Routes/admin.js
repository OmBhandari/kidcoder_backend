var express = require("express");
var bodyparser = require("body-parser");
const { json } = require("body-parser");
const teachersdata = require("../Models/teachersdata");
var jsonparser = bodyparser.json();
const router = express.Router();

router.post("/login/", async(req, res)=>{
    let body = req.body;
    let status = "";
    if(body.data.username == "admin" && body.data.password == "admin")
    {
        status = "Successful"
    }
    else{
        status = "Failed"
    }
    let data = {
        "data":
        {
            "status" : status
        }
    }
    res.end(JSON.stringify(data));
});

router.post("/saveteachersdata", async(req, res)=>{
    let body = req.body;
    let teacher = new teachersdata({
        name : body.data.name,
        profession : body.data.profession,
        photo : body.data.photo,
        skypelink : body.data.skypelink,
        facebooklink : body.data.facebooklink,
        instagramlink : body.data.instagramlink,
    });
    teacher.save().then(result=>{
        res.end(JSON.stringify(result));
    },err=>{
        res.end(JSON.stringify(err));
    });
});

module.exports= router;