import mongoose from 'mongoose'

const medicalRecordSchema = mongoose.Schema({}, {timestamps: true})

export const Medical = mongoose.model("Medical", medicalRecordSchema)