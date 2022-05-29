const express = require("express");
const router = express.Router();
const clasesSchema = require('../models/clases');

//create classes
router.post("/classes", (req, res) => {
    const clases = clasesSchema(req.body);
    clases.save().then((data) => res.json(data)).catch((error) => res.json({
        messague: error
    }))
})

//get all classes
router.get("/classes", (req, res) => {
    estudiantesSchema.find().then((data) => res.json(data)).catch((error) => res.json({
        messague: error
    }))
})
module.exports = router;