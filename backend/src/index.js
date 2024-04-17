import express from 'express';
const app = express();
import { get, post, put, remove } from './controller/student.controller.js'
import mongoose from './db/db.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const port = 8080;

//middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//cors
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));


//routes
app.get("/student-list", get);
app.post('/student-list',post);
app.put('/student-list/:id',put);
app.delete('/student-list/:id',remove);



app.listen(port, ()=>{
    console.log(`⚙️  Server is runngin on the port ${port}`);
}); 