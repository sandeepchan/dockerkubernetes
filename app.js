const express = require("express")

const app = express()
app.get("/data", async(req, res)=>{
    res.send("h1")
})
app.listen(3000, ()=>{
    console.log("Server Started")
})