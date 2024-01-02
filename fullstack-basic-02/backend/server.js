import express from 'express'

const app = express()

app.use(express.static('dist'))

// app.get('/', (req,res) => {
//     res.send("server is ready")
// })
app.get('/api/products', (req, res) => {
   const products = async () => {
        const product = await fetch("https://freetestapi.com/api/v1/products")
        const dummyProduct = await product.json()
        res.send(dummyProduct)
       }
       products()
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server is ready at http://localhost:${port}`)
})