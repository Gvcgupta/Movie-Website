const schemas = require('./schemas.js')
const queries = require('./queries.js')

const express = require('express')
const mongoose = require('mongoose')
const port=9000
const app = express()
app.use(express.json())

mongoose.connect('mongodb+srv://poirot22:moviepro@moviesdb.6iptvma.mongodb.net/moviesite').then(()=>{
    console.log('connected to database')
}).catch((err)=>{console.log(err)})


app.post("/addUser",(req,res)=>{
    userData=req.body 

    queries.addUser(userData).then(response=>{
        res.send(response)
    })
})


app.listen(port,()=>{
    console.log('listening at port '+port)
})