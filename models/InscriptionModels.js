const mongoose= require("mongoose");


const InscriptionSchema = new mongoose.Schema({
    NameUser:String,
    NameFormation:String,
    Prix:Number,
    Date:String,
    Autre:String,
});

const Inscription=mongoose.model("Inscription",InscriptionSchema);
module.exports=Inscription;