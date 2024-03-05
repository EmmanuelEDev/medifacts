import mongoose from "mongoose";
const doctoruserschema = mongoose.Schema(
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
const DUser = mongoose.model("Doctors",doctoruserschema)

export default DUser