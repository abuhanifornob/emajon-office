import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product}) => {
    const{img,name,quantity,price}=product;
    return (
        <div className='review-item-container'>
            <div className='review-image'>
               <img src={img} alt="" />
            </div>
            <div className='review-product-details-container'>
                <div className='review-product-details'>
                    <p>{name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Quantity:{quantity}</small></p>

                </div>
                <div className='review-product-btn'>
                    <button>This is Button</button>

                </div>
            </div>
            
        </div>
    );
};

export default ReviewItem;