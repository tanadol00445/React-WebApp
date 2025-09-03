import React, { useRef , useState } from 'react'



function NewProduct() {
    const [product , setProduct] = useState ({
        pro_name: "" ,
        pro_des: "",
        pro_price: "",
        pro_qty: "",
    })
    const dialog = useRef
    const openDialog = () => dialog.current.showModal();
    const closeDialog = () => dialog.current.close();
    const handleSubmit = (e) => {}
    const handleChange = (e) => {}
  return (
    <>
        <button onClick={openDialog} className='w-full bg-blue-500 text-white p-2 rounded mt-2'
        > Add New Product 
        </button>

        <dialog ref={dialog} 
        className='rounded-md w-[480px]' 
        onClick={(e) => e.target === e.currentTarget && closeDialog() }
        >
            <form className='p-6 ' onSubmit={handleSubmit}>
                <h3 className='font-semibold text-xl mb-4'> Add New Product</h3>
                <div className='mb-4'>
                    <label>Product Name</label>
                    <input 
                    type='text' 
                    name='Product Name'
                    value={product.pro_name}
                    onChange={handleChang}
                    placeholder='Product Name'
                    className='w-full p-2 border rounded mt-2'
                    required
                    />
                </div>
                
                <div className='mb-4'>
                    <label>Product Description</label>
                    <input 
                    type='text' 
                    name='Product Description'
                    value={product.pro_des}
                    onChange={handleChang}
                    placeholder='Product Description'
                    className='w-full p-2 border rounded mt-2'
                    required
                    />
                </div>

                <div className='mb-4'>
                    <label>Product Price</label>
                    <input 
                    type='text' 
                    name='Product Price'
                    value={product.pro_price}
                    onChange={handleChang}
                    placeholder='Product Price'
                    className='w-full p-2 border rounded mt-2'
                    required
                    />
                </div>

                <div className='mb-4'>
                    <label>Product Quantity</label>
                    <input 
                    type='text' 
                    name='Product Quantity'
                    value={product.pro_qty}
                    onChange={handleChang}
                    placeholder='Product Quantity'
                    className='w-full p-2 border rounded mt-2'
                    required
                    />
                </div>

                <div className='mt-6 text-right space-x-2'>
                        <button className='rounded border border-teal-500 px-3 py-2 hover:bg-teal-600' 
                        type ="onSubmit">
                        
                            Add Product
                        </button>
                </div>
                <div className='mt-6 text-right space-x-2'>
                        <button className='rounded border border-gray-200 px-3 py-2 hover:bg-gray-50'  
                        onClick={closeDialog}>
                        
                            close
                        </button>
                </div>

            </form>
        </dialog>
    </>
  )
}

export default NewProduct