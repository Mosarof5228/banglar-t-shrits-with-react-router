import React from 'react';
import { useState } from 'react';

const Cart = ({ cart, handleRemoveFromCart }) => {


    return (
        <div className='sticky top-20'>
            <h2 className='text-center font-bold text-green-400 text-1xl'>You have added {cart.length} products</h2>
            <div className='text-center mt-4'>
                {
                    cart.map((product, index) => <p key={product._id}>{index + 1}.{product.name} <button onClick={() => handleRemoveFromCart(product._id)} className='p-2 py-0 m-1 bg-slate-200'>X</button> </p>
                    )
                }
            </div>
        </div>
    );
};

export default Cart;