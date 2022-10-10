import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { addToDb } from '../../../src/utilities/fakedb';
import { CartContext, ProductsContext } from '../../Root/Root';
import Product from '../Product/Product';

const Shop = () => {
    const products = useContext(ProductsContext)
    const [cart, setCart]= useContext(CartContext)

    const handleAddToCart = (product) => {
        // console.log(product)
        let newCart = [];
        const exists = cart.find(exProduct => exProduct.id === product.id) 
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
                      
        } else {
            const rest = cart.filter(exProduct => exProduct.id !== product.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart)
        addToDb(product.id)
        toast.success('product added !', {autoClose:300})

    }
    return (
        <div className='grid grid-cols-4 sm:text-center gap-10 w-[90%] mx-auto my-8 content-center'>
            {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                ></Product>)
            }
            {

            }


           
        </div>
            
    );
              
};

export default Shop;