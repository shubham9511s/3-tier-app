const express = require('express')
const mongoose = require("mongoose");
const cors = require('cors')
const UserModel = require('./model')


const app = express()
app.use(cors())
app.use(express.json())

const PORT=5000;
const URI="mongodb+srv://shubhamssc100:EbFiDLczIbS0nJVe@project0.gystw8r.mongodb.net/project0";



const DatabaseDB = async () => {
  try {
     await mongoose.connect(
     URI
    );
    app.listen(PORT , ()=>{
      console.log(`server run on localhost:${PORT}`);
    });
    console.log("MONGODB IS connected sucessfully");

  } catch (error) {
    console.log("MONGODB Connection Failed ", error);
    process.exit(1);
  }
};

DatabaseDB();//Calling Database Function

// Post Data
app.post('/add',((req, res) => {
    const data =req.body.data;
    UserModel.create({
        data:data
    }).then(result => res.json(result))
    .catch(err => res.json(err))
}))

//Get data
app.get('/get',(req,res) =>{
    UserModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))

})

