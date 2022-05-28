const  request  = require("request");
const express = require("express");
const router = express.Router();
const profesoresSchema = require('../models/profesores');
//const fetch = require('node-fetch');


   //get all students
router.get("/teachers", (req, res) => {
    profesoresSchema.find().then((data) => res.json(data)).catch((error) => res.json({
        messague: error
    }))
})



module.exports = router;