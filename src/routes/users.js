import express from "express"
import db from "../db/conn.js"

const userRoutes = express.Router()
 
userRoutes.get("/users", async (req, res)=>{
    let collection = await db.collection("smokey")
    let results = await collection.find({}).limit(20).toArray()
    res.send(results)
})

userRoutes.post('/users', async (req, res)=>{
    let data = req.body
    if(!data) res.send('please send something').status(400)
    data.date = new Date()
    let collection = await db.collection("smokey")
    let results = await collection.insertOne(data) 

    if(results){
        res.send('user saved successfully').status(201)
    } else if(!results){
        res.send('server error').status(500)  
    } 

})




export default userRoutes
