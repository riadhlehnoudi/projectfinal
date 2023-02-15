const express =require("express");
const Formation = require("../models/FormationsModels");
const FormationRouter=express.Router();

FormationRouter.post("/add",async(req, res)=> {
    try {
        const newFormation=new Formation (req.body);
        const result=await newFormation.save();
        res.status(200).send({Formation:result,msg:"formation added succsesfuly"});

    }catch(error){
        console.log(error);
    }
});

FormationRouter.get("/",async(req, res)=> {
    try {
        
        const result=await Formation.find();
        res.status(200).send({Formation:result,msg:"all formations"});

    }catch(error){
        console.log(error);
    }
});
FormationRouter.put("/:id",async(req, res)=> {
    try {
        
        const result=await Formation.findByIdAndUpdate
        ({_id:req.params.id},
            { $set: {...req.body}});
        res.status(200).send({msg:"formation updated"});

    }catch(error){
        console.log(error);
    }
});
FormationRouter.delete("/:id",async(req, res)=> {
    try {
        
        const result=await Formation.findByIdAndDelete ({_id:req.params.id});
        res.status(200).send({msg:"formation deleted"});

    }catch(error){
        console.log(error);
    }});

module.exports = FormationRouter;