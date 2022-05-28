const request = require("request");
const express = require("express");
const router = express.Router();
const profesoresSchema = require('../models/profesores');


//create profesores
let options = {
    url: 'http://consultas.cuc.edu.co/api/v1.0/profesores',
    method: 'GET',
    json: true,
    headers: {
        Authorization: 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJ1c2VybmFtZSI6InBydWViYTIwMjJAY3VjLmVkdS5jbyIsImV4cCI6MTY0OTQ1MzA1NCwiY29ycmVvIjoicHJ1ZWJhMjAyMkBjdWMuZWR1LmNvIn0.MAoFJE2SBgHvp9BS9fyBmb2gZzD0BHGPiyKoAo_uYAQ'
    }
};

 request(options, function (err, r) {

   /* r.body.map(item => {
        const profesores = profesoresSchema(item);*/
       
    ///})
    const profe=profesoresSchema({
        id:61651,
        nombre:"Andres",
        correo:"abarros17@cuc.edu.co",
        telefono:3053008324
    })
    profe.save().then((data) => console.log(data)).catch((error) => console.log(error))


})
module.exports = router;


