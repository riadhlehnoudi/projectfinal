const mongoose= require("mongoose");


const formationSchema = new mongoose.Schema({
    NameFormation:String,
    Categorie:String,
    Description:String,
    image:String,
    details:String,
    prix:Number,
    Autres:String,

});

const Formation=mongoose.model("Formation",formationSchema);
module.exports=Formation;