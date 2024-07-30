const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://yradadiya16:bsflKX0jNPTLNHWO@cluster0.szqnuaz.mongodb.net/Todo_App");

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todos',todoSchema);

module.exports={
    todo
}