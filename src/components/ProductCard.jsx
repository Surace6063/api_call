import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div className='border rounded-xl shadow-md p-2 space-y-2'>
       <div className='aspect-square rounded-xl'>
          <img src={item.images[0]} alt="" className='aspect-square w-full rounded-md' />
       </div>
       <div>
        <h1 className='font-semibold text-lg truncate'>{item.title}</h1>
        <p className='text-sm text-gray-500'>{item.category.name}</p>

        <p className='font-semibold'>${item.price}</p>

        <button 
    className='bg-red-500 hover:bg-red-600 py-2 w-full text-white rounded-md'>
            Add to cart
            </button>
       </div>
    </div>
  )
}

export default ProductCard