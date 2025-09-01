import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import ProductItem from '../Components/ProductItem'
import { FaMagnifyingGlass } from "react-icons/fa6";

function ProductPage() {
    const[ products , setProduct ] = useState([])
    const[ searchTerm ,setSearchTerm ] = useState("")
    const PathAPI = "https://68b54e01e5dc090291ae8c16.mockapi.io/products"
    useEffect(()=>{
        const fetchProducts = async () => {
            
        
        try{
            const respons = await fetch(`${PathAPI}`)
            const data = await respons.json()
            setProduct(data)
        }catch(error){
            toast.error("Failed to fetch Products" , {autoClose:2000})
        }
    }
    fetchProducts()
    }, [])
    console.log(products)


    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    const filteredProducts = products.filter((product)=>
        product.pro_name.toLowerCase().includes(searchTerm.toLowerCase())
    )


    return (
    <>
        <div className='flex item-center gap-2 mb-4'>
            <input
                type="text"
                placeholder='Search product...'
                value={searchTerm}
                onChange={handleSearch}
                className='w-full p-2 border rounded'
            />
            <button className='bg-blue-400 text-white p-2 rounded flex items-center'>
            <FaMagnifyingGlass className='mr-2'/>Search
            </button>
        </div>

        {filteredProducts.length > 0 ? (
            <table className='min-w-full mt-6 border-collapse'>
            <thead className='bg-gray-400'>
                <tr className='bg-gray-200'>
                    <th className='px-4 py-2 '>#</th>
                    <th className='px-4 py-2 '>Name</th>
                    <th className='px-4 py-2 '>Description</th>
                    <th className='px-4 py-2 '>Price</th>
                    <th className='px-4 py-2 '>Quantity</th>
                    <th className='px-4 py-2 '>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    filteredProducts.map((product , index)=>(
                        <ProductItem
                            key={index}
                            id={index}
                            product={product}
                        />
                    ))
                }
            </tbody>
        </table>) : (
            <p className='mt-6 text-center text-gray-500'>
                No Product found for matching your search
            </p>
        )}

        
    </>
  )
}

export default ProductPage