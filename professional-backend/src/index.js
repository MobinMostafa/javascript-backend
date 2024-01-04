import db_connect from "./db/index.js";
import dotenv from "dotenv"
import { app } from "./app.js";


dotenv.config({
    path: './env'
})

db_connect()
.then(() => {
   app.listen(process.env.PORT || 8000, () => {
     console.log(`server is start on port number ${process.env.PORT}`)
   }) 
})
.catch((error) => {
   console.log(error)
})


// import express from 'express'
// const app = express()
// const port = process.env.MONGODB_URI
// ;( async () => {
//     try{
//     await mongoose.connect(`${port}/${db}`)
//     app.on("error", (error) => {
//         console.log("Error: ", error)
//         throw error
//     })

//     app.listen(port, () => {
//          console.log(`app is start on port ${port}`)
//     })
//     }catch(error){
//     console.error("Error :", error);
//     throw error
//     }
// } )()