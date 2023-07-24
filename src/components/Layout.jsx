import React from 'react';

function Layout({ children }) {
  return (
    <div className='mt-20 flex flex-col items-center text-white'>
      { children }
    </div>
  );
}

export default Layout;
