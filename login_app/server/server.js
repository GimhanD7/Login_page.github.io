const express = require('express') //import express
import cors from 'cors'
//  import express =req.accepts(types);

const app =express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.disable('x-powered-by');//disabled by default
// const port = process.env.PORT || 8070;

const port = 8080;

//get the request
app.get('/', (req, res) =>{
   res.status(201).json("Home General Request");
});


app.listen(port, () => console.log('Servre connected to http://localhost:${port}'));

