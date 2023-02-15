const express =require("express");
const Inscription = require("../models/InscriptionModels");
const FormationRouter=express.Router();

InscriptionRouter.post("/add",async(req, res)=> {
    try {
        const newInscription=new Inscription (req.body);
        const result=await newInscription.save();
        res.status(200).send({Inscription:result,msg:"Inscription added succsesfuly"});

    }catch(error){
        console.log(error);
    }
});

InscriptionRouter.get("/:id",async(req, res)=> {
    try {
        
        const result=await Inscription.findById({_id:req.params.id});
        res.status(200).send({Inscription:result,msg:"searched game"});

    }catch(error){
        console.log(error);
    }
});
InscriptionRouter.put("/:id",async(req, res)=> {
    try {
        
        const result=await Inscription.findByIdAndUpdate
        ({_id:req.params.id},
            { $set: {...req.body}});
        res.status(200).send({msg:"Inscription updated"});

    }catch(error){
        console.log(error);
    }
});
InscriptionRouter.delete("/:id",async(req, res)=> {
    try {
        
        const result=await Inscription.findByIdAndDelete ({_id:req.params.id});
        res.status(200).send({msg:"Inscription deleted"});

    }catch(error){
        console.log(error);
    }});

module.exports = InscriptionRouter;