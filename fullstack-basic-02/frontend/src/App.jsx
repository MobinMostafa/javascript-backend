import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('/api/products')
      .then((res) => {
           setProducts(res.data)
      })
      .catch((e) => {
          console.log(e)
      })
  })
  
  // console.log(products[0]["title"])
  return (
  <>
    <h1>Product practice</h1>
    <h2>All products {products.length}</h2>
   <div className="wrapper">
   {products.map((product) => {
      const {id, name, image,price,description,color} = product
     return (
      <div key={id} className='product'>
        <img src={image} alt="" />
        <h2>{name}</h2>
        <p>{description}</p>
        <h2>{price}</h2>
         <p>{color}</p>
     </div>
      
    )}
  )}
   </div>
  
  </>
  )
}

export default App
