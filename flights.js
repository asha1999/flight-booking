const express=require("express");
const app=express();
const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://asha1:asha123@cluster0.odxl8.mongodb.net/flights",{useNewUrlParser:true,useUnifiedTopology:true});

app.get('/',(req,res)=>
{
      res.send("this is the flight service");
})
app.post('/',(req,res)=>{
          console.log("server is running");
})
app.listen(7000);