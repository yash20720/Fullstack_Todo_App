const express=require("express");
const { createTodo, updateTodo } = require("./types");
const cors=require("cors");
const { todo } = require("./db");
const app=express();
const PORT=3000;

app.use(express.json());
app.use(cors());

app.post('/todo', async (req,res)=>{
    const createPayload=req.body;
    const parsedPayload=createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent wrong inputs"
        })
        return;
    }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"todo created"
    })

})
app.get('/todos',async (req,res)=>{
    const todos=await todo.find({});
    res.json({
        todos
    })
})
app.put('/comleted',async (req,res)=>{
    const updatePayload=req.body;
    const parsedPayload=updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent wrong inputs"
        })
        return;
    }
    await todo.updateOne({_id:req.body.id},{$set:{completed:true}});
    res.json({
        msg:"todo marked as completed"
    })
})


app.listen(PORT,()=>{
    console.log("STARTED");
})