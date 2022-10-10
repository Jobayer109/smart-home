import React from 'react';

const Product = ({ product,handleAddToCart }) => {
    // console.log(product);
    const {id, name, price, picture } = product;
    return (
        <div className='border border-gray-300 rounded-lg mx-auto p-2'>
            <img className='h-52 w-96 mx-auto  object-center p-2 shadow-lg rounded-lg'
                src={picture} alt="" />
            <div className='ml-3'>
                <h2 className='text-xl font-bold mt-2'>{name}</h2>
                <p className='font-bold'>Price: <span className='text-orange-500'>{ price}</span>$</p>
            </div>
            
            <button onClick={()=>handleAddToCart(product)} className="w-[80%] ml-6 my-3 btn btn-sm btn-outline btn-success">
                Add To Cart
            </button>
           

        </div>
    );
};

export default Product;