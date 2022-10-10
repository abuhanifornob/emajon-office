import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart);
    let total=0;
    let totalShipping=0;
    let tax;
    let grandTotal;
    let productQuty=0;
    for (let product of cart){
      productQuty=productQuty+product.quantity;
          total =total + (product.price)*product.quantity;
          totalShipping= totalShipping+product.shipping
            
    }
    tax=parseFloat((total*0.1).toFixed(2));
    grandTotal=total+totalShipping+tax;
    return (
        <div>
              <p className='order-text'>Order Summary</p>
              <div className='cart-info'>
              <p>Selected Items:{productQuty}</p>
                <p>Total Price : ${total}</p>
                <p>Total Shipping Charge : ${totalShipping}</p>
                <p>Text : ${tax}</p>
                <h3>Grand Total: ${grandTotal}</h3>
              </div>
                
        </div>
    );
};

export default Cart;