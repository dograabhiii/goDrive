const express=require('express')
let app=express();
require("./config")

const vehModel=require('./vehinfo')

const cors=require('cors');
const vehinfo = require('./vehinfo');

app.use(cors());

app.use(express.json());

app.post("/a",async(req,res)=>{
    let data=new vehModel(req.body)
    let result=await data.save()
    res.send(result)
})

app.get("/info", async(req,res)=>{
    let data= await vehModel.find();
    if(data.length>0){
        res.send(data)
    }
    else{
        res.send({"result":"no object found"})
    }
})

app.get("/prifill/:id",async(req,res)=>{
    let data=await vehModel.findOne({_id:req.params.id})
    if(data){
        res.send(data)
    }
    else{
        res.send({"result":"user not found"})
    }
})


// process.env.PORT Render se port uthayega, aur agar nahi mila toh 7000 use karega
const PORT = process.env.PORT || 7000; 

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server connected on port ${PORT}`);
});