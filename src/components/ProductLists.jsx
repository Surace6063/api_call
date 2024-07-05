import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const ProductLists = () => {
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(false)
    
    const getAllProducts = async () => {
        try {
            setLoading(true)
            const response = await axios.get('https://api.escuelajs.co/api/v1/products')
            setProducts(response.data)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
      getAllProducts()
    },[])

    if(loading) return <span>loading...</span>

  return (
    <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 
    md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto'>
        {
            products.slice(0,10)?.map(item => (
                <ProductCard key={item.id} item={item} />
            ))
        }
    </div>
  )
}

export default ProductLists