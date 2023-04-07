import React from 'react';

const TShirt = ({ tshirt, handleAddToCart }) => {
    const { picture, name, price, _id } = tshirt;
    return (
        <div className='border border-gray-700 p-4'>
            <img className='w-56 h-56' src={picture} alt="" />
            <h2 className='font-bold mt-2'>Name: {name}</h2>
            <button onClick={() => handleAddToCart(tshirt)} className='bg-gray-200 rounded px-3 mt-2 w-3/4 py-2'>Buy Now</button>
        </div>
    );
};

export default TShirt;