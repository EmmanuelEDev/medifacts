import mongoose from "mongoose";
const patientuserschema = mongoose.Schema(
    {
        firstname: {
            type:String,
            required:true,
            unique:true
            
        }, 
        lastname: {
            type:String,
            required:true
        },
        email: {
            type:String,
            required:true
        },
        password: {
            type:String,
            required:true
        }

    }
) 
const PUser = mongoose.model("Patient",patientuserschema)

export default PUser