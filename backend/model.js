const mongoose = require('mongoose')

const Todoschema = new mongoose.Schema({
    data:String
})

const UserModel = mongoose.model("todo",Todoschema)

module.exports= UserModel;