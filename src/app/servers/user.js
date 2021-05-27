const bodyParser = require("body-parser");
const express=require("express");
const app=express();
const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://asha1:asha123@cluster0.odxl8.mongodb.net/users",{useNewUrlParser:true,useUnifiedTopology:true});
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
/*const userSchema={
      username:String,
      email:String,
      password:String
  }*/
  var userSchema = new mongoose.Schema({
    username:String,
    email: String,
    password: String
   });
  const user=mongoose.model("user",userSchema);//user login schema
  
app.get('/login',(req,res)=>
{
  res.send("successful");  
})
app.post("/register", (req, res) => {
  var myData = new user(req.body);
  myData.save()
  .then(item => {
  res.send("item saved to database");
  })
  .catch(err => {
  res.status(400).send("unable to save to database");
  });
 });
 /*
app.post('/register',(req,res)=>{
     let newuser= new user({
          username:req.body.username,
          email:req.body.email,
          password:req.body.password
      })
      newuser.save();
      res.redirect("/login");
      res.send("success");
      
})*/

app.post('/',(req,res)=>{
          console.log("server is running");
          res.send("its working");
})
app.listen(5000);