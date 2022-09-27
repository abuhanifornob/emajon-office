import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';


const Product = (props) => {
    const {product,cartClickHandelar}=props;
    const {img,name,price,seller,ratings}=product;
    
    
    return (
        <div className='product'>
           <img src={img} alt=""></img>
           <div className='product-info'>
           <p className='product-name'>{name}</p>
           <p className='product-price'>Price: ${price}</p>
           <p><small>Manufacturer : {seller}</small> </p>
           <p><small>Rating : {ratings} start</small></p>
           </div>
           <button onClick={()=>cartClickHandelar(product)} className='cart-btn'>
            <p className='btn-text'>Add to Cart </p>
               <FontAwesomeIcon icon={faShoppingCart} className="ficon" />
          
           </button>
           
        </div>
    );
};

export default Product;