import React from 'react';

function Card(data) {
  return (
    <div className='w-56 h-60 mb-2 cursor-pointer'>
      <figure className='w-full h-4/5 mb-2 relative'>
        <span className='absolute bottom-0 left-0 m-2 px-3 py-0.5 bg-white rounded-lg text-black text-xs'>{data.data.category.name}</span>
        <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title} />
        <div className='w-6 h-6 m-2 absolute top-0 right-0 flex justify-center items-center rounded-full bg-sky-500'>+</div>
      </figure>
      <div className='flex justify-between items-center'>
        <p className='text-sm font-light'>{data.data.title}</p>
        <p className='text-lg font-medium'>$ {data.data.price}</p>
      </div>
    </div>
  );
}

export default Card;
