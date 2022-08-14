const express= require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const port=8000;
const app= express();

const User = require('./models/User')
mongoose.connect('mongodb+srv://emperror:cpcppdsa@cluster0.zclhnt7.mongodb.net/Intermediate?retryWrites=true&w=majority')

app.use(bodyParser.json());

app.listen(port, ()=>{
	console.log(`server is listening on port:${port}`)
})

// CREATE
app.post('/users',(req,res)=>{
  // User.create()
})

app.route('/users/:id')
// READ
.get((req,res)=>{
  // User.findById()
})
// UPDATE
.put((req,res)=>{
  // User.findByIdAndUpdate()
})
// DELETE
.delete((req,res)=>{
  // User.findByIdAndDelete()
})

app.listen(port, (res, res) => {
  console.log('app on running on ${port} ')
})