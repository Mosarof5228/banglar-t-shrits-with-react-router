import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';

const Home = () => {
    const [cart, setCart] = useState([])

    const handleAddToCart = (tshirt) => {
        console.log(tshirt)
        const exist = cart.find(product => product._id === tshirt._id);
        if (exist) {
            alert("already exist")
        } else {
            const newCart = [...cart, tshirt];
            setCart(newCart)
        }


    }
    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product._id !== id);
        setCart(remaining)

    }
    const tshirts = useLoaderData();
    return (
        <div className='grid grid-cols-12 mt-4 gap-4'>
            <div className='col-span-8 grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 text-center mx-auto ml-4 md:ml-16'>
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}

                    ></TShirt>)
                }
            </div>
            <div className='col-span-4 mr-4 md:mr-7 border border-gray-600 bg-gray-50 '>
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}

                ></Cart>
            </div>
        </div>
    );
};

export default Home;         