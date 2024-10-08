import mongoose from "mongoose";
const contactFormSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

const contactFormModel = new mongoose.model("Contactformresponses", contactFormSchema);
export default contactFormModel;