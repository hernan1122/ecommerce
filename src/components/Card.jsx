import React from 'react';

import headphone from '../images/headphones.avif'

function Card() {
  return (
    <div className='w-56 h-60 cursor-pointer'>
      <figure className='w-full h-4/5 mb-2 relative'>
        <span className='absolute bottom-0 left-0 m-2 px-3 py-0.5 bg-white rounded-lg text-black text-xs'>Electronics</span>
        <img className='w-full h-full object-cover rounded-lg' src={headphone} alt="" />
        <div className='w-6 h-6 m-2 absolute top-0 right-0 flex justify-center items-center rounded-full bg-sky-500'>+</div>
      </figure>
      <div className='flex justify-between items-center border-b-2 border-sky-500'>
        <p className='text-sm font-light'>Headphones</p>
        <p className='text-lg font-medium'>$ 300</p>
      </div>
    </div>
  );
}

export default Card;
