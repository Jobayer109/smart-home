import React, { useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';


export const ProductsContext = React.createContext([]);
export const CartContext = React.createContext([]);


const Root = () => {
    const {products, initialCart} = useLoaderData();
    const [cart, setCart] = useState(initialCart);


       
    return (
            <ProductsContext.Provider value={products}>
              <CartContext.Provider value={[cart, setCart]}>
                    <Header></Header>
                    <Outlet></Outlet>
                    <Footer></Footer>
               </CartContext.Provider>
           </ProductsContext.Provider>
            
    );
};

export default Root;