import express from "express"
import db from "../db/conn.js"

const userRoutes = express.Router()

userRoutes.get("/users", async (req, res)=>{
    let collection = await db.collection("smokey")
    let results = await collection.find({}).limit(30).toArray()
    res.send(results)
})

export default userRoutes
