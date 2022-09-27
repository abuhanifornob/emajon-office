
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
      const[products,setProducts]=useState([]);
      const[carts,setCarts]=useState([])

      useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
      },[])

      const cartClickHandelar=(products)=>{
        const newCarts=[...carts,products];
        setCarts(newCarts);
      }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        cartClickHandelar={cartClickHandelar}
                        
                        ></Product>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={carts}></Cart>
            </div>
        </div>
    );
};

export default Shop;