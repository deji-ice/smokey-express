import express from "express";
import { data } from "./data.js";
import cors from 'cors'
import dotenv from 'dotenv/config.js'
import userRoutes from "./src/routes/users.js";
import path from "path";
   
const app = express(); 
const port = 420;

app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({ limit:"50mb", extended: true}));
app.use(cors());
app.use('/api', userRoutes)


// app.get('/home', (req, res)=>{
//     res.send(data)
// })

app.listen(port, () =>
  console.log(`server is running on http://localhost:${port}/`)
);

export default app   