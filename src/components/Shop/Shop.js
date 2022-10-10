
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb ,getLocatDataDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
      // const[products,setProducts]=useState([]);
      const products=useLoaderData();
      const[carts,setCarts]=useState([])

      // useEffect(()=>{
      //   fetch('products.json')
      //   .then(res=>res.json())
      //   .then(data=>setProducts(data))
      // },[]);

      useEffect(()=>{
        const getLocatData=getLocatDataDb();
      
          const saveData=[];
          for (const id in getLocatData){
              const findSelectData=products.find((product)=> product.id===id)
              if(findSelectData){
                findSelectData.quantity=getLocatData[id]
               saveData.push(findSelectData);
              }
              }
                              
        setCarts(saveData);
        
        
      },[products])

      const cartClickHandelar=(products)=>{
        let selectedProducID=products.id;
        let newCarts=[];
        const exsiting=carts.find(product=> product.id===selectedProducID);
        if(!exsiting){
          products.quantity=1;
          newCarts=[...carts,products];
        }
        else{
          const newQuantity=products.quantity+1;
          products.quantity=newQuantity;
          const rest=carts.filter(product=>!(product.id === selectedProducID));
          newCarts=[...rest,products];
        }
        console.log(carts);
      
        setCarts(newCarts);
        addToDb(products.id)
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