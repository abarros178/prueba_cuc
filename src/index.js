const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const estudiantesRoutes=require('./routes/estudiantes');
const profesoesRoutes=require('./routes/profesores');

const app = express();
const port = process.env.PORT || 8000;

//middleware
app.use(express.json());
app.use('/api',estudiantesRoutes);
app.use('/api',profesoesRoutes);



//Routes-----------------------------------------------------------------
app.get('/', (req, res) => {
    res.send('welcome to my API')
})

//mongosb connect
mongoose.connect(process.env.MONGODB_URI).then(()=>console.log("Connected mongodb Atlas")).catch((error)=>console.error(error));

//Server running----------------------------------------------------------
app.listen(port, () => {
    console.log('Server running on port', port)
})