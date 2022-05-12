var express = require('express');
var app = express();
const port = process.env.PORT || 1001;

app.get("/",(req,res)=>{
   res.send("hi you are successfully entered the home page");
});

app.get("/home",(req,res)=>{
   res.send("HOME : hi you are successfully entered the home page");
});

app.listen(port,()=>{
	console.log("successfull listen");
});