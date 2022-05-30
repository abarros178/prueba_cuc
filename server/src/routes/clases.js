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
    clasesSchema.find().then((data) => res.json(data)).catch((error) => res.json({
        messague: error
    }))
})
//delete a classes
router.delete("/classes/:id", (req, res) => {
    const { params: { id } } = req;
    clasesSchema.remove({ _id: id }).then((data) => res.json(data)).catch((error) => res.json({
        messague: error
    }))
})
module.exports = router;