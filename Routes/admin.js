var express = require("express");
const Teacher = require("../Models/Teacher");
const Course = require("../Models/Course");
const Gallery = require("../Models/Gallery");
const router = express.Router();
let fs = require("fs");

router.post("/login/", async (req, res) => {
    let body = req.body;
    let status = "";
    if (body.data.username == "admin" && body.data.password == "admin") {
        status = "Successful"
    }
    else {
        status = "Failed"
    }
    let data = {
        "data":
        {
            "status": status
        }
    }
    res.end(JSON.stringify(data));
});

/* API for Teachers */

router.post("/saveteacher", async (req, res) => {
    let body = req.body;
    let imagepath = "";
    if(body.data.photo != ""){
        let base64image = body.data.photo.replace(/^data:image\/[A-Za-z]*;base64,/, "");
        imagepath = "teachers/" + Math.random().toString(36).substring(2, 7) + ".png";
        fs.writeFile("public/" + imagepath, base64image, 'base64', function (err) {
            console.log("Error image saving-" + err);
        });
    }
    let teacher = new Teacher({
        name: body.data.name,
        profession: body.data.profession,
        photo: imagepath,
        twitterlink: body.data.twitterlink,
        facebooklink: body.data.facebooklink,
        LinkedInlink: body.data.LinkedInlink
    });
    if(body.data.id == ""){
        teacher.save().then(result => {
            res.end(JSON.stringify({status:"success", data:result}));
        }, err => {
            console.log(err);
            res.end(JSON.stringify({status:"failed", data:err}));
        });
    }
    else {
        result = await Teacher.findByIdAndUpdate(body.data.id,{
            name: body.data.name,
            profession: body.data.profession,
            twitterlink: body.data.twitterlink,
            facebooklink: body.data.facebooklink,
            LinkedInlink: body.data.LinkedInlink
        });
        if(imagepath != "")
        result = await Teacher.findByIdAndUpdate(body.data.id,{
            photo: imagepath
        });
        res.end(JSON.stringify({status:"success", data:result}));
    }

});

router.post("/teachers", async (req, res) => {
    let teachers = await Teacher.find();
    res.json({data:teachers});
});

router.post("/teacher", async (req, res) =>{
    let body = req.body;
    let teachers = await Teacher.findById(body.data.id);
    res.json({data:teachers});
});

router.post("/deleteteacher", async (req, res) =>{
    let body = req.body;
    await Teacher.findByIdAndDelete(body.data.id);
    let data = {
        "data":
        {
            "status": "success"
        }
    }
    res.end(JSON.stringify(data));
});

/* API for Courses */

router.post("/savecourse", async (req, res) => {
    let body = req.body;
    let imagepath = "";
    if(body.data.photo != ""){
        let base64image = body.data.photo.replace(/^data:image\/[A-Za-z]*;base64,/, "");
        imagepath = "courses/" + Math.random().toString(36).substring(2, 7) + ".png";
        fs.writeFile("public/" + imagepath, base64image, 'base64', function (err) {
            console.log("Error image saving-" + err);
        });
    }
    let course = new Course({
        name: body.data.name,
        description: body.data.description,
        photo: imagepath,
        timing: body.data.timing,
        fees: body.data.fees
    });
    if(body.data.id == ""){
        course.save().then(result => {
            res.end(JSON.stringify({status:"success", data:result}));
        }, err => {
            console.log(err);
            res.end(JSON.stringify({status:"failed", data:err}));
        });
    }
    else {
        result = await Course.findByIdAndUpdate(body.data.id,{
            name: body.data.name,
            description: body.data.description,
            timing: body.data.timing,
            fees: body.data.fees
        });
        if(imagepath != "")
        result = await Course.findByIdAndUpdate(body.data.id,{
            photo: imagepath
        });
        res.end(JSON.stringify({status:"success", data:result}));
    }

});

router.post("/courses", async (req, res) => {
    let courses = await Course.find();
    res.json({data:courses});
});

router.post("/course", async (req, res) =>{
    let body = req.body;
    let courses = await Course.findById(body.data.id);
    res.json({data:courses});
});

router.post("/deletecourse", async (req, res) =>{
    let body = req.body;
    await Course.findByIdAndDelete(body.data.id);
    let data = {
        "data":
        {
            "status": "success"
        }
    }
    res.end(JSON.stringify(data));
});

/* API for Gallery */

router.post("/savegallery", async (req, res) => {
    let body = req.body;
    let imagepath = "";
    if(body.data.photo != ""){
        let base64image = body.data.photo.replace(/^data:image\/[A-Za-z]*;base64,/, "");
        imagepath = "gallery/" + Math.random().toString(36).substring(2, 7) + ".png";
        fs.writeFile("public/" + imagepath, base64image, 'base64', function (err) {
            console.log("Error image saving-" + err);
        });
    }
    let gallery = new Gallery({
        name: body.data.name,
        photo: imagepath
    });
    if(body.data.id == ""){
        gallery.save().then(result => {
            res.end(JSON.stringify({status:"success", data:result}));
        }, err => {
            console.log(err);
            res.end(JSON.stringify({status:"failed", data:err}));
        });
    }
    else {
        result = await Gallery.findByIdAndUpdate(body.data.id,{
            name: body.data.name
        });
        if(imagepath != "")
        result = await Gallery.findByIdAndUpdate(body.data.id,{
            photo: imagepath
        });
        res.end(JSON.stringify({status:"success", data:result}));
    }

});

router.post("/galleries", async (req, res) => {
    let galleries = await Gallery.find();
    res.json({data:galleries});
});

router.post("/gallery", async (req, res) =>{
    let body = req.body;
    let galleries = await Gallery.findById(body.data.id);
    res.json({data:galleries});
});

router.post("/deletegallery", async (req, res) =>{
    let body = req.body;
    await Gallery.findByIdAndDelete(body.data.id);
    let data = {
        "data":
        {
            "status": "success"
        }
    }
    res.end(JSON.stringify(data));
});

module.exports = router;