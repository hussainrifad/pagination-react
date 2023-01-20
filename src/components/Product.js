import React from 'react';

const product = ({product, handleCart}) => {
    
    const {category, img, name, seller, price, _id} = product;

    return (
        <div className='hover:shadow-2xl flex flex-col justify-between border p-2 rounded rounded-lg'>
           <div>
            <img src={img} alt="" srcset="" />
           </div>
           <div className='p-5 '>
            <h1 className=' text-xl font-bold'>{name.slice(0,20)}</h1>
            <h1 className='text-lg font-semibold'>${price}</h1>
            <h1 className='text-md font-semibold'>Seller : {seller}</h1>
           </div>
           <div className='flex flex-row justify-center my-4'>
            <button onClick={() => handleCart(product)} className='border w-2/5 py-1 border-sky-600 text-sky-800 font-semibold hover:bg-green-600 hover:text-white'>Add to cart</button>
           </div>
        </div>
    );
};

export default product;