import React from 'react';

const Cart = (props) => {
    return (
        <div>
              <p className='order-text'>Order Summary</p>
                <p>Selected Items:{props.cart.length}</p>
                <h1>Heloo</h1>
        </div>
    );
};

export default Cart;