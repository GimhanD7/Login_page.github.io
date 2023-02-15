const express = require('express') //import express
import cors from 'cors'
 

const app =express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.disable('x-powered-by');//disabled by default

// const port = 8080;

//get the request
app.get('/', (req, res) =>{
   res.status(201).json("Home General Request");
});

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);
