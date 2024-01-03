import mongoose from 'mongoose'

const orderItemsSchema = mongoose.Schema({
       productPrice: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
       },
       quantity: {
         type: Number,
         required: true,
       }
}, {timestamps: true})

const orderSchema = mongoose.Schema({
    orderPrice:{
        type: Number,
        required:true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    orderItems: {
       type: [orderItemsSchema]
    } 

}, {timestamps: true})

export const Oreder = mongoose.model("Order", orderSchema)