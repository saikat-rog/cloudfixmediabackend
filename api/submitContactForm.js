import contactFormModel from "../model/contact-form-model.js";
import express from "express";

const router = express.Router();
const submitContactForm = async (req, res) => {
    const {name, email, phone, message} = req.body;
    try{
        await contactFormModel.create({name, email, phone, message});
        res.json({message: "Form Submitted"});
    }
    catch(error){
        console.log(error);
    }
}

router.post('/', submitContactForm);
router.get('/', (req, res)=>{
    res.json("Impossible GET req, rather send POST req.");
})

export default router;