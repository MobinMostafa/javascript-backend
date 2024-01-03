
import express from 'express'

const app = express()


app.get('/', ( req, res ) => {
    res.send("<h1>mongoose practice</h1>")
})


const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`server start on http://localhost:${port}`)
})

