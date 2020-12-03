// import express from 'express'
const express =require("express");
const mongoose=require("mongoose");
const Cards =require('./dbCard');
const Cors =require('cors');
// import mongoose from 'mongoose'
// import Cards from './dbCard'
// import Cors from 'cors'

//app config
const app=express();
const port= process.env.PORT||8001;
const connection_url='mongodb+srv://admin:8EKCWZeKpa9oOlrf@cluster0.ucfds.mongodb.net/tinderdb?retryWrites=true&w=majority'

//App middleware

app.use(express.json())
app.use(Cors())
//Db config
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})

//API endpoints
app.get("/",(req,res)=>res.status(200).send("hbfvbhbcbhdf"));

app.post('/tinder/cards',(req,res)=>{
    const dbCard=req.body;

    Cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    });
});
app.get('/tinder/cards',(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    });
});
//app listener

app.listen(port,()=>console.log('listening on localhost'))

// 8EKCWZeKpa9oOlrf