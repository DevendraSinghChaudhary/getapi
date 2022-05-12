var express = require('express');
var app = express();

app.get("/",(req,res)=>{
   res.send("hi you are successfully entered the home page");
});

app.get("/home",(req,res)=>{
   res.send("HOME : hi you are successfully entered the home page");
});

app.listen("1001",()=>{
	console.log("successfull listen");
});