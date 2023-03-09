import express  from "express";
import cors from 'cors';
import morgan from 'morgan';
import connect from "./database/conn.js";
import router  from './router/route.js';

const app =express()    ;

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');

const port=8080;

//http get request
app.get("/", (req, res) => {
 res.status(201).json("HOME GET Request");
});

//api route
app.use('/api', router)

//start server
app.listen(port,()=>{
    console.log(`Server connected to http://localhost:${port}`);
})
//     try {
//         app.listen(port,()=>{
//             console.log(`Server connected to http://localhost:${port}`);
//         })
//     }
//     catch(error){
//         console.log('Cannot connect to the server');
//     }
//  })
// .catch(error => {console.log("Invalid database connect ....!");

// })






