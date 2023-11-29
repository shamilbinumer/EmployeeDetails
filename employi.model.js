import mongoose from "mongoose";
const schema=new mongoose.Schema({
    Empid:{type:String},
    Name:{type:String},
    Email:{type:String},
    PhNumber:{type:String},
    Address:{type:String},
    Designation:{type:String},
    Sallery:{type:String},
    Expirience:{type:String},
    Photo:{type:String}

})

export default mongoose.model.Employees||mongoose.model("Employe",schema)