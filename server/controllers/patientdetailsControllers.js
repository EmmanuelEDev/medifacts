import asyncHandler from "express-async-handler";
import PatientDetails from "../model/patientDetails";

const createPatient = async (req, res) => {
    try {
        const newPatient = new PatientDetails(req.body);
        await newPatient.save();
        res.status(201).json({ message: 'Patient created successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating patient' });
    }
};
const addToCart = asyncHandler(async(req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if(user && password == user.password){
        res.send("You are valid!✅")
    }else{
        res.status(401)
        throw new Error ("Oops, this email or password are invalid! ❌")
    }
})

export {createPatient}