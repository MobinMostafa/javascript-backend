import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique:true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        unique:true,
        lowercase: true,
    }
}, {timestamps: true})


export const User = mongoose.model("User", userSchema)