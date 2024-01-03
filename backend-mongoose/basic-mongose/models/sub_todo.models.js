import mongoose from "mongoose";

const {Schema} = mongoose

const Sub_todoSchema = new Schema({
    content: {
        type: String,
        required: true 
    },
    complete: {
        type: Boolean,
        default:false 
    },
    createdBy:{
     type: mongoose.Schema.Types.ObjectId,
     ref: "User",
    }
}, {timestamps: true})

export const Sub_Todo = mongoose.model("Sub_Todo", Sub_todoSchema)