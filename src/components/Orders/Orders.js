import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import Test from '../Test/Test';

const Orders = () => {
    const {products,previousCart}=useLoaderData();   //return {products,previousCart}
    const [carts,setCart]=useState(previousCart);
    return (
        <div className='shop-container'>
            <div className="review-product-container">
                {
                   carts.map(product=><ReviewItem
                     key={product.id}
                     product={product}
                   ></ReviewItem>)
                }
              
            </div>
            <div className="cart-container">
               <Cart cart={carts}></Cart>
            </div>
        </div>
    );
};

export default Orders;