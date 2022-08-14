const express= require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const port=8000;
const app= express();
const ObjectId = require("mongodb").ObjectId;

const User = require('./models/User')
mongoose.connect('mongodb+srv://emperror:cpcppdsa@cluster0.zclhnt7.mongodb.net/Intermediate?retryWrites=true&w=majority')

app.use(bodyParser.json());

app.listen(port, ()=>{
	console.log(`server is listening on port:${port}`)
})

// CREATE
app.post('/users',(req,res)=>{
  User.create({
    name: req.body.newData.name,
    email: req.body.newData.email,
    password: req.body.newData.password
  }, (err, data) => {
    if (err){
      res.json({success: false,message: err})
    } else if (!data){
      res.json({success: false,message: "Not Found"})
    } else {
      res.json({success: true,data: data})
    }
  })
})

// app.route('/users/:id')
// READ
app.get((req,res)=>{
  let myquery = { _id: ObjectId(req.params.id) };
  User.findById(myquery, (res, data) => {
    if(err){
      res.json({succes: false, message: err})
    } else if(data){
      res.json({success: true, data: data})
    }
  })
})
// UPDATE
app.put((req,res)=>{
  // User.findByIdAndUpdate()
})
// DELETE
app.delete((req,res)=>{
  // User.findByIdAndDelete()
})