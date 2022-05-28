const request = require("request");
const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config();
const router = express.Router();
const profesoresSchema = require('./models/profesores');

//conectar mongodb
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connected mongodb Atlas")).catch((error) => console.error(error));

//create profesores


let options = {
    url: 'http://consultas.cuc.edu.co/api/v1.0/profesores',
    method: 'GET',
    json: true,
    headers: {
        Authorization: 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJ1c2VybmFtZSI6InBydWViYTIwMjJAY3VjLmVkdS5jbyIsImV4cCI6MTY0OTQ1MzA1NCwiY29ycmVvIjoicHJ1ZWJhMjAyMkBjdWMuZWR1LmNvIn0.MAoFJE2SBgHvp9BS9fyBmb2gZzD0BHGPiyKoAo_uYAQ'
    }
};
const profesor = profesoresSchema.find().then(data => {
    if (data.length === 0) {
        request(options, function (err, r) {
            profesoresSchema.create(r.body).then(() => {
                console.log("Profesores guardados")
                mongoose.disconnect();
            }).catch(error => {
                console.log(error)
                mongoose.disconnect();
            });

        })
    } else {
        console.log("Los profesores ya han sido importados")
        mongoose.disconnect();
    }
})

module.exports = router;


