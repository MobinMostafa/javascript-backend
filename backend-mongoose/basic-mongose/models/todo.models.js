import mongoose from "mongoose"

const {Schema} = mongoose

const todoSchema = new Schema({
    content: {
        type:String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false,
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Sub_Todo",
        }
    ]    // array of subtodos
},{timestamps:true})

export const Todo = mongoose.model("Todo", todoSchema)