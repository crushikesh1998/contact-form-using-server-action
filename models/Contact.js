import mongoose from "mongoose";


const ContactSchema = new mongoose.Schema({
    name:{
        type : String,
        required :[true,"Name is required"],
        trim :true,
        maxlength : [100, "Name cannot exceed 100 character"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        match: [/^\S+@\S+\.\S+$/, "Please enter valid email"],
        lowercase: true,
        trim: true,
      },
    subject :{
        type :String,
        required :[true,"Subject is required"],
        trim  :true,
        maxlength : [200,"subject cannot exceeded 200  characters"]
    },
    message :{
        type :String,
        required :true,
        trim: true,
        maxlength :[1000,"message cannot exceeded 1000 characters"]
    },
    status:{
        type :String,
        enum :["new","read","replied"],
        default :"new"
    },
},{
    timestamps: true
})


const Contact = mongoose.models.Contact || mongoose.model("Contact",ContactSchema)
export default Contact;