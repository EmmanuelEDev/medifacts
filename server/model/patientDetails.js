import mongoose from "mongoose";
const patientDetailsschema = mongoose.Schema(
    {
        firstname: {
            type:String,
            required:true,
        }, 
        lastname: {
            type:String,
            required:true,
        },
        email: {
            type:String,
            required:true,
            unique:true,
        },
        folioNumber: {
            type:String,
            required:true,
            unique:true,
        },
        password: {
            type:String,
            required:true
        }

    }
) 
const PatientDetails = mongoose.model("PatientDetails",patientDetailsschema)

export default PatientDetails