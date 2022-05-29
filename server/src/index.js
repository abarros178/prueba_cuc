const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const estudiantesRoutes=require('./routes/estudiantes');
const profesoesRoutes=require('./routes/profesores');
const asignaturasRoutes=require('./routes/asignaturas');
const clasesRoutes=require('./routes/clases');
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8000;

//mongosb connect
mongoose.connect(process.env.MONGODB_URI).then(()=>console.log("Connected mongodb Atlas")).catch((error)=>console.error(error));

//middleware
app.use(express.json());
app.use(cors())
app.use('/api',estudiantesRoutes);
app.use('/api',profesoesRoutes);
app.use('/api',asignaturasRoutes);
app.use('/api',clasesRoutes);



//Routes-----------------------------------------------------------------
app.get('/', (req, res) => {
    res.send('welcome to my API')
})


//Server running----------------------------------------------------------
app.listen(port, () => {
    console.log('Server running on port', port)
})