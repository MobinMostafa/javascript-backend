import mongoose from "mongoose";
import { db } from "../constants.js";


const db_connect = async () => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${db}`)

       console.log(`mongoose connected !!! ${connectionInstance.connection.host}`)

    } catch (error) {
        console.log(`db connection Error : ${error}`)
        process.exit(1)
    }
}

export default db_connect;