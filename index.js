import express from "express";
import { data } from "./data.js";
import cors from 'cors'

const app = express();
const port = 420;

app.use(cors())

app.get('/home', (req, res)=>{
    res.send(data)
})

app.listen(port, () =>
  console.log(`server is running on http://localhost:${port}/`)
);
